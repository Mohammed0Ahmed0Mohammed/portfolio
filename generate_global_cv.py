import os
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors

def generate_world_class_cv():
    pdf_path = "/mnt/5604BFFE04BFDEE5/رامى00/portfolio/public/Mohamed_Ahmed_CV.pdf"
    img_path = "/mnt/5604BFFE04BFDEE5/رامى00/portfolio/public/profile.jpg"
    
    c = canvas.Canvas(pdf_path, pagesize=A4)
    width, height = A4
    margin = 36 # 0.5 inch margins
    
    # Palette
    PRIMARY = colors.HexColor("#0F172A")    # Deep Slate
    SECONDARY = colors.HexColor("#10B981")  # Emerald Green
    ACCENT_BG = colors.HexColor("#F8FAFC")  # Light Grey BG
    TEXT_DARK = colors.HexColor("#1E293B")  # Slate 800
    TEXT_MUTED = colors.HexColor("#475569") # Slate 600
    BORDER_COLOR = colors.HexColor("#E2E8F0")

    # Header Background
    c.setFillColor(PRIMARY)
    c.rect(0, height - 130, width, 130, fill=1, stroke=0)
    
    # Accent line under header
    c.setFillColor(SECONDARY)
    c.rect(0, height - 133, width, 3, fill=1, stroke=0)
    
    # Profile Picture Frame (Top Right)
    if os.path.exists(img_path):
        try:
            # Draw white border frame for image
            c.setFillColor(colors.white)
            c.roundRect(width - margin - 90, height - 120, 90, 105, 6, fill=1, stroke=0)
            c.drawImage(img_path, width - margin - 87, height - 117, width=84, height=99, preserveAspectRatio=True)
        except Exception as e:
            print("Image placement error:", e)

    # Header Text (Left Aligned)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 26)
    c.drawString(margin, height - 42, "MOHAMED AHMED")
    
    c.setFont("Helvetica-Bold", 13)
    c.setFillColor(SECONDARY)
    c.drawString(margin, height - 64, "REACT NATIVE MOBILE DEVELOPER")
    
    c.setFont("Helvetica", 9)
    c.setFillColor(colors.HexColor("#CBD5E1"))
    c.drawString(margin, height - 85, "📍 Luxor, Egypt  |  ✉️ mohammedahmed21ali@gmail.com  |  📞 +20 1013374680")
    c.drawString(margin, height - 100, "🔗 GitHub: github.com/Mohammed0Ahmed0Mohammed  |  💬 WhatsApp & Telegram: +201013374680")
    
    y = height - 155

    # Helper: Section Title
    def add_section(title, curr_y):
        c.setFillColor(PRIMARY)
        c.setFont("Helvetica-Bold", 12)
        c.drawString(margin, curr_y, title.upper())
        
        c.setStrokeColor(SECONDARY)
        c.setLineWidth(1.5)
        c.line(margin, curr_y - 4, width - margin, curr_y - 4)
        return curr_y - 22

    # Helper: Wrapped Text Block
    def add_wrapped(text, x, curr_y, max_w, font="Helvetica", size=9.5, leading=13, color=TEXT_DARK):
        c.setFont(font, size)
        c.setFillColor(color)
        words = text.split()
        line = ""
        for word in words:
            if c.stringWidth(line + word, font, size) < max_w:
                line += word + " "
            else:
                c.drawString(x, curr_y, line.strip())
                curr_y -= leading
                line = word + " "
        if line:
            c.drawString(x, curr_y, line.strip())
            curr_y -= leading
        return curr_y

    # Helper: Bullet Points
    def add_bullet(text, x, curr_y, max_w, font="Helvetica", size=9.5, leading=13):
        c.setFillColor(SECONDARY)
        c.circle(x + 3, curr_y + 3, 2, fill=1, stroke=0)
        return add_wrapped(text, x + 12, curr_y, max_w - 12, font, size, leading, TEXT_DARK)

    # 1. PROFESSIONAL SUMMARY
    y = add_section("Professional Summary", y)
    summary = (
        "Accomplished Computer Science & Engineering student and specialized React Native Mobile Developer based in Luxor, Egypt. "
        "Demonstrated expertise in architecting and delivering high-performance, cross-platform mobile applications for iOS and Android. "
        "Adept at transforming complex business requirements into clean, maintainable code structures utilizing modern state management, "
        "REST/JWT APIs, cloud synchronization, and responsive UI design principles."
    )
    y = add_wrapped(summary, margin, y, width - (2 * margin))
    y -= 10

    # 2. TECHNICAL SKILLS
    y = add_section("Technical Core Competencies", y)
    
    skills_data = [
        ("Mobile Development", "React Native, Mobile Architecture, Cross-Platform UI, Component Lifecycle, AsyncStorage"),
        ("Programming Languages", "JavaScript (ES6+), Java, C / C++, Python, HTML5, CSS3"),
        ("CS & Architecture", "OOP, Data Structures & Algorithms, Clean Architecture, Design Patterns, RESTful APIs"),
        ("Backend & Cloud", "Supabase, Node.js, Express.js, PostgreSQL, Cloud Databases, Real-Time Sync"),
        ("Tools & Workflows", "Git & GitHub, CI/CD Pipelines, CodeRabbit, Figma, Scrum / Agile Methodologies")
    ]
    
    for category, items in skills_data:
        c.setFont("Helvetica-Bold", 9.5)
        c.setFillColor(PRIMARY)
        c.drawString(margin + 5, y, f"{category}:")
        
        c.setFont("Helvetica", 9.5)
        c.setFillColor(TEXT_DARK)
        c.drawString(margin + 165, y, items)
        y -= 15
    y -= 10

    # 3. FEATURED PROJECTS
    y = add_section("Featured Mobile Projects & Architecture", y)

    projects = [
        {
            "name": "SmartWholesale Network (SWN)",
            "badge": "Graduation Project — Lead Architect & Mobile Developer",
            "tech": "React Native, Node.js, Express.js, PostgreSQL, JWT Microservices",
            "bullets": [
                "Architected a 3-tier B2B digital supply chain network connecting suppliers, wholesalers, and retailers in a unified ecosystem.",
                "Engineered a commission-free flat-rate subscription engine eliminating transaction fees across multi-tier user accounts.",
                "Developed an Automated Data Transfer Microservice to instantly mirror supplier catalogs to wholesale storefronts.",
                "Designed an Anti-Monopoly & Inventory Protection algorithm enforcing order caps and automated exception ticketing."
            ]
        },
        {
            "name": "TourBuddy Platform",
            "badge": "Mobile Developer & Technical Planner",
            "tech": "React Native, Firebase, UI/UX Design, Figma, REST APIs",
            "bullets": [
                "Built a cross-platform tourism marketplace linking international tourists with verified local guides across Egypt.",
                "Integrated real-time location services, interactive tour booking schedules, and multi-currency payment handling.",
                "Crafted custom responsive mobile components prototyped in Figma to deliver high-performance user interfaces."
            ]
        },
        {
            "name": "Physio Clinic Management System",
            "badge": "Mobile App Developer",
            "tech": "React Native, Supabase, Cloud Databases, Tailwind CSS",
            "bullets": [
                "Developed a cloud-connected healthcare mobile management application for physical therapy practices.",
                "Implemented secure Electronic Medical Records (EMR) tracking, treatment session logs, and automated appointment alerts.",
                "Utilized Supabase for real-time data synchronization and encrypted role-based access control."
            ]
        },
        {
            "name": "Task Management System",
            "badge": "React Native Developer",
            "tech": "React Native, JavaScript, SQL Database, AsyncStorage, REST APIs",
            "bullets": [
                "Designed an intuitive productivity app featuring dynamic project categorization, priority tagging, and workflow boards.",
                "Implemented offline data caching via AsyncStorage with automatic cloud synchronization upon connection."
            ]
        }
    ]

    for proj in projects:
        # Page boundary check
        if y < 140:
            c.showPage()
            y = height - 50
            
        # Project Title & Badge
        c.setFont("Helvetica-Bold", 11)
        c.setFillColor(PRIMARY)
        c.drawString(margin, y, proj["name"])
        
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(SECONDARY)
        c.drawRightString(width - margin, y, proj["badge"])
        y -= 13
        
        # Tech Stack Subtitle
        c.setFont("Helvetica-Oblique", 8.5)
        c.setFillColor(TEXT_MUTED)
        c.drawString(margin, y, f"Tech Stack: {proj['tech']}")
        y -= 14
        
        # Bullets
        for bullet in proj["bullets"]:
            y = add_bullet(bullet, margin + 5, y, width - (2 * margin) - 10, font="Helvetica", size=9, leading=12)
        y -= 8

    # 4. EDUCATION & ACADEMICS
    if y < 90:
        c.showPage()
        y = height - 50
        
    y = add_section("Education & Academic Background", y)
    c.setFont("Helvetica-Bold", 10.5)
    c.setFillColor(PRIMARY)
    c.drawString(margin, y, "Bachelor of Computer Science & Engineering")
    
    c.setFont("Helvetica", 9.5)
    c.setFillColor(TEXT_MUTED)
    c.drawRightString(width - margin, y, "Luxor, Egypt")
    y -= 14
    
    c.setFont("Helvetica", 9)
    c.setFillColor(TEXT_DARK)
    c.drawString(margin, y, "Specialization in Mobile Application Development, Software Engineering Architecture, and Computer Science Fundamentals.")
    
    c.save()
    print("World-Class Global CV generated successfully!")

if __name__ == '__main__':
    generate_world_class_cv()
