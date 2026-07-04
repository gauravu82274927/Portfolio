import { useState } from "react";
import { AnimatePresence } from "motion/react";

import GlowBg from "./components/GlowBg";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ResumeModal from "./components/ResumeModal";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import EducationSection from "./sections/EducationSection";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        ) : (
          <div className="relative min-h-screen selection:bg-accent/30 selection:text-white" id="portfolio-app-root">
            {/* Scroll reading bar */}
            <ScrollProgress />

            {/* Custom follower cursor */}
            <CustomCursor />

            {/* Ambient micro-animated visual mesh backdrops */}
            <GlowBg />

            {/* Interactive Sticky Header */}
            <Navbar onOpenResume={() => setIsResumeOpen(true)} />

            {/* Core Content Layers */}
            <main className="relative z-10">
              <Hero onOpenResume={() => setIsResumeOpen(true)} />
              <About />
              <Skills />
              <Projects />
              <Achievements />
              <EducationSection />
              <Contact />
            </main>

            {/* Elegant Sticky footer */}
            <Footer />

            {/* Core utilities */}
            <ThemeToggle />

            {/* High-fidelity full resume sheet modal */}
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

