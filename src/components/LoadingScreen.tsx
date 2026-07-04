import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing system...");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small pause before exit
          return 100;
        }
        
        // Dynamic status texts
        const nextVal = prev + Math.floor(Math.random() * 15) + 5;
        const boundedVal = Math.min(nextVal, 100);
        
        if (boundedVal < 35) {
          setStatusText("Initializing portfolio core...");
        } else if (boundedVal < 65) {
          setStatusText("Configuring iOS swift modules...");
        } else if (boundedVal < 85) {
          setStatusText("Connecting database bridges...");
        } else {
          setStatusText("Optimizing rendering engines...");
        }
        
        return boundedVal;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#09090B] z-50 flex flex-col items-center justify-center p-6" id="loading-screen">
      <div className="w-full max-w-xs flex flex-col items-center space-y-5">
        
        {/* Monogram emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A84FF] to-blue-600 flex items-center justify-center text-white text-xl font-display font-extrabold shadow-[0_0_30px_rgba(10,132,255,0.3)]"
        >
          G
        </motion.div>

        {/* Status texts & percentage */}
        <div className="text-center space-y-1">
          <p className="text-white text-xs font-mono font-bold tracking-wider uppercase">Gaurav's Space</p>
          <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">{statusText}</p>
        </div>

        {/* Custom Progress Bar */}
        <div className="w-full h-[3px] bg-zinc-900 rounded-full overflow-hidden border border-white/[0.01]">
          <motion.div 
            className="h-full bg-accent rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Numeric percentage counter */}
        <span className="text-[11px] font-mono text-zinc-400 font-semibold">{progress}%</span>

      </div>
    </div>
  );
}
