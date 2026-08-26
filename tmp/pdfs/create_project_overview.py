from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor, white
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth

ROOT = Path(r"C:\Users\Lenovo\Ferguson")
OUT = ROOT / "output" / "pdf" / "Ferguson & Sons Mechanical — Website Project Overview.pdf"
LOGO = ROOT / "Selected-Pictures-for-Website" / "Logos" / "Original-Logo.png"
WHITE_LOGO = ROOT / "Selected-Pictures-for-Website" / "Logos" / "White-Logo.png"
HOME = ROOT / "Owner Review Package" / "Section Captures" / "01-home" / "01-section.png"
SERVICES = ROOT / "Owner Review Package" / "Section Captures" / "02-services" / "01-section.png"
ABOUT = ROOT / "Owner Review Package" / "Section Captures" / "04-about" / "01-section.png"
MOBILE_HERO = ROOT / "tmp" / "pdfs" / "mobile-captures" / "home-hero-mobile-crop.png"
MOBILE_MAINTENANCE = ROOT / "tmp" / "pdfs" / "mobile-captures" / "maintenance-mobile-crop.png"
ELEVATE_LOGO = ROOT / "tmp" / "pdfs" / "elevate-local-transparent-clean.png"

W, H = letter
NAVY = HexColor("#001430")
NAVY2 = HexColor("#002855")
YELLOW = HexColor("#FFB215")
INK = HexColor("#001430")
BODY = HexColor("#43474F")
MUTED = HexColor("#747780")
SOFT = HexColor("#F3F4F5")
PANEL = HexColor("#E7E8E9")

def rect(c, x, y, w, h, color, radius=0):
    c.setFillColor(color)
    c.setStrokeColor(color)
    if radius:
        c.roundRect(x, y, w, h, radius, fill=1, stroke=0)
    else:
        c.rect(x, y, w, h, fill=1, stroke=0)

def image_cover(c, path, x, y, w, h):
    img = ImageReader(str(path))
    iw, ih = img.getSize()
    scale = max(w / iw, h / ih)
    dw, dh = iw * scale, ih * scale
    c.saveState(); c.rect(x, y, w, h, fill=0, stroke=0); c.clipPath(c.beginPath(), 0, 0)
    # ReportLab clip requires an explicit path.
    c.restoreState()

def image_contain(c, path, x, y, w, h):
    img = ImageReader(str(path))
    iw, ih = img.getSize()
    scale = min(w / iw, h / ih)
    dw, dh = iw * scale, ih * scale
    c.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh, mask='auto')

def image_cover_top(c, path, x, y, w, h):
    img = ImageReader(str(path))
    iw, ih = img.getSize()
    scale = max(w / iw, h / ih)
    dw, dh = iw * scale, ih * scale
    c.saveState()
    p = c.beginPath(); p.rect(x, y, w, h); c.clipPath(p, stroke=0, fill=0)
    c.drawImage(img, x + (w - dw) / 2, y + h - dh, dw, dh, mask='auto')
    c.restoreState()
    c.saveState()
    p = c.beginPath(); p.rect(x, y, w, h); c.clipPath(p, stroke=0, fill=0)
    c.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh, mask='auto')
    c.restoreState()

def line(c, x1, y1, x2, y2, color=YELLOW, width=2):
    c.setStrokeColor(color); c.setLineWidth(width); c.line(x1, y1, x2, y2)

def text(c, s, x, y, size=12, color=BODY, font="Helvetica", leading=None):
    c.setFillColor(color); c.setFont(font, size); c.drawString(x, y, s)

def right(c, s, x, y, size=10, color=MUTED, font="Helvetica"):
    c.setFillColor(color); c.setFont(font, size); c.drawRightString(x, y, s)

def wrap(c, s, max_width, font="Helvetica", size=11):
    words = s.split(); lines=[]; current=""
    for word in words:
        trial = (current + " " + word).strip()
        if stringWidth(trial, font, size) <= max_width or not current: current=trial
        else: lines.append(current); current=word
    if current: lines.append(current)
    return lines

def paragraph(c, s, x, y, max_width, size=11, color=BODY, leading=16, font="Helvetica"):
    for line_text in wrap(c, s, max_width, font, size):
        text(c, line_text, x, y, size, color, font); y -= leading
    return y

def page_number(c, n):
    text(c, "FERGUSON & SONS MECHANICAL", 48, 28, 7.5, MUTED, "Helvetica-Bold")
    right(c, f"PROJECT OVERVIEW  |  {n:02d}", W-48, 28, 7.5, MUTED, "Helvetica-Bold")

