import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Phone, MapPin, ExternalLink, Download, Printer, BookOpen, Trophy, Award, Briefcase, ChevronRight } from "lucide-react";
import { profile, education, skillGroups, achievements, projects, certifications } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl h-[85vh] bg-[#121214] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 print:h-auto print:border-none print:shadow-none print:bg-white print:text-black"
            id="resume-modal-body"
          >
            {/* Header / Actions */}
            <div className="flex items-center justify-between p-4 md:px-6 md:py-4 border-b border-white/10 bg-[#161619] print:hidden">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Digital Resume</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition"
                >
                  <Printer size={13} />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Resume Content Sheet */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 print:p-0 print:overflow-visible print:bg-white">
              
              {/* Header Info */}
              <div className="border-b border-zinc-800 pb-6 print:border-zinc-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                  <div>
                    <h1 className="text-3xl font-display font-bold text-white print:text-black tracking-tight">{profile.name}</h1>
                    <p className="text-accent text-sm font-mono mt-1 font-medium">{profile.role}</p>
                    <p className="text-zinc-400 text-xs mt-1 print:text-zinc-600">Specializing in iOS development & Backend services</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-400 print:text-zinc-700">
                    <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-accent transition">
                      <Mail size={12} className="text-accent" />
                      <span>{profile.email}</span>
                    </a>
                    <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-accent transition">
                      <Phone size={12} className="text-accent" />
                      <span>{profile.phone}</span>
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition">
                      <ExternalLink size={12} className="text-accent" />
                      <span>LinkedIn Profile</span>
                    </a>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition">
                      <ExternalLink size={12} className="text-accent" />
                      <span>GitHub Account</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Grid Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Left Side: Skills & Metadata */}
                <div className="space-y-6 md:col-span-1 border-r border-zinc-800/50 pr-4 md:border-r print:border-zinc-200">
                  
                  {/* Education */}
                  <div>
                    <h2 className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-widest mb-3 flex items-center gap-2 print:text-zinc-800">
                      <BookOpen size={13} className="text-accent" />
                      <span>Education</span>
                    </h2>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-white print:text-black">{education.school}</h3>
                      <p className="text-xs text-zinc-400 print:text-zinc-600">{education.degree}</p>
                      <div className="flex justify-between text-[11px] font-mono text-zinc-500 mt-1">
                        <span>{education.duration}</span>
                        <span className="text-accent font-semibold">CGPA: {education.cgpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h2 className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-widest mb-3 flex items-center gap-2 print:text-zinc-800">
                      <Award size={13} className="text-accent" />
                      <span>Certifications</span>
                    </h2>
                    <ul className="space-y-1.5 text-xs text-zinc-400 print:text-zinc-600">
                      {certifications.map((cert, index) => (
                        <li key={index} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-accent" />
                          <span>{cert.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack summary */}
                  <div>
                    <h2 className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-widest mb-3 flex items-center gap-2 print:text-zinc-800">
                      <Briefcase size={13} className="text-accent" />
                      <span>Core Skills</span>
                    </h2>
                    <div className="space-y-3">
                      {skillGroups.map((group, index) => (
                        <div key={index}>
                          <span className="text-[11px] font-mono text-zinc-500 block mb-1">{group.category}</span>
                          <div className="flex flex-wrap gap-1">
                            {group.skills.map((skill, sIndex) => (
                              <span 
                                key={sIndex} 
                                className="text-[10px] px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded border border-zinc-700/50 font-mono print:bg-zinc-100 print:text-black print:border-zinc-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Side: Projects & Achievements */}
                <div className="space-y-6 md:col-span-2">
                  
                  {/* Projects */}
                  <div>
                    <h2 className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-widest mb-4 flex items-center gap-2 print:text-zinc-800">
                      <ChevronRight size={13} className="text-accent" />
                      <span>Featured Projects</span>
                    </h2>
                    
                    <div className="space-y-4">
                      {projects.map((proj) => (
                        <div key={proj.id} className="p-3.5 rounded-lg border border-zinc-800/50 bg-zinc-900/30 print:bg-transparent print:border-zinc-200">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-sm font-semibold text-white print:text-black flex items-center gap-2">
                                {proj.title}
                                {proj.status === "Ongoing" && (
                                  <span className="text-[9px] px-1.5 py-0.2 bg-emerald-500/10 text-emerald-400 rounded-full font-mono border border-emerald-500/20">
                                    {proj.status}
                                  </span>
                                )}
                              </h3>
                              <p className="text-xs text-zinc-400 mt-1 print:text-zinc-700">{proj.description}</p>
                            </div>
                          </div>
                          
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {proj.features.map((feat, fIdx) => (
                              <span key={fIdx} className="text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded print:bg-zinc-100 print:text-zinc-700">
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h2 className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-widest mb-4 flex items-center gap-2 print:text-zinc-800">
                      <Trophy size={13} className="text-accent" />
                      <span>Key Accomplishments</span>
                    </h2>
                    <div className="space-y-3">
                      {achievements.map((ach, idx) => (
                        <div key={idx} className="flex gap-2 items-start text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-zinc-200 print:text-black">{ach.title}</p>
                            {ach.description && (
                              <p className="text-zinc-400 print:text-zinc-600 mt-0.5">{ach.description}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Footer */}
            <div className="p-4 bg-[#161619] border-t border-white/10 text-center text-[10px] font-mono text-zinc-500 print:hidden">
              Designed & Built with React and Tailwind. Designed to support instant layout exports.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
