@echo off
chcp 65001 >nul
title 随身私房菜谱 - 局域网手机访问服务
cd /d "%~dp0"

echo ======================================================
echo    随身私房菜谱 - 正在启动局域网与手机访问服务...
echo ======================================================
echo.

python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未检测到 Python 环境，请先安装 Python 或直接在电脑上双击 index.html 运行。
    echo.
    pause
    exit /b
)

python server.py

pause
