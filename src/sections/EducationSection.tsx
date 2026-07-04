import { motion } from "motion/react";
import { education } from "../data/portfolioData";
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle } from "lucide-react";

export default function EducationSection() {
  const coreCurriculum = [
    "Native iOS Programming (Swift & UIKit)",
    "Data Structures & Algorithms (DSA)",
    "Object Oriented Programming (Java/C++)",
    "Database Management Systems (MongoDB)",
    "Backend Web Engineering (Node.js & Express)",
    "Software Development Methodologies (Agile)"
  ];

  return (
    <section id="education" className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-accent uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
          <span>05 /</span>
          <span>Journey</span>
        </p>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
          Academic Journey
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Card: University Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-[#1C1C1E] border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden"
        >
          {/* Subtle logo backglow */}
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Institution</span>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center text-accent">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {education.school}
                </h3>
                <p className="text-sm text-white/60 font-mono mt-1 font-medium">
                  {education.degree}
                </p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Calendar size={13} className="text-accent" />
                <span>Duration: {education.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <MapPin size={13} className="text-accent" />
                <span>Punjab, India</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Award size={14} className="text-emerald-400" />
              <span className="text-xs text-white/60">Academic Standing</span>
            </div>
            <span className="text-sm font-mono font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded">
              CGPA: {education.cgpa}
            </span>
          </div>
        </motion.div>

        {/* Right Card: Curriculum Focus */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 bg-[#1C1C1E] border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-2xl"
        >
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Core Curriculum</span>
            <p className="text-xs text-white/60">
              Engaging in rigorous technical coursework to build strong analytical skills, program architecture paradigms, and native application mechanics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {coreCurriculum.map((course, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2.5 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition duration-200"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <CheckCircle size={10} />
                  </div>
                  <span className="text-xs text-white/80 font-medium">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
              <BookOpen size={14} />
            </div>
            <p className="text-[11px] text-zinc-500 font-mono">
              Theoretical concepts reinforced by custom, production-ready projects.
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
