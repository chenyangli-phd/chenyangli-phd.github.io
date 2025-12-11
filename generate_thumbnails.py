import os
from PIL import Image

PHOTO_ROOT = 'assets/photography'
THUMB_WIDTH = 300

def process_folder(folder):
    thumbs_dir = os.path.join(folder, 'thumbs')
    os.makedirs(thumbs_dir, exist_ok=True)
    for fname in os.listdir(folder):
        fpath = os.path.join(folder, fname)
        if os.path.isfile(fpath) and fname.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            thumb_path = os.path.join(thumbs_dir, fname)
            if os.path.exists(thumb_path):
                continue
            try:
                img = Image.open(fpath)
                w, h = img.size
                scale = THUMB_WIDTH / w
                new_size = (THUMB_WIDTH, int(h * scale))
                img = img.resize(new_size, Image.LANCZOS)
                img.save(thumb_path)
                print(f'生成缩略图: {thumb_path}')
            except Exception as e:
                print(f'处理失败: {fpath}，原因: {e}')

def main():
    for root, dirs, files in os.walk(PHOTO_ROOT):
        if files:
            process_folder(root)

if __name__ == '__main__':
    main()
