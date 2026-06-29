import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Menu, 
  X, 
  Code2, 
  Database, 
  Layout,
  BrainCircuit,
  Briefcase,
  Phone,
  ShieldCheck,
  Zap,
  Users,
  Layers,
  CheckCircle2,
  Info,
  ChevronRight,
  Sparkles,
  DollarSign,
  FileText,
  Server,
  Building2,
  Lock,
  RefreshCw,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: "swn",
      isGraduationProject: true,
      title: "SmartWholesale Network (SWN)",
      subtitle: "3-Tier B2B Supply Chain Network & Asset-Light SaaS Platform",
      badge: "🎓 Graduation Project",
      description: "A comprehensive digital supply chain network and asset-light B2B SaaS platform connecting suppliers, wholesalers, and retailers in a unified ecosystem with zero sales commissions and anti-monopoly protections.",
      tech: ["React Native", "Node.js", "Express.js", "PostgreSQL", "React", "JWT Microservices"],
      role: "Lead Architect & Mobile Developer",
      details: [
        "SmartWholesale Network (SWN) is an asset-light 3-tier B2B supply chain platform connecting suppliers, wholesalers, and retailers in a single cloud ecosystem.",
        "Built with a commission-free flat-rate subscription engine, SWN eliminates transaction fees and ensures equitable access to wholesale products.",
        "Features an innovative Automated Data Transfer Microservice that instantly mirrors supplier products to wholesaler catalogs without manual data entry.",
        "Includes an intelligent Anti-Monopoly & Inventory Protection algorithm that prevents market cornering by setting order quantity caps and generating exception tickets.",
        "Engineered with React Native mobile apps for seamless cross-platform management and a robust Node.js/PostgreSQL microservices backend."
      ]
    },
    {
      id: 1,
      title: "TourBuddy Platform",
      subtitle: "Tourism & Local Guide Connection Marketplace",
      description: "A digital platform designed to connect tourists with verified local guides in specific regions of Egypt, involving complete technical and business planning along with UI/UX design.",
      tech: ["React Native", "Software Architecture", "UI/UX", "Figma", "Firebase"],
      role: "Mobile Developer & Technical Planner",
      details: [
        "TourBuddy is a specialized mobile marketplace connecting international and local tourists with certified local tour guides across Egypt.",
        "Features real-time location tracking, interactive tour booking schedules, and integrated multi-currency payment processing.",
        "Provides personalized itinerary recommendations driven by user preferences and authentic ratings from previous travelers.",
        "Built using React Native for smooth cross-platform performance, featuring custom UI components prototyped in Figma.",
        "Streamlines guide verification, booking management, and direct in-app messaging to enhance safety and user trust."
      ]
    },
    {
      id: 2,
      title: "Physio Clinic Management System",
      subtitle: "Cloud-Based Healthcare & Patient Records Platform",
      description: "A comprehensive cloud-based system for managing physiotherapy clinics, relying on modern backend technologies to organize appointments and patient data.",
      tech: ["React Native", "Supabase", "Cloud Databases", "Tailwind CSS"],
      role: "Mobile Developer",
      details: [
        "Physio Clinic Management System is a cross-platform mobile application engineered for physical therapy practices and practitioners.",
        "Simplifies patient onboarding, electronic medical record (EMR) management, treatment session tracking, and exercise prescription logging.",
        "Includes an automated appointment scheduling engine with real-time push notifications and automated reminder alerts.",
        "Leverages Supabase for real-time database synchronization, secure role-based access control, and encrypted patient file storage.",
        "Delivers a mobile-first responsive interface allowing therapists to access patient records securely on iOS and Android devices."
      ]
    },
    {
      id: 4,
      title: "Task Management System",
      subtitle: "Productivity & Workflow Optimization App",
      description: "A task organization app relying on integrated databases, aimed at facilitating planning and managing daily work effectively.",
      tech: ["React Native", "JavaScript", "SQL Database", "AsyncStorage", "REST APIs"],
      role: "React Native Mobile Developer",
      details: [
        "Task Management System is an intuitive mobile application designed to streamline personal and team productivity through structured task tracking.",
        "Features dynamic project categorization, priority tagging, drag-and-drop workflow boards, and progress analytics visualization.",
        "Implements real-time cloud data synchronization and offline caching to ensure uninterrupted productivity across mobile devices.",
        "Offers customized notifications, deadline alerts, and collaborative task assignment capabilities for enhanced team coordination.",
        "Built with scalable relational database architecture to handle complex query filtering, recurring tasks, and performance metrics."
      ]
    }
  ];


  const skills = [
    { 
      category: "Mobile & UI Development", 
      icon: <Layout className="w-6 h-6 mb-2 text-emerald-400" />, 
      items: ["React Native", "JavaScript", "HTML", "CSS", "Java", "Software Architecture"] 
    },
    { 
      category: "Languages & CS Fundamentals", 
      icon: <Code2 className="w-6 h-6 mb-2 text-emerald-400" />, 
      items: ["OOP", "Data Structures", "Algorithms", "Design Patterns", "C / C++", "Java / JavaFX", "Python"] 
    },
    { 
      category: "Domain Expertise", 
      icon: <Briefcase className="w-6 h-6 mb-2 text-emerald-400" />, 
      items: ["E-Learning", "Interactive Learning", "Maritime Transport", "Membership Management", "Mobile Enterprise", "Computer Literacy"] 
    },
    { 
      category: "Artificial Intelligence (AI/ML)", 
      icon: <BrainCircuit className="w-6 h-6 mb-2 text-emerald-400" />, 
      items: ["Deep Learning", "VGG16 & VGG19", "AlexNet", "Data Preprocessing", "AI Agents"] 
    },
    { 
      category: "Databases & Tools", 
      icon: <Database className="w-6 h-6 mb-2 text-emerald-400" />, 
      items: ["Supabase", "Git & GitHub", "CI/CD Pipelines", "CodeRabbit", "Figma", "Scrum/Agile"] 
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
            <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">Contact</button>
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
            <button onClick={() => scrollToSection('contact')} className="text-left text-lg hover:text-emerald-400">Contact</button>
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
                <span className="text-emerald-400">React Native Mobile</span> Developer.
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl lg:mx-0 mx-auto">
                I specialize in mobile application development using React Native. Leveraging my software engineering background and foundational computer science knowledge, I build robust, scalable cross-platform mobile apps tailored to user needs.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button onClick={() => scrollToSection('projects')} className="bg-emerald-500 text-slate-950 px-8 py-3 rounded-lg font-bold hover:bg-emerald-400 hover:-translate-y-1 transition-all duration-300">
                  Explore Projects
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full w-3/4 h-3/4 m-auto"></div>
              <div className="w-64 h-80 lg:w-72 lg:h-96 relative z-10 border-4 border-slate-800 rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <img src="/profile.jpg" alt="Mohamed Ahmed" className="w-full h-full object-cover object-top bg-slate-800" />
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
                <div 
                  key={project.id} 
                  className={`group rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full ${
                    project.isGraduationProject 
                      ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950/40 border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.15)] md:col-span-2' 
                      : 'bg-slate-800/50 border-slate-700 hover:border-emerald-500/50'
                  }`}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150"></div>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-900/80 rounded-lg text-emerald-400 border border-slate-700/50">
                      {project.isGraduationProject ? <Sparkles className="w-7 h-7 text-emerald-400 animate-pulse" /> : <Code2 className="w-7 h-7" />}
                    </div>
                    {project.badge && (
                      <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-4 py-1.5 rounded-full font-bold text-xs md:text-sm tracking-wide">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-slate-100 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-emerald-400 text-sm font-semibold mb-4">{project.subtitle}</p>
                  )}
                  
                  <p className={`text-slate-300 mb-6 flex-grow leading-relaxed ${project.isGraduationProject ? 'text-base md:text-lg' : 'text-slate-400'}`}>
                    {project.description}
                  </p>
                  
                  <div className="mb-6 bg-slate-900/60 p-3.5 rounded-lg border border-slate-700/40 flex flex-wrap justify-between items-center gap-2">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Role:</p>
                      <p className="text-sm font-semibold text-slate-200">{project.role}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-emerald-500/20 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <ul className="flex flex-wrap gap-2 text-sm font-mono text-emerald-300 mt-auto">
                    {project.tech.map((t, index) => (
                      <li key={index} className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
            <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative my-8 text-slate-200">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 p-2 rounded-full border border-slate-700 transition-colors z-20 cursor-pointer"
                title="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-slate-800 pb-6 mb-6">
                {selectedProject.badge && (
                  <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-bold text-xs md:text-sm mb-3">
                    {selectedProject.badge}
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">{selectedProject.title}</h2>
                <p className="text-emerald-400 text-sm md:text-base font-semibold">{selectedProject.subtitle}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <Info className="w-5 h-5 text-emerald-400" />
                    <span>Project Highlights & Specifications</span>
                  </h3>
                  <ul className="space-y-3">
                    {selectedProject.details.map((point, idx) => (
                      <li key={idx} className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm md:text-base leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Technologies & Architecture</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 text-right">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold px-6 py-2.5 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-emerald-500/30 cursor-pointer"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Skills */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100">Technical Skills</h2>
              <div className="h-px bg-slate-700 flex-1 max-w-xs"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Contact Me */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center relative z-10">
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-3">
              Contact <span className="text-emerald-400">Me</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-16">
              Tell me about your next project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-4xl mx-auto">
              {/* Column 1: Email & Location */}
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-emerald-400 font-bold text-xl mb-3">Email</h3>
                  <a 
                    href="mailto:mohammedahmed21ali@gmail.com" 
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-base sm:text-lg break-all"
                  >
                    mohammedahmed21ali@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-emerald-400 font-bold text-xl mb-3">Location</h3>
                  <p className="text-slate-300 text-lg">Luxor, Egypt</p>
                </div>
              </div>

              {/* Column 2: Social Media */}
              <div>
                <h3 className="text-emerald-400 font-bold text-xl mb-3">Social Media</h3>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://github.com/Mohammed0Ahmed0Mohammed" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-lg inline-flex items-center gap-1.5 group w-fit"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-400 group-hover:text-emerald-400" />
                  </a>
                </div>
              </div>

              {/* Column 3: Write Me & We'll Talk */}
              <div>
                <h3 className="text-emerald-400 font-bold text-xl mb-3">Write Me & We'll Talk</h3>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://wa.me/201013374680" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-lg inline-flex items-center gap-1.5 group w-fit"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-400 group-hover:text-emerald-400" />
                  </a>
                  <a 
                    href="https://t.me/+201013374680" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-lg inline-flex items-center gap-1.5 group w-fit"
                  >
                    <span>Telegram</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-400 group-hover:text-emerald-400" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-lg inline-flex items-center gap-1.5 group w-fit"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-400 group-hover:text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-slate-800/80 bg-slate-950 relative z-10">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Mohamed Ahmed. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Mohammed0Ahmed0Mohammed" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors p-2.5 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-lg group" title="GitHub">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:mohammedahmed21ali@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors p-2.5 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-lg group" title="Email">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="tel:01013374680" className="text-slate-400 hover:text-emerald-400 transition-colors p-2.5 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-lg group" title="Phone">
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

