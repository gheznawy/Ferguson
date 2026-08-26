from pathlib import Path
from PIL import Image

source = Path(r"C:\Users\Lenovo\Ferguson\tmp\pdfs\elevate-local-supplied.png")
target = Path(r"C:\Users\Lenovo\Ferguson\tmp\pdfs\elevate-local-transparent-clean.png")

image = Image.open(source).convert("RGBA")
pixels = image.load()
for y in range(image.height):
    for x in range(image.width):
        r, g, b, _ = pixels[x, y]
        luminance = (r + g + b) / 3
        alpha = int(max(0, min(255, (luminance - 244) * 23)))
        pixels[x, y] = (255, 255, 255, alpha)

bounds = image.getchannel("A").getbbox()
if bounds is None:
    raise RuntimeError("The Elevate Local logo could not be isolated.")
pad = 10
left, top, right, bottom = bounds
image.crop((max(0, left-pad), max(0, top-pad), min(image.width, right+pad), min(image.height, bottom+pad))).save(target)
print(target)
