import { motion } from "motion/react";
import { achievements, certifications } from "../data/portfolioData";
import { Trophy, Award, Check, Cpu, Zap, Star } from "lucide-react";

export default function Achievements() {
  const getAchievementIcon = (title: string) => {
    if (title.toLowerCase().includes("leetcode") || title.toLowerCase().includes("dsa")) {
      return <Cpu size={16} className="text-orange-400" />;
    }
    if (title.toLowerCase().includes("hackathon") || title.toLowerCase().includes("hp")) {
      return <Zap size={16} className="text-accent" />;
    }
    if (title.toLowerCase().includes("star")) {
      return <Star size={16} className="text-yellow-400" fill="currentColor" />;
    }
    return <Trophy size={16} className="text-emerald-400" />;
  };

  return (
    <section id="achievements" className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-accent uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
          <span>04 /</span>
          <span>Milestones</span>
        </p>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
          Achievements & Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Milestones */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest block mb-4">Competitions & Milestones</h3>
          
          <div className="space-y-4">
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-[#1C1C1E] border border-white/10 hover:border-accent/30 p-5 rounded-3xl flex items-start gap-4 transition duration-300 shadow-md"
              >
                {/* Icon wrapper */}
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition">
                  {getAchievementIcon(ach.title)}
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white tracking-wide group-hover:text-accent transition">
                    {ach.title}
                  </h4>
                  {ach.description && (
                    <p className="text-xs text-white/60 leading-relaxed">
                      {ach.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest block mb-4">Verified Certifications</h3>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#1C1C1E] border border-white/10 rounded-3xl p-6 space-y-5 shadow-md"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent border border-accent/10">
                <Award size={18} />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase">Education Track</p>
                <h4 className="text-xs font-semibold text-white mt-0.5">Specialization verified by Chitkara University</h4>
              </div>
            </div>

            <div className="space-y-3.5">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="text-xs text-white/80 font-medium font-mono">
                      {cert.name}
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">Completed</span>
                </div>
              ))}
            </div>

            <div className="text-[10px] text-zinc-500 font-mono italic text-center pt-2">
              Curriculum aligned with industry-standard professional practices.
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
