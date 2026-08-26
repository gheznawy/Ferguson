from pathlib import Path
from playwright.sync_api import sync_playwright
from PIL import Image

OUT = Path(r"C:\Users\Lenovo\Ferguson\tmp\pdfs\mobile-captures")
EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

OUT.mkdir(parents=True, exist_ok=True)
with sync_playwright() as p:
    browser = p.chromium.launch(
        headless=True,
        executable_path=EDGE,
        args=["--disable-gpu", "--disable-software-rasterizer", "--use-angle=swiftshader"],
    )
    page = browser.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2)
    page.goto("http://localhost:3000/", wait_until="networkidle", timeout=60000)
    page.locator(".home-hero").screenshot(path=str(OUT / "home-hero-mobile.png"))
    page.locator(".home-maintenance").screenshot(path=str(OUT / "maintenance-mobile.png"))
    browser.close()
with Image.open(OUT / "home-hero-mobile.png") as image:
    image.crop((0, 0, 780, 1386)).save(OUT / "home-hero-mobile-crop.png")
with Image.open(OUT / "maintenance-mobile.png") as image:
    image.crop((0, 650, 780, 2036)).save(OUT / "maintenance-mobile-crop.png")
print("Captured mobile sections")
