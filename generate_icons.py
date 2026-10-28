"""
Generate offline PWA icons (192x192 and 512x512) in pure Python using standard library (zlib, struct).
Creates a stylish modern food/recipe icon.
"""
import zlib
import struct
import math
import os

def create_png(width, height, draw_func, filename):
    # RGBA image buffer
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0)  # filter type 0 (None)
        for x in range(width):
            r, g, b, a = draw_func(x, y, width, height)
            raw_data.extend([r, g, b, a])
    
    compressed = zlib.compress(bytes(raw_data), level=9)
    
    # PNG signature
    png = bytearray(b'\x89PNG\r\n\x1a\n')
    
    # IHDR
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
    png.extend(struct.pack('>I', len(ihdr_data)))
    png.extend(b'IHDR')
    png.extend(ihdr_data)
    png.extend(struct.pack('>I', ihdr_crc))
    
    # IDAT
    idat_crc = zlib.crc32(b'IDAT' + compressed)
    png.extend(struct.pack('>I', len(compressed)))
    png.extend(b'IDAT')
    png.extend(compressed)
    png.extend(struct.pack('>I', idat_crc))
    
    # IEND
    iend_crc = zlib.crc32(b'IEND')
    png.extend(struct.pack('>I', 0))
    png.extend(b'IEND')
    png.extend(struct.pack('>I', iend_crc))
    
    with open(filename, 'wb') as f:
        f.write(png)
    print(f"Generated {filename} ({width}x{height})")

def recipe_icon_drawer(x, y, w, h):
    # Normalized coordinates (-1 to 1)
    nx = (x - w / 2) / (w / 2)
    ny = (y - h / 2) / (h / 2)
    
    # Rounded rectangle background
    corner_radius = 0.35
    ax = max(0, abs(nx) - (1 - corner_radius))
    ay = max(0, abs(ny) - (1 - corner_radius))
    dist = math.sqrt(ax * ax + ay * ay)
    
    if dist > corner_radius:
        return 0, 0, 0, 0  # Transparent outside
        
    # Background gradient: Warm Coral / Persimmon (#FF5722 to #FF8A65)
    t = (ny + 1) / 2
    bg_r = int(255 - t * 15)
    bg_g = int(107 + t * 40)
    bg_b = int(74 + t * 40)
    
    # Inner plate circle (white/cream)
    plate_radius = 0.68
    p_dist = math.sqrt(nx * nx + ny * ny)
    
    if p_dist < plate_radius:
        # Subtle rim
        if p_dist > plate_radius - 0.05:
            # Plate rim shadow
            rim_t = (plate_radius - p_dist) / 0.05
            return int(240 * rim_t + 220 * (1 - rim_t)), int(235 * rim_t + 215 * (1 - rim_t)), int(225 * rim_t + 205 * (1 - rim_t)), 255
        
        # Plate inner circle
        inner_r = 0.58
        if p_dist < inner_r:
            # Draw a cute chef cloche / bowl / pot
            # Let's draw a bowl and steam
            # Bowl: bottom half circle
            # ny from 0.05 to 0.42, nx from -0.38 to 0.38
            if ny >= 0.05 and ny <= 0.40 and abs(nx) <= 0.38:
                # bowl curvature
                bowl_bottom = 0.05 + 0.35 * (1 - ((nx / 0.38) ** 2) * 0.4)
                if ny <= bowl_bottom:
                    # Bowl color: warm amber orange #F57C00
                    return 245, 124, 0, 255
            
            # Bowl rim: ny between 0.01 and 0.07, abs(nx) <= 0.40
            if 0.01 <= ny <= 0.07 and abs(nx) <= 0.40:
                return 230, 81, 0, 255
                
            # Steam ripples (three rising curved steam lines)
            for sx_offset in [-0.18, 0.0, 0.18]:
                # S-curve steam
                cur_ny = ny - (-0.22)
                if -0.25 <= ny <= -0.02:
                    expected_nx = sx_offset + 0.04 * math.sin((ny + 0.25) * 20)
                    if abs(nx - expected_nx) < 0.028:
                        alpha = int(255 * (1.0 - abs(ny - (-0.14)) / 0.15))
                        return 255, 140, 66, max(120, min(255, alpha))
            
            # Little leaf / garnish on bowl:
            leaf_dist = math.sqrt((nx - 0.0)**2 + (ny - (-0.02))**2)
            if leaf_dist < 0.045:
                return 76, 175, 80, 255  # Green garnish
                
            # Plate surface color (Warm clean off-white)
            return 255, 253, 248, 255
        else:
            return 250, 246, 240, 255
            
    return bg_r, bg_g, bg_b, 255

if __name__ == '__main__':
    target_dir = r"C:\文件\谷歌AI\个人\菜谱"
    os.makedirs(target_dir, exist_ok=True)
    create_png(192, 192, recipe_icon_drawer, os.path.join(target_dir, "icon-192.png"))
    create_png(512, 512, recipe_icon_drawer, os.path.join(target_dir, "icon-512.png"))
