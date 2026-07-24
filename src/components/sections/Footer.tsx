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
    <footer className="relative bg-[#030305] text-slate-400 py-4 sm:py-5 border-t border-white/10 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 sm:gap-4 text-xs font-mono">
          
          {/* Brand, Monogram & Copyright */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shadow-sm shadow-cyan-500/20">
                <div className="w-full h-full bg-[#07070a] rounded-[6px] flex items-center justify-center font-black text-cyan-400 text-[10px]">
                  KD
                </div>
              </div>
              <span className="text-xs font-extrabold text-white tracking-wider font-sans">
                KAVYA DAVE
              </span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="text-[11px] text-slate-400">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          {/* Visitor Counter, Social Channels & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Visitor Counter Badge */}
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-cyan-500/20 text-[11px] text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.12)]">
              <Eye className="w-3 h-3 text-purple-400 animate-pulse" />
              <span>Visitors: {visitorCount.toLocaleString()}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-1.5">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-purple-400 hover:border-purple-400/40 transition-all hover:scale-105"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-400/40 transition-all hover:scale-105"
                title="Gmail (kavyaofficial.it@gmail.com)"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Compact Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all flex items-center space-x-1 text-[11px] font-mono shadow-sm"
              title="Scroll to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 text-cyan-400" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
