import { motion } from "motion/react";
import { skillGroups } from "../data/portfolioData";
import { Sparkles, Terminal, Globe, Server, Smartphone, BookOpen, Settings } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "languages":
        return <Terminal size={15} />;
      case "frontend":
        return <Globe size={15} />;
      case "backend":
        return <Server size={15} />;
      case "mobile (ios)":
        return <Smartphone size={15} />;
      case "currently learning":
        return <BookOpen size={15} />;
      default:
        return <Settings size={15} />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-accent uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
          <span>02 /</span>
          <span>Capability</span>
        </p>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
          Technical Skills
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, gIdx) => (
          <motion.div
            key={gIdx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: gIdx * 0.05 }}
            className="group relative bg-[#1C1C1E] border border-white/10 hover:border-accent/30 p-6 rounded-3xl transition duration-300 flex flex-col justify-between shadow-md"
          >
            {/* Subtle top-right hover highlight */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-accent group-hover:border-accent/10 transition duration-300">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    {group.category}
                  </h3>
                </div>
                
                {group.category.toLowerCase().includes("learning") && (
                  <span className="flex items-center gap-1 text-[9px] font-mono font-medium text-amber-500 bg-amber-500/10 border border-amber-500/10 px-2 py-0.5 rounded-full">
                    <Sparkles size={8} />
                    <span>Focusing</span>
                  </span>
                )}
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1.5 bg-white/5 text-white/80 hover:text-white border border-white/10 rounded-xl transition duration-200 font-mono hover:bg-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Micro background line bar */}
            <div className="w-full h-0.5 bg-white/5 mt-6 rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent/25 group-hover:bg-accent group-hover:w-full transition-all duration-700 ease-out" 
                style={{ width: "35%" }}
              />
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
