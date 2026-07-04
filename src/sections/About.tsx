import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar, Compass, Target, Code } from "lucide-react";
import { aboutContent, education } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      
      {/* Small Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-accent uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
          <span>01 /</span>
          <span>Story</span>
        </p>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Conversational Bio (Bento Card 1) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[#1C1C1E] border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 shadow-md"
        >
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Philosophy</span>
            <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
              <p>{aboutContent.bio[0]}</p>
              <p>{aboutContent.bio[1]}</p>
              <p>{aboutContent.bio[2]}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Compass size={15} />
            </div>
            <div>
              <p className="text-xs text-white font-medium">Core Strategy</p>
              <p className="text-[11px] text-white/50">Offline resilience & programmatic native execution.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: University & Academic Program (Bento Card 2) */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-6 w-full">
          
          {/* Education Detail Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#1C1C1E] border border-white/10 p-6 rounded-3xl flex flex-col justify-between space-y-5 shadow-md"
          >
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-3">Academic Program</span>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent flex-shrink-0 border border-accent/10">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{education.school}</h3>
                  <p className="text-xs text-white/60 mt-1">{education.degree}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <Calendar size={13} className="text-zinc-500" />
                <span className="text-xs font-mono text-white/60">{education.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 justify-end">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">CGPA</span>
                <span className="text-sm font-mono font-bold text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/15">
                  {education.cgpa}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Core Focus Area List Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1C1C1E] border border-white/10 p-6 rounded-3xl shadow-md"
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">Current Focus Areas</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {aboutContent.currentFocus.map((focus, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 p-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs text-white/80 font-medium">{focus}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
