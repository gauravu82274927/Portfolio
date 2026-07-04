import { useState, useEffect } from "react";
import { Menu, X, Smartphone, Globe, Terminal, FileText, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MagneticButton from "./MagneticButton";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Milestones" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection tracker
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? "bg-[#09090B]/80 backdrop-blur-md border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <div 
            onClick={() => scrollToSection("hero")} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-display font-bold text-sm shadow-[0_0_15px_rgba(10,132,255,0.3)] group-hover:scale-105 transition">
              G
            </div>
            <span className="text-white text-xs font-mono font-bold tracking-wider uppercase group-hover:text-accent transition">
              Gaurav
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#141416]/50 border border-white/5 p-1 rounded-full backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition relative ${
                    isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/5 rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <MagneticButton strength={0.25}>
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white font-medium text-xs rounded-full border border-white/5 transition"
                id="nav-resume-btn"
              >
                <FileText size={12} className="text-accent" />
                <span>Resume</span>
                <ArrowUpRight size={10} className="text-zinc-500" />
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Toggles */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] bg-[#09090B] border-b border-white/5 z-30 p-6 flex flex-col gap-6 lg:hidden"
            id="mobile-drawer"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm py-1 border-l-2 pl-3 transition ${
                    activeSection === item.id
                      ? "border-accent text-white font-semibold"
                      : "border-transparent text-zinc-400 hover:text-white"
                  }`}
                  id={`mobile-nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-[#09090B] font-semibold text-xs rounded-xl shadow-lg"
                id="mobile-resume-btn"
              >
                <FileText size={14} />
                <span>Open Digital Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
