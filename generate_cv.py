from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.units import inch

def create_cv():
    c = canvas.Canvas("/home/mohamed/Desktop/رامى00/portfolio/public/Mohamed_Ahmed_CV.pdf", pagesize=A4)
    width, height = A4
    
    # Header
    c.setFillColor(colors.HexColor("#0f172a"))
    c.rect(0, height - 120, width, 120, fill=1)
    
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(40, height - 50, "Mohamed Ahmed")
    
    c.setFont("Helvetica", 14)
    c.setFillColor(colors.HexColor("#34d399"))
    c.drawString(40, height - 75, "Full-Stack Developer & Smart Systems Engineer")
    
    c.setFont("Helvetica", 10)
    c.setFillColor(colors.HexColor("#94a3b8"))
    c.drawString(40, height - 100, "Email: momammedahmed1m@gmail.com | Phone: 01013374680")
    c.drawString(330, height - 100, "LinkedIn: linkedin.com/in/mohammed-ahmed-dev")
    
    y = height - 150
    
    # Summary
    c.setFillColor(colors.HexColor("#0f172a"))
    c.setFont("Helvetica-Bold", 14)
    c.drawString(40, y, "Professional Summary")
    y -= 20
    
    c.setFont("Helvetica", 10)
    c.setFillColor(colors.black)
    summary = (
        "I combine my passion for software engineering, mobile and web development, with my expertise "
        "in Artificial Intelligence (Deep Learning) and Embedded Systems. I aim to build robust "
        "software architectures and integrated systems that are scalable and smartly meet user needs."
    )
    # Simple text wrap
    words = summary.split()
    line = ""
    for word in words:
        if c.stringWidth(line + word, "Helvetica", 10) < width - 80:
            line += word + " "
        else:
            c.drawString(40, y, line)
            line = word + " "
            y -= 15
    if line:
        c.drawString(40, y, line)
        y -= 30
        
    # Technical Skills
    c.setFillColor(colors.HexColor("#0f172a"))
    c.setFont("Helvetica-Bold", 14)
    c.drawString(40, y, "Technical Skills")
    y -= 20
    
    c.setFont("Helvetica-Bold", 10)
    c.drawString(40, y, "Software & UI:")
    c.setFont("Helvetica", 10)
    c.drawString(130, y, "React Native, JavaScript, HTML, Java, Full-Stack Development, Software Architecture")
    y -= 15
    
    c.setFont("Helvetica-Bold", 10)
    c.drawString(40, y, "AI/ML:")
    c.setFont("Helvetica", 10)
    c.drawString(130, y, "Deep Learning, VGG16 & VGG19, AlexNet, Data Preprocessing, AI Agents")
    y -= 15

    c.setFont("Helvetica-Bold", 10)
    c.drawString(40, y, "Embedded Systems:")
    c.setFont("Helvetica", 10)
    c.drawString(130, y, "Microcontrollers, ATmega32 (Timer1), ESP32, Sensors Integration, Microchip Studio")
    y -= 15
    
    c.setFont("Helvetica-Bold", 10)
    c.drawString(40, y, "Databases & Tools:")
    c.setFont("Helvetica", 10)
    c.drawString(130, y, "Supabase, Git & GitHub, CI/CD Pipelines, CodeRabbit, Figma, Scrum/Agile")
    y -= 30

    # Projects
    c.setFillColor(colors.HexColor("#0f172a"))
    c.setFont("Helvetica-Bold", 14)
    c.drawString(40, y, "Featured Projects")
    y -= 20

    projects = [
        ("TourBuddy Platform", "Developer & Technical Planner", "React Native, Figma, Architecture"),
        ("Physio Clinic Management System", "Full Stack Developer", "React, Supabase, Cloud Databases"),
        ("AI Agent", "AI Developer & Team Member", "Python, Machine Learning, Agile (Scrum)"),
        ("Task Management System", "Software Developer", "JavaScript, HTML, Java, Database")
    ]
    
    for title, role, tech in projects:
        c.setFont("Helvetica-Bold", 11)
        c.drawString(40, y, title)
        y -= 15
        c.setFont("Helvetica", 10)
        c.drawString(40, y, f"Role: {role} | Tech: {tech}")
        y -= 25

    y -= 10
        
    # Activities & Experience
    c.setFillColor(colors.HexColor("#0f172a"))
    c.setFont("Helvetica-Bold", 14)
    c.drawString(40, y, "Activities & Experience")
    y -= 20
    
    activities = [
        ("Tech Speaker (Ongoing)", "Delivering advanced technical presentations on Agile (Scrum) and CMMI."),
        ("Participant in GDG Hackathon (April 2026)", "4-day hackathon, workshops on AI tools and version control systems."),
        ("Hack to Hire GenAI Hackathon (October 2025)", "Developed innovative software solutions based on generative AI in Cairo.")
    ]
    
    for title, desc in activities:
        c.setFont("Helvetica-Bold", 10)
        c.drawString(40, y, title)
        y -= 15
        c.setFont("Helvetica", 10)
        c.drawString(40, y, desc)
        y -= 25
        
    # Certifications
    y -= 10
    c.setFillColor(colors.HexColor("#0f172a"))
    c.setFont("Helvetica-Bold", 14)
    c.drawString(40, y, "Certifications")
    y -= 20
    
    c.setFont("Helvetica", 10)
    c.drawString(40, y, "• AI Engineering Bootcamp (January 2026)")
    y -= 15
    c.drawString(40, y, "• Arabic Agentic AI (September 2025)")
    y -= 15
    c.drawString(40, y, "• AI for Startups (September 2025)")
    
    c.save()

if __name__ == '__main__':
    create_cv()
