import os
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors

def create_cv():
    pdf_path = "/mnt/5604BFFE04BFDEE5/رامى00/portfolio/public/Mohamed_Ahmed_CV.pdf"
    img_path = "/mnt/5604BFFE04BFDEE5/رامى00/portfolio/public/profile.jpg"
    
    c = canvas.Canvas(pdf_path, pagesize=A4)
    width, height = A4
    
    # Header background (Dark Slate)
    c.setFillColor(colors.HexColor("#0f172a"))
    c.rect(0, height - 140, width, 140, fill=1, stroke=0)
    
    # Profile Picture (Top Right)
    if os.path.exists(img_path):
        try:
            # Draw image
            c.drawImage(img_path, width - 130, height - 125, width=100, height=110, preserveAspectRatio=True)
        except Exception as e:
            print("Image error:", e)
            
    # Name and Title (Top Left)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 26)
    c.drawString(40, height - 45, "Mohamed Ahmed")
    
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(colors.HexColor("#10b981")) # Emerald Green
    c.drawString(40, height - 70, "React Native Mobile Developer")
    
    c.setFont("Helvetica", 9.5)
    c.setFillColor(colors.HexColor("#cbd5e1"))
    c.drawString(40, height - 92, "📍 Luxor, Egypt  |  ✉️ mohammedahmed21ali@gmail.com  |  📞 01013374680")
    c.drawString(40, height - 108, "🔗 GitHub: github.com/Mohammed0Ahmed0Mohammed  |  💬 WhatsApp & Telegram: +201013374680")
    
    y = height - 165
    
    # Section Heading Helper
    def draw_heading(title, curr_y):
        c.setFillColor(colors.HexColor("#0f172a"))
        c.setFont("Helvetica-Bold", 13)
        c.drawString(40, curr_y, title)
        c.setStrokeColor(colors.HexColor("#10b981"))
        c.setLineWidth(1.5)
        c.line(40, curr_y - 4, width - 40, curr_y - 4)
        return curr_y - 20

    # Helper for wrapping text
    def draw_wrapped_text(text, x, curr_y, max_width, font_name="Helvetica", font_size=9.5, leading=13):
        c.setFont(font_name, font_size)
        c.setFillColor(colors.HexColor("#334155"))
        words = text.split()
        line = ""
        for word in words:
            if c.stringWidth(line + word, font_name, font_size) < max_width:
                line += word + " "
            else:
                c.drawString(x, curr_y, line.strip())
                curr_y -= leading
                line = word + " "
        if line:
            c.drawString(x, curr_y, line.strip())
            curr_y -= leading
        return curr_y

    # --- Professional Summary ---
    y = draw_heading("Professional Summary", y)
    summary_text = (
        "Computer Science & Engineering student and specialized React Native Mobile Developer based in Luxor, Egypt. "
        "Passionate about building robust, high-performance, and scalable cross-platform mobile applications. "
        "Leveraging solid software engineering principles, clean code architecture, and deep computer science fundamentals "
        "to deliver exceptional user experiences."
    )
    y = draw_wrapped_text(summary_text, 40, y, width - 80)
    y -= 10

    # --- Technical Skills ---
    y = draw_heading("Technical Skills", y)
    
    skills = [
        ("Mobile & UI Development", "React Native, JavaScript, HTML, CSS, Java, Software Architecture"),
        ("Languages & CS Fundamentals", "OOP, Data Structures, Algorithms, Design Patterns, C/C++, Java/JavaFX, Python"),
        ("Domain Expertise", "E-Learning, Interactive Learning, Maritime Transport, Membership Management"),
        ("Artificial Intelligence (AI/ML)", "Deep Learning, VGG16 & VGG19, AlexNet, Data Preprocessing, AI Agents"),
        ("Databases & Tools", "Supabase, Git & GitHub, CI/CD Pipelines, CodeRabbit, Figma, Scrum/Agile")
    ]
    
    for cat, items in skills:
        c.setFont("Helvetica-Bold", 9.5)
        c.setFillColor(colors.HexColor("#0f172a"))
        c.drawString(40, y, f"• {cat}:")
        c.setFont("Helvetica", 9.5)
        c.setFillColor(colors.HexColor("#334155"))
        c.drawString(180, y, items)
        y -= 15
    y -= 10

    # --- Featured Projects ---
    y = draw_heading("Featured Projects", y)
    
    projects = [
        {
            "title": "SmartWholesale Network (SWN) - Graduation Project",
            "subtitle": "3-Tier B2B Supply Chain Network & Asset-Light SaaS Platform",
            "role": "Lead Architect & Mobile Developer",
            "tech": "React Native, Node.js, Express.js, PostgreSQL, React, JWT Microservices",
            "desc": "A digital supply chain ecosystem connecting suppliers, wholesalers, and retailers with commission-free subscriptions, automated product transfer microservices, and anti-monopoly inventory protection algorithms."
        },
        {
            "title": "TourBuddy Platform",
            "subtitle": "Tourism & Local Guide Connection Marketplace",
            "role": "Mobile Developer & Technical Planner",
            "tech": "React Native, Software Architecture, UI/UX, Figma, Firebase",
            "desc": "Cross-platform mobile marketplace connecting tourists with certified guides in Egypt, featuring real-time location tracking, interactive tour scheduling, and multi-currency payments."
        },
        {
            "title": "Physio Clinic Management System",
            "subtitle": "Cloud-Based Healthcare & Patient Records Platform",
            "role": "Mobile Developer",
            "tech": "React Native, Supabase, Cloud Databases, Tailwind CSS",
            "desc": "Mobile healthcare platform simplifying electronic medical record (EMR) tracking, automated appointment scheduling, and exercise logging with real-time cloud sync."
        },
        {
            "title": "Task Management System",
            "subtitle": "Productivity & Workflow Optimization App",
            "role": "React Native Mobile Developer",
            "tech": "React Native, JavaScript, SQL Database, AsyncStorage, REST APIs",
            "desc": "Productivity mobile app featuring dynamic project categorization, priority tagging, drag-and-drop workflow boards, offline caching, and real-time cloud synchronization."
        }
    ]
    
    for proj in projects:
        # Check space for next page if needed
        if y < 120:
            c.showPage()
            y = height - 50
            
        c.setFont("Helvetica-Bold", 10.5)
        c.setFillColor(colors.HexColor("#0f172a"))
        c.drawString(40, y, proj["title"])
        
        c.setFont("Helvetica-Oblique", 9)
        c.setFillColor(colors.HexColor("#10b981"))
        c.drawRightString(width - 40, y, proj["role"])
        y -= 13
        
        c.setFont("Helvetica-BoldOblique", 9)
        c.setFillColor(colors.HexColor("#64748b"))
        c.drawString(40, y, f"Tech Stack: {proj['tech']}")
        y -= 14
        
        y = draw_wrapped_text(proj["desc"], 40, y, width - 80, font_size=9, leading=12)
        y -= 8

    c.save()
    print("CV generated successfully!")

if __name__ == '__main__':
    create_cv()
