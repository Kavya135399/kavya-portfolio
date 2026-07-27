import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'react-hot-toast';
import { AuroraBackground } from './components/canvas/AuroraBackground';
import { CustomCursor } from './components/ui/CustomCursor';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { ResumeModal } from './components/ui/ResumeModal';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Certificates } from './components/sections/Certificates';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    (window as any).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-purple-500/30 selection:text-white font-sans antialiased">
      {/* Toast Notification Container */}
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Initial Loading Screen */}
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Dynamic Aurora Ambient Background */}
          <AuroraBackground />

          {/* Navbar Header */}
          <Navbar onOpenResume={() => setResumeOpen(true)} />

          {/* Main Content Sections */}
          <main className="relative space-y-0">
            <Hero onOpenResume={() => setResumeOpen(true)} />
            <About onOpenResume={() => setResumeOpen(true)} />
            <Skills />
            <Projects />
            <Experience />
            <Certificates />
            <Services />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Printable/Downloadable Resume Modal */}
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        </>
      )}
    </div>
  );
}

export default App;
