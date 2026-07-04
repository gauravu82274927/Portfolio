import { motion, AnimatePresence } from "motion/react";
import { useState, FormEvent, MouseEvent } from "react";
import { Mail, Phone, Github, Linkedin, Send, Copy, Check, MessageSquare, ExternalLink } from "lucide-react";
import { profile } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API delivery delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-accent uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
          <span>06 /</span>
          <span>Initiation</span>
        </p>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
          Get in Touch
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Column: Direct Contact Details & Links */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wide">Let's discuss opportunities</h3>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
              Whether you are looking to hire an iOS developer, discuss a backend backend project, or simply want to chat about engineering—feel free to drop a message. I'm always open to talking tech.
            </p>
          </div>

          {/* Quick Contact Links */}
          <div className="space-y-3.5 max-w-md">
            
            {/* Email Block */}
            <div className="group flex items-center justify-between p-3.5 bg-[#1C1C1E] border border-white/10 rounded-3xl hover:border-accent/30 transition shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent/5 flex items-center justify-center text-accent border border-accent/10">
                  <Mail size={15} />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase block">Email Address</span>
                  <a href={`mailto:${profile.email}`} className="text-xs font-mono text-white/80 hover:text-white transition">
                    {profile.email}
                  </a>
                </div>
              </div>
              <button 
                onClick={() => handleCopy(profile.email, "email")}
                className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition"
                title="Copy Email"
                id="copy-email-btn"
              >
                {copiedType === "email" ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Phone Block */}
            <div className="group flex items-center justify-between p-3.5 bg-[#1C1C1E] border border-white/10 rounded-3xl hover:border-accent/30 transition shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent/5 flex items-center justify-center text-accent border border-accent/10">
                  <Phone size={15} />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase block">Phone Contact</span>
                  <a href={`tel:${profile.phone}`} className="text-xs font-mono text-white/80 hover:text-white transition">
                    {profile.phone}
                  </a>
                </div>
              </div>
              <button 
                onClick={() => handleCopy(profile.phone, "phone")}
                className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition"
                title="Copy Phone"
                id="copy-phone-btn"
              >
                {copiedType === "phone" ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
              </button>
            </div>

          </div>

          {/* Social Profiles Row */}
          <div className="flex items-center gap-3.5 pt-4">
            <MagneticButton strength={0.3}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#1C1C1E] border border-white/10 hover:border-accent/30 flex items-center justify-center text-white/70 hover:text-white transition shadow-lg"
                id="contact-github-link"
              >
                <Github size={18} />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.3}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#1C1C1E] border border-white/10 hover:border-accent/30 flex items-center justify-center text-white/70 hover:text-white transition shadow-lg"
                id="contact-linkedin-link"
              >
                <Linkedin size={18} />
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Right Column: Dynamic Interactive Form */}
        <div className="lg:col-span-7">
          <motion.div 
            className="h-full bg-[#1C1C1E] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
            layout
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  id="contact-form-el"
                >
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="form-name" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Your Name</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Gaurav"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-accent/40 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 outline-none transition"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="form-email" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Email Address</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="hello@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-accent/40 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 outline-none transition"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="form-message" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Message</label>
                    <textarea
                      id="form-message"
                      required
                      rows={4}
                      placeholder="Let's build something epic together..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-accent/40 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-accent text-white font-semibold text-xs rounded-xl shadow-lg shadow-accent/10 hover:shadow-accent/20 hover:bg-blue-600 active:scale-[0.99] transition duration-200 disabled:opacity-50 disabled:pointer-events-none mt-2"
                    id="form-submit-btn"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={13} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-10 text-center space-y-4"
                  id="form-success-card"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center">
                    <Check size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">Message transmitted successfully!</h4>
                    <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                      Thank you for reaching out. I have received your message and will respond as soon as possible.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-accent hover:underline font-mono"
                    id="back-to-form-btn"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
