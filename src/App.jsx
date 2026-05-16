import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  ExternalLink, 
  Download, 
  Menu, 
  X, 
  Code2, 
  Terminal, 
  Database, 
  Layout,
  Award,
  Cpu,
  BrainCircuit,
  Briefcase,
  Phone
} from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const element = document.createElement("a");
    element.href = "/Mohamed_Ahmed_CV.pdf";
    element.download = "Mohamed_Ahmed_CV.pdf"; 
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const projects = [
    {
      id: 1,
      title: "TourBuddy Platform",
      description: "A digital platform designed to connect tourists with local guides in specific regions of Egypt, involving complete technical and business planning along with UI/UX design.",
      tech: ["Software Architecture", "UI/UX", "Figma", "React Native"],
      role: "Developer & Technical Planner",
      github: "https://github.com/Mohammed0Ahmed0Mohammed/tourbuddy",
      live: "https://tourbuddy.vercel.app"
    },
    {
      id: 2,
      title: "Physio Clinic Management System",
      description: "A comprehensive cloud-based system for managing physiotherapy clinics, relying on modern backend technologies to organize appointments and patient data.",
      tech: ["React", "Supabase", "Cloud Databases", "Full-Stack"],
      role: "Full Stack Developer",
      github: "https://github.com/Mohammed0Ahmed0Mohammed/physio-clinic-system",
      live: "https://physio-clinic.vercel.app"
    },
    {
      id: 3,
      title: "AI Agent",
      description: "A technical project to create an intelligent agent, developed in an Agile environment in collaboration with a team of 6 developers.",
      tech: ["Python", "Machine Learning", "Agile (Scrum)", "Git"],
      role: "AI Developer & Team Member",
      github: "https://github.com/Mohammed0Ahmed0Mohammed/ai-agent-project"
    },
    {
      id: 4,
      title: "Task Management System",
      description: "A task organization app relying on integrated databases, aimed at facilitating planning and managing daily work effectively.",
      tech: ["JavaScript", "HTML", "Java", "Database"],
      role: "Software Developer",
      github: "https://github.com/Mohammed0Ahmed0Mohammed/task-manager-system",
      live: "https://mohammed-task-manager.vercel.app"
    }
  ];

  const skills = [
    { 
      category: "Software & UI Development", 
      icon: <Layout className="w-6 h-6 mb-2 text-emerald-400" />, 
      items: ["React Native", "JavaScript", "HTML", "Java", "Full-Stack Development", "Software Architecture"] 
    },
    { 
      category: "Artificial Intelligence (AI/ML)", 
      icon: <BrainCircuit className="w-6 h-6 mb-2 text-emerald-400" />, 
      items: ["Deep Learning", "VGG16 & VGG19", "AlexNet", "Data Preprocessing", "AI Agents"] 
    },
    { 
      category: "Embedded Systems", 
      icon: <Cpu className="w-6 h-6 mb-2 text-emerald-400" />, 
      items: ["Microcontrollers", "ATmega32 (Timer1)", "ESP32", "Sensors Integration", "Microchip Studio"] 
    },
    { 
      category: "Databases & Tools", 
      icon: <Database className="w-6 h-6 mb-2 text-emerald-400" />, 
      items: ["Supabase", "Git & GitHub", "CI/CD Pipelines", "CodeRabbit", "Figma", "Scrum/Agile"] 
    }
  ];

  const certifications = [
    { name: "AI Engineering Bootcamp", date: "January 2026" },
    { name: "Arabic Agentic AI", date: "September 2025" },
    { name: "AI for Startups", date: "September 2025" }
  ];

  const activities = [
    {
      year: "April 2026",
      title: "Participant in GDG Hackathon",
      description: "Participated in an intensive 4-day hackathon, which included advanced workshops on artificial intelligence tools and version control systems."
    },
    {
      year: "October 2025",
      title: "Participant in Hack to Hire GenAI Hackathon",
      description: "Participated in a leading tech event in Cairo to develop innovative software solutions based on generative AI."
    },
    {
      year: "Ongoing",
      title: "Tech Speaker",
      description: "Preparing and delivering advanced technical and academic presentations for classmates on Agile frameworks (Scrum) and Capability Maturity Models (CMMI)."
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div dir="ltr" className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-slate-800 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
            &lt;Mohamed Ali /&gt;
          </div>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-sm lg:text-base">
            <button onClick={() => scrollToSection('about')} className="hover:text-emerald-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-emerald-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-emerald-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('certs')} className="hover:text-emerald-400 transition-colors">Certifications</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-emerald-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">Contact</button>
            <button onClick={handleDownloadCV} className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300 ml-2">
              <Download className="w-4 h-4" />
              CV
            </button>
          </div>

          <button className="md:hidden text-slate-200 hover:text-emerald-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 absolute w-full shadow-2xl">
            <button onClick={() => scrollToSection('about')} className="text-left text-lg hover:text-emerald-400">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-left text-lg hover:text-emerald-400">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-left text-lg hover:text-emerald-400">Skills</button>
            <button onClick={() => scrollToSection('certs')} className="text-left text-lg hover:text-emerald-400">Certifications</button>
            <button onClick={() => scrollToSection('experience')} className="text-left text-lg hover:text-emerald-400">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-lg hover:text-emerald-400">Contact</button>
            <button onClick={handleDownloadCV} className="flex justify-center items-center gap-2 bg-emerald-500 text-slate-950 px-4 py-3 rounded-lg font-bold mt-2">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        )}
      </nav>

      <main>
        {/* Hero & About */}
        <section id="home" className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute top-20 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>

          <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-12">
            <div id="about" className="flex-1 text-center lg:text-left max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6 font-mono text-sm">
                <Briefcase className="w-4 h-4" />
                <span>CS & Engineering Student - Egypt</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-100 leading-tight">
                Mohamed Ahmed
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-slate-400">
                <span className="text-emerald-400">Full-Stack</span> Developer & <span className="text-cyan-400">Smart Systems</span> Engineer.
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl lg:mx-0 mx-auto">
                I combine my passion for software engineering, mobile and web development, with my expertise in Artificial Intelligence (Deep Learning) and Embedded Systems. I aim to build robust software architectures and integrated systems that are scalable and smartly meet user needs.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button onClick={() => scrollToSection('projects')} className="bg-emerald-500 text-slate-950 px-8 py-3 rounded-lg font-bold hover:bg-emerald-400 hover:-translate-y-1 transition-all duration-300">
                  Explore Projects
                </button>
                <button onClick={handleDownloadCV} className="border border-slate-600 bg-slate-800/50 backdrop-blur-sm text-slate-200 px-8 py-3 rounded-lg font-bold hover:border-emerald-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full w-3/4 h-3/4 m-auto"></div>
              <div className="w-64 h-64 lg:w-80 lg:h-80 relative z-10 border-4 border-slate-800 rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <img src="/profile.jpg" alt="Mohamed Ahmed" className="w-full h-full object-cover bg-slate-800" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 bg-slate-900/40 border-y border-slate-800/50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
              <div className="h-px bg-slate-700 flex-1 max-w-xs"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150"></div>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-900/80 rounded-lg text-emerald-400 border border-slate-700/50">
                      <Code2 className="w-7 h-7" />
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors" title="Repository Link">
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors" title="Live Link">
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-slate-200 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="mb-6 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Role:</p>
                    <p className="text-sm text-slate-300">{project.role}</p>
                  </div>

                  <ul className="flex flex-wrap gap-2 text-sm font-mono text-emerald-300">
                    {project.tech.map((t, index) => (
                      <li key={index} className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100">Technical Skills</h2>
              <div className="h-px bg-slate-700 flex-1 max-w-xs"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="bg-slate-800/30 rounded-xl p-6 border border-slate-800 hover:border-emerald-500/30 hover:bg-slate-800/60 transition-all duration-300">
                  <div className="flex justify-center mb-2">{skillGroup.icon}</div>
                  <h3 className="text-lg font-bold mb-5 text-center text-slate-200">{skillGroup.category}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="text-sm bg-slate-900 text-slate-300 px-3 py-1.5 rounded border border-slate-700/50">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certs" className="py-16 bg-emerald-950/10 border-y border-emerald-900/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold text-slate-100">Certifications</h2>
              <div className="h-px bg-emerald-900/50 flex-1 max-w-xs"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-900/60 p-5 rounded-lg border border-slate-800 hover:border-emerald-500/50 transition-colors">
                  <div className="bg-emerald-500/10 p-3 rounded-full text-emerald-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200">{cert.name}</h4>
                    <p className="text-sm font-mono text-emerald-400/80 mt-1">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl font-bold text-slate-100">Activities & Experience</h2>
              <div className="h-px bg-slate-700 flex-1 max-w-xs"></div>
            </div>

            <div className="max-w-4xl mx-auto border-l-2 border-slate-800 pl-8 relative">
              {activities.map((activity, idx) => (
                <div key={idx} className="mb-14 relative group">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-950 border-4 border-emerald-500 rounded-full group-hover:bg-emerald-500 transition-colors duration-300 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  
                  <span className="inline-block bg-slate-800 text-emerald-400 font-mono text-xs px-3 py-1 rounded-full mb-3 border border-slate-700">{activity.year}</span>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">{activity.title}</h3>
                  <p className="text-slate-400 leading-relaxed bg-slate-800/20 p-4 rounded-lg border border-slate-800/50">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 mb-10 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950/20 pointer-events-none"></div>
          <div className="container mx-auto px-6 lg:px-12 max-w-2xl relative z-10">
            <div className="inline-block p-4 bg-emerald-500/10 rounded-full text-emerald-400 mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">Let's Work Together</h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              Whether you are looking for a passionate developer to join your team or have a project idea you want to build with the latest technologies, my inbox is always open!
            </p>
            <a href="mailto:momammedahmed1m@gmail.com" className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 px-10 py-4 rounded-lg font-bold text-lg hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
              Send Me a Message
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-slate-800 bg-slate-950">
        <div className="flex justify-center gap-6">
          <a href="https://github.com/Mohammed0Ahmed0Mohammed" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors p-3 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-full group" title="GitHub">
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com/in/mohammed-ahmed-dev" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors p-3 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-full group" title="LinkedIn">
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:momammedahmed1m@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors p-3 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-full group" title="Email">
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a href="tel:01013374680" className="text-slate-400 hover:text-emerald-400 transition-colors p-3 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-full group" title="Phone">
            <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </footer>

    </div>
  );
}
