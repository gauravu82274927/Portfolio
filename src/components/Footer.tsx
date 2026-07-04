import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#09090B] border-t border-white/5 py-12 px-4 md:px-8 relative z-10" id="app-footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Name and Slogan */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-accent flex items-center justify-center text-white text-[10px] font-bold font-display">
              G
            </div>
            <span className="text-white text-xs font-mono font-bold tracking-wider uppercase">
              Gaurav
            </span>
          </div>
          <p className="text-[10px] text-zinc-500 font-mono mt-1">
            © {new Date().getFullYear()} Gaurav. Chitkara University. All rights reserved.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-500">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
            <Github size={11} />
            <span>GitHub</span>
          </a>
          <span>/</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
            <Linkedin size={11} />
            <span>LinkedIn</span>
          </a>
          <span>/</span>
          <a href={`mailto:${profile.email}`} className="hover:text-white transition flex items-center gap-1">
            <Mail size={11} />
            <span>Email</span>
          </a>
        </div>

        {/* Right Side: Scroll back up button */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-zinc-500">Back to Top</span>
          <MagneticButton strength={0.4}>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/5 hover:border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition shadow-lg"
              aria-label="Scroll back to top"
              id="scroll-to-top-btn"
            >
              <ArrowUp size={13} />
            </button>
          </MagneticButton>
        </div>

      </div>
    </footer>
  );
}
