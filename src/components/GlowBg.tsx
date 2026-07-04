import { motion } from "motion/react";

export default function GlowBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic Background Gradients */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-accent/15 blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -70, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-1/4 w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-indigo-600/10 blur-[100px]"
      />
      
      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, 50, -40, 0],
          scale: [1, 1.1, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-blue-500/5 blur-[90px]"
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />
    </div>
  );
}
