import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, FolderGit2, Linkedin, Github, Mail, ArrowDown } from 'lucide-react';
import { HeroCanvas } from '../canvas/HeroCanvas';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* 3D Canvas Visual Engine */}
      <HeroCanvas />

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for High-Impact Projects & Hire</span>
        </motion.div>

        {/* Hello I'm Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl font-mono text-purple-400 tracking-wider mb-2"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase"
        >
          <span className="gradient-text-neon">
            KAVYA DAVE
          </span>
        </motion.h1>

        {/* Dynamic Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-12 flex items-center justify-center mb-8"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-mono text-slate-300 tracking-wide font-medium">
            {displayText}
            <span className="inline-block w-0.5 h-7 ml-1 bg-cyan-400 animate-pulse"></span>
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {/* Hire Me */}
          <a
            href="#contact"
            className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(217,70,239,0.7)] transition-all transform hover:-translate-y-1 flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>Hire Me</span>
          </a>

          {/* Download Resume */}
          <button
            onClick={onOpenResume}
            className="px-8 py-4 rounded-2xl border border-purple-500/40 bg-purple-950/30 text-purple-200 font-bold text-sm hover:bg-purple-900/50 hover:border-purple-400 transition-all backdrop-blur-md transform hover:-translate-y-1 flex items-center space-x-2 shadow-lg shadow-purple-500/10"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>

          {/* View Projects */}
          <a
            href="#projects"
            className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-slate-200 font-bold text-sm hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-md transform hover:-translate-y-1 flex items-center space-x-2"
          >
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span>View Projects</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center space-x-4 mb-12"
        >
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-purple-400 hover:border-purple-400/50 transition-all hover:scale-110"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.socials.email}
            className="p-3 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-pink-400 hover:border-pink-400/50 transition-all hover:scale-110"
            title="Gmail (kavyaofficial.it@gmail.com)"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-flex items-center space-x-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <span>SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.a>
      </div>
    </section>
  );
};
