import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.body.classList.add("light");
      } else {
        document.body.classList.remove("light");
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    
    if (nextTheme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-40 w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/5 flex items-center justify-center shadow-2xl backdrop-blur-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle visual theme"
      id="theme-toggler-btn"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 185 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {theme === "dark" ? (
          <Moon size={16} className="text-accent" />
        ) : (
          <Sun size={16} className="text-amber-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