def kicker(c, s, x=48, y=730):
    text(c, s.upper(), x, y, 9, YELLOW, "Helvetica-Bold")

def title(c, s, x=48, y=686, size=30, color=INK):
    text(c, s, x, y, size, color, "Helvetica-Bold")

def bullet(c, label, detail, x, y):
    rect(c, x, y-3, 8, 8, YELLOW, 4)
    text(c, label, x+18, y, 12, INK, "Helvetica-Bold")
    text(c, detail, x+18, y-18, 9.5, BODY, "Helvetica")

def scope_item(c, label, detail, x, y, width=222):
    rect(c, x, y-3, 8, 8, YELLOW, 4)
    label_bottom = paragraph(c, label, x+18, y, width-18, 10.5, INK, 13, "Helvetica-Bold")
    paragraph(c, detail, x+18, label_bottom-3, width-18, 8.8, BODY, 12, "Helvetica")

OUT.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(OUT), pagesize=letter, pageCompression=1)
c.setTitle("Ferguson & Sons Mechanical - Website Project Overview")
c.setAuthor("Elevate Local")

# 1. Cover
rect(c, 0, 0, W, H, NAVY)
rect(c, 0, 0, W, 12, YELLOW)
c.drawImage(str(WHITE_LOGO), 48, 574, width=250, height=102, preserveAspectRatio=True, mask='auto', anchor='sw')
c.drawImage(str(ELEVATE_LOGO), 160, 586, width=220, height=82, preserveAspectRatio=True, mask='auto', anchor='sw')
line(c, 48, 526, 108, 526, YELLOW, 3)
text(c, "WEBSITE PROJECT OVERVIEW", 48, 468, 31, white, "Helvetica-Bold")
text(c, "An overview of the new Ferguson & Sons Mechanical website", 48, 432, 14, HexColor("#E1E3E4"), "Helvetica")
text(c, "Designed & Developed by Elevate Local", 48, 72, 10, HexColor("#E1E3E4"), "Helvetica")
right(c, "elevatelocal.agency", W-48, 72, 9, HexColor("#E1E3E4"), "Helvetica")
c.showPage()

# 2. Project overview
page_number(c, 2); kicker(c, "Project overview"); title(c, "A stronger online presence")
paragraph(c, "The new Ferguson & Sons Mechanical website brings the company story, services, and customer contact experience together in one clear, professional destination.", 48, 635, 470, 13, BODY, 19)
cards = [
    ("Clear Service Presentation", "Services are organized so customers can quickly find the help they need."),
    ("Easy Customer Contact", "Call, text, and scheduling actions stay visible throughout the experience."),
    ("Strong Local Presence", "Ferguson’s family-owned, Chesapeake-rooted identity is front and center."),
    ("Mobile-Friendly Experience", "The website stays simple, readable, and useful across screen sizes."),
]
positions=[(48,452),(316,452),(48,304),(316,304)]
for (head, body),(x,y) in zip(cards,positions):
    rect(c,x,y,248,112,SOFT,10); rect(c,x,y+88,248,24,YELLOW,10)
    text(c, head, x+18, y+66, 12, INK, "Helvetica-Bold")
    paragraph(c, body, x+18, y+43, 208, 9.5, BODY, 13)
text(c, "Built around the real Ferguson & Sons brand, team, and work.", 48, 160, 12, MUTED, "Helvetica")
c.showPage()

# 3. Delivered
page_number(c, 3); kicker(c, "Completed scope"); title(c, "What was delivered")
text(c, "A complete website experience designed to serve customers with clarity and confidence.", 48, 638, 12, BODY, "Helvetica")
left=[("Custom website design and development", "A cohesive Ferguson-first digital experience."), ("Responsive experience", "Designed for desktop, tablet, and mobile use."), ("Main service and service-area pages", "Clear paths to the services and locations customers need."), ("About, reviews, contact, and supporting pages", "A complete story with trust and contact information in the right places."), ("Maintenance Plan presentation", "The plan is easy to find and understand.")]
right_items=[("Call and text actions", "Convenient options throughout the site."), ("Customer scheduling and contact flow", "A clear route for customers to reach the team."), ("Search-friendly page structure", "Organized pages that support online visibility."), ("Google Analytics and Search Console", "Connected for ongoing visibility and performance monitoring.")]
for (a,b), y in zip(left, [568, 478, 388, 298, 190]): scope_item(c, a, b, 48, y)
for (a,b), y in zip(right_items, [568, 478, 388, 298]): scope_item(c, a, b, 322, y)
rect(c,48,92,W-96,66,NAVY2,10)
text(c,"Designed to feel simple for customers and complete for the business.",68,119,14,white,"Helvetica-Bold")
c.showPage()

