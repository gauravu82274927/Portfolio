import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { FileText, ArrowUpRight, ArrowDown, ChevronRight, PhoneCall, MapPin, Sparkles, Code2, Layers, Cpu } from "lucide-react";
import MagneticButton from "../components/MagneticButton";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Native iOS Developer",
    "Swift & UIKit Specialist",
    "Backend Engineer",
    "Problem Solver",
    "Computer Science Student"
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // Pause at full word
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500; // Pause before next word
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentRole.substring(0, charIndex - 1)
          : currentRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* 12-Column Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full z-10">
        
        {/* Card 1: Main Introduction (Col 8) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-8 bg-[#1C1C1E] border border-white/10 p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[340px] md:min-h-[380px] shadow-lg group"
        >
          {/* Decorative subtle grid background lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
              <Sparkles size={11} className="text-accent animate-pulse" />
              <span className="text-[10px] font-mono font-semibold tracking-wider text-accent uppercase">
                Welcome to My Workspace
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                Hey, I'm <span className="text-accent">Gaurav</span>
              </h1>
              
              <div className="h-8 sm:h-10 text-lg sm:text-2xl font-mono text-white/50 font-medium flex items-center">
                <span>I build&nbsp;</span>
                <span className="text-white border-r-2 border-accent animate-pulse pr-1">
                  {typedText}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6 relative z-10 mt-6">
            <p className="max-w-xl text-white/60 text-sm sm:text-base leading-relaxed">
              I'm a Computer Science student at Chitkara University passionately engineering custom swift mobile solutions and scaling backend structures. Focused on crafting highly functional, offline-first, and beautifully optimized digital products.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-white/40">
              <span className="flex items-center gap-1.5">
                <Code2 size={13} className="text-accent" />
                iOS Swift
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span className="flex items-center gap-1.5">
                <Cpu size={13} className="text-accent" />
                UIKit & SwiftUI
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span className="flex items-center gap-1.5">
                <Layers size={13} className="text-accent" />
                Express & Postgres
              </span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Interactive Monogram Avatar (Col 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-4 bg-[#1C1C1E] border border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden shadow-lg select-none min-h-[340px] md:min-h-[380px]"
        >
          {/* Grid ambient background lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="absolute inset-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full m-auto pointer-events-none" />

          {/* Interactive outer ring */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-white/5 flex items-center justify-center p-3 backdrop-blur-sm bg-white/[0.01]">
            <svg className="absolute inset-0 w-full h-full text-accent/20 animate-[spin_32s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 4" />
            </svg>
            <svg className="absolute inset-0 w-full h-full text-white/20 animate-[spin_16s_linear_infinite_reverse]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 6" />
            </svg>

            <motion.div
              className="w-full h-full rounded-full bg-[#18181A] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group shadow-xl"
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-indigo-600/10 opacity-60 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#0A84FF] to-blue-600 rounded-2xl shadow-[0_0_30px_rgba(10,132,255,0.3)] flex items-center justify-center text-white text-2xl sm:text-3xl font-display font-bold tracking-tighter"
                >
                  G
                </motion.div>
                <div className="mt-3">
                  <p className="text-white text-xs font-mono tracking-wider uppercase">Gaurav</p>
                  <p className="text-[9px] text-white/50 font-mono mt-0.5">iOS Specialization 2024–28</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-mono text-white/70">Available</span>
          </div>
        </motion.div>

        {/* Card 3: Metrics & Location (Col 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-4 bg-[#1C1C1E] border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-lg"
        >
          <div>
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block mb-1">Base Location</span>
            <div className="flex items-center gap-2 mt-1">
              <MapPin size={16} className="text-accent" />
              <h3 className="text-sm font-semibold text-white">Punjab, India</h3>
            </div>
            <p className="text-[11px] text-white/50 mt-1">Ready for global remote work & relocation.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mt-6">
            <div>
              <span className="text-[20px] font-mono font-bold text-accent">20+</span>
              <span className="text-[9px] font-mono text-white/50 uppercase tracking-wider block mt-0.5">Custom Tools</span>
            </div>
            <div>
              <span className="text-[20px] font-mono font-bold text-accent">9.3+</span>
              <span className="text-[9px] font-mono text-white/50 uppercase tracking-wider block mt-0.5">CGPA Score</span>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Actions Gateway (Col 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-5 bg-[#1C1C1E] border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-lg"
        >
          <div>
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block mb-2">Gateways</span>
            <h3 className="text-base font-semibold text-white">Navigate & Execute</h3>
            <p className="text-xs text-white/50 mt-1">Access verified engineering records, custom iOS products, and operational pipelines.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            <MagneticButton strength={0.15}>
              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#050505] font-semibold text-xs rounded-xl shadow-md hover:bg-zinc-200 transition duration-300 w-full cursor-pointer"
                id="cta-resume-btn"
              >
                <FileText size={14} />
                <span>View Resume</span>
              </button>
            </MagneticButton>

            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center justify-center gap-1 px-4 py-3 bg-white/5 text-white/90 hover:text-white border border-white/10 font-semibold text-xs rounded-xl hover:bg-white/10 transition duration-300 w-full cursor-pointer"
              id="cta-projects-btn"
            >
              <span>Explore Projects</span>
              <ChevronRight size={13} className="mt-0.5" />
            </button>
          </div>
        </motion.div>

        {/* Card 5: Dynamic Contact Quicklink (Col 3) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-3 bg-[#1C1C1E] border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-lg cursor-pointer group hover:border-accent/40 transition duration-300"
          onClick={() => scrollToSection("contact")}
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3 group-hover:scale-110 transition duration-300">
              <PhoneCall size={14} />
            </div>
            <h3 className="text-sm font-semibold text-white">Get in Touch</h3>
            <p className="text-[11px] text-white/50 mt-1">Let's build secure products together.</p>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-accent pt-4 mt-4 border-t border-white/10">
            <span>Connect</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-300" />
          </div>
        </motion.div>

      </div>

      {/* Floating scroll indicator at the bottom */}
      <div 
        className="mt-12 mx-auto flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition cursor-pointer" 
        onClick={() => scrollToSection("about")}
      >
        <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Story & Skills</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-white/60" />
        </motion.div>
      </div>
    </section>
  );
}
