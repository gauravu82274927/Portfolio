import { motion } from "motion/react";
import { projects } from "../data/portfolioData";
import { Github, ExternalLink, Calendar, Code, Smartphone, CheckCircle, HelpCircle } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-accent uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
          <span>03 /</span>
          <span>Inventions</span>
        </p>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
          Featured Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, pIdx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: pIdx * 0.1 }}
            className="group relative bg-[#1C1C1E] border border-white/10 hover:border-accent/30 rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition duration-300 shadow-xl"
          >
            {/* Soft Ambient Corner Backglow */}
            <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none ${
              project.isComingSoon 
                ? "bg-amber-500/5" 
                : "bg-accent/5"
            }`} />

            {/* Core Content */}
            <div className="space-y-5">
              {/* Top Bar with Badge & Project Icon */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-accent group-hover:border-accent/10 transition duration-300">
                  {project.isComingSoon ? (
                    <Smartphone size={18} />
                  ) : (
                    <Code size={18} />
                  )}
                </div>

                {/* Status Badges */}
                {project.status === "Ongoing" && (
                  <span className="flex items-center gap-1 text-[9px] font-mono font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    <CheckCircle size={8} />
                    <span>Active Build</span>
                  </span>
                )}
                
                {project.status === "Completed" && (
                  <span className="flex items-center gap-1 text-[9px] font-mono font-medium text-blue-400 bg-blue-400/10 border border-blue-500/10 px-2.5 py-0.5 rounded-full">
                    <span>Shipped</span>
                  </span>
                )}

                {project.status === "Coming Soon" && (
                  <span className="flex items-center gap-1 text-[9px] font-mono font-medium text-amber-500 bg-amber-500/10 border border-amber-500/10 px-2.5 py-0.5 rounded-full">
                    <HelpCircle size={8} />
                    <span>Coming Soon</span>
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-accent transition duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed min-h-[50px]">
                  {project.description}
                </p>
              </div>

              {/* Feature Tags list */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Key Highlights</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.features.map((feature, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[10px] px-2 py-0.5 bg-white/5 text-white/70 rounded-md font-mono border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              {project.isComingSoon ? (
                <div className="flex items-center gap-1 text-xs text-amber-500/70 font-mono font-medium">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping mr-1" />
                  <span>iOS Specialization</span>
                </div>
              ) : (
                <span className="text-[10px] font-mono text-white/50">Repository Live</span>
              )}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 transition"
                  id={`project-link-${project.id}`}
                >
                  <Github size={13} />
                  <span>View Code</span>
                  <ExternalLink size={10} className="opacity-60" />
                </a>
              ) : (
                <div className="text-xs text-white/40 font-mono italic px-3 py-1.5 bg-white/5 rounded-xl border border-white/10">
                  Coming Soon
                </div>
              )}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
