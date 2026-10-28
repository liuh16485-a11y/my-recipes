"""
极简局域网手机访问服务器 (零依赖，支持纯离线)
运行后自动识别本机局域网 IP，启动 HTTP 服务并自动打开电脑浏览器展示手机扫码二维码。
手机与电脑在同一局域网/Wi-Fi下，扫码或输入网址即可畅快使用！
"""
import http.server
import socketserver
import socket
import webbrowser
import os
import sys

PORT = 8080

def get_lan_ips():
    ips = []
    try:
        # 获取所有适配器 IP
        host_info = socket.gethostbyname_ex(socket.gethostname())
        for ip in host_info[2]:
            if not ip.startswith('127.'):
                ips.append(ip)
    except Exception:
        pass
    
    # 尝试通过 udp 探测默认网关路由 IP
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        default_ip = s.getsockname()[0]
        s.close()
        if default_ip not in ips and not default_ip.startswith('127.'):
            ips.insert(0, default_ip)
    except Exception:
        pass
        
    return ips if ips else ['127.0.0.1']

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(os.path.abspath(__file__)), **kwargs)
        
    def end_headers(self):
        # 允许跨域与缓存控制
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    lan_ips = get_lan_ips()
    primary_ip = lan_ips[0]
    
    global PORT
    for try_port in [8080, 8088, 8888, 8000, 9000]:
        try:
            httpd = socketserver.TCPServer(("", try_port), Handler)
            PORT = try_port
            break
        except OSError:
            continue
    else:
        print(f"❌ 端口占用，无法启动服务。")
        sys.exit(1)

    phone_url = f"http://{primary_ip}:{PORT}/index.html"
    qr_helper_url = f"http://localhost:{PORT}/index.html?connect_qr={primary_ip}:{PORT}"

    print("=" * 60)
    print("🍳 随身私房菜谱 - 局域网手机访问服务已启动！")
    print("=" * 60)
    print(f"💻 电脑端访问:    http://localhost:{PORT}/index.html")
    print(f"📱 手机端访问:    {phone_url}")
    if len(lan_ips) > 1:
        print(f"   备用网络地址:  " + ", ".join([f"http://{ip}:{PORT}" for ip in lan_ips[1:]]))
    print("-" * 60)
    print("💡 提示:")
    print(" 1. 确保手机和电脑连接在【同一个 Wi-Fi / 热点】下；")
    print(" 2. 已为您在电脑上打开引导页面，手机直接扫码即可打开；")
    print(" 3. 手机打开后，可点击浏览器菜单「添加到主屏幕」，无需网络亦可离线使用！")
    print(" 4. 按 Ctrl + C 可停止本服务。")
    print("=" * 60)

    try:
        webbrowser.open(qr_helper_url)
    except Exception:
        pass

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 服务已安全退出。")
        httpd.server_close()

if __name__ == '__main__':
    main()