# 4. Experience visuals
page_number(c, 4); kicker(c, "Website experience"); title(c, "Clear, consistent, and customer-focused", size=25)
text(c, "A polished Ferguson experience across key pages and screen sizes.", 48, 638, 12, BODY, "Helvetica")
rect(c,48,310,516,274,SOFT,10); image_cover_top(c, HOME, 58, 320, 496, 254)
text(c, "Homepage experience", 48, 286, 11, INK, "Helvetica-Bold")
text(c, "Clear messaging, service access, and contact flow from the first screen.", 48, 270, 9.5, MUTED, "Helvetica")
text(c, "Mobile service and contact", 130, 240, 10, INK, "Helvetica-Bold")
text(c, "Mobile maintenance plan", 351, 240, 10, INK, "Helvetica-Bold")
rect(c,144,54,106,178,SOFT,12); image_contain(c, MOBILE_HERO, 150, 60, 94, 166)
rect(c,368,54,106,178,SOFT,12); image_contain(c, MOBILE_MAINTENANCE, 374, 60, 94, 166)
c.showPage()

# 5. Action
page_number(c, 5); kicker(c, "Customer action"); title(c, "Built to help customers take action")
paragraph(c, "The website is designed to make the next step easy, whether a customer is ready to call, text, schedule service, or learn more about the work Ferguson & Sons provides.", 48, 638, 500, 13, BODY, 19)
items=[("Call Us", "Prominent phone access throughout the site."),("Text Us", "A simple text-message option for fast customer contact."),("Schedule or Contact", "Clear scheduling and contact paths in key moments."),("Service Information", "Easy-to-find pages for repair, maintenance, installation, and more."),("Trust Elements", "Reviews, local identity, and maintenance-plan visibility help customers move forward.")]
y=545
for head,desc in items:
    rect(c,48,y-20,516,55,white,8); rect(c,48,y-20,6,55,YELLOW,3)
    text(c,head,70,y+6,12,INK,"Helvetica-Bold"); text(c,desc,205,y+7,10,BODY,"Helvetica"); y-=76
rect(c,48,112,516,66,NAVY,10)
text(c,"Designed not only to look professional - but to help customers take the next step.",68,140,12,white,"Helvetica-Bold")
c.showPage()

# 6. Visibility
page_number(c, 6); kicker(c, "Visibility & performance tracking"); title(c, "Ready for ongoing monitoring")
paragraph(c, "Website analytics are set up and available for ongoing monitoring. This gives Ferguson & Sons a clear foundation for understanding website visibility and visitor engagement over time.", 48, 638, 490, 13, BODY, 19)
tracking=[("Google Analytics", "Website traffic and visitor engagement."),("Google Search Console", "Visibility in Google Search."),("Ongoing Data", "Performance can be monitored over time.")]
y=492
for i,(head,desc) in enumerate(tracking,1):
    rect(c,48,y,516,86,SOFT,10); rect(c,68,y+21,42,42,YELLOW,21)
    text(c,str(i),84,y+35,14,NAVY,"Helvetica-Bold"); text(c,head,130,y+48,14,INK,"Helvetica-Bold"); text(c,desc,130,y+28,10,BODY,"Helvetica"); y-=110
text(c,"A simple foundation for visibility and performance tracking.",48,128,12,MUTED,"Helvetica")
c.showPage()

# 7. Completion
rect(c,0,0,W,H,NAVY); rect(c,0,0,W,12,YELLOW)
c.drawImage(str(WHITE_LOGO),48,642,width=215,height=86,preserveAspectRatio=True,mask='auto',anchor='sw')
kicker(c,"Project completion",48,582); title(c,"Website project complete",48,540,30,white)
completion=["Website is live on the Ferguson & Sons domain","Core website build is complete","Desktop and mobile experience is complete","Analytics and search tracking are connected","Website is ready for ongoing customer traffic"]
y=478
for item in completion:
    rect(c,48,y-2,10,10,YELLOW,5); text(c,item,76,y,12,white,"Helvetica"); y-=42
line(c,48,248,W-48,248,HexColor("#193E66"),1)
paragraph(c, "Thank you for trusting Elevate Local with the Ferguson & Sons Mechanical website. It was a pleasure bringing the new online presence together, and the site is now in place to support the business going forward.", 48, 218, 500, 12, HexColor("#E1E3E4"), 18)
line(c,48,82,90,82,YELLOW,3)
text(c,"ELEVATE LOCAL",48,58,11,white,"Helvetica-Bold")
text(c,"elevatelocal.agency",48,40,9,HexColor("#E1E3E4"),"Helvetica")
c.save()
print(OUT)
