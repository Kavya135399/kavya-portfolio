import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(3850);

  useEffect(() => {
    const STORAGE_KEY = 'kavya_portfolio_visitor_count';
    const baseCount = 3850;
    const storedCount = localStorage.getItem(STORAGE_KEY);

    let currentCount = storedCount ? parseInt(storedCount, 10) : baseCount;
    if (isNaN(currentCount)) currentCount = baseCount;

    // Increment visitor count by +1 on every view/visit
    const updatedCount = currentCount + 1;
    localStorage.setItem(STORAGE_KEY, updatedCount.toString());
    setVisitorCount(updatedCount);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030305] text-slate-400 py-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Monogram */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-[#07070a] rounded-[10px] flex items-center justify-center font-black text-cyan-400 text-xs">
                KD
              </div>
            </div>
            <span className="text-sm font-extrabold text-white tracking-wider">
              KAVYA DAVE
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs font-mono text-cyan-400 font-bold hidden sm:inline">
              AI/ML & MERN Stack Developer
            </span>
          </div>

          {/* Visitor Counter & Social Links */}
          <div className="flex items-center space-x-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-500/20 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Eye className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>Visitors: {visitorCount.toLocaleString()}</span>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-purple-400 hover:border-purple-400/40 transition-all hover:scale-105"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-400/40 transition-all hover:scale-105"
                title="Gmail (kavyaofficial.it@gmail.com)"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Micro Bar */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} KAVYA DAVE. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white font-mono transition-all flex items-center space-x-1.5 text-xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
