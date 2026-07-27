import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Search, Sparkles, CheckCircle2, X, Eye, Layers } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Web App', 'AI/ML'];

  // Lock background scrolling when Inspect modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techBadges.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 bg-[#050505] overflow-hidden font-sans scroll-mt-[80px] w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 w-full max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 text-xs font-mono mb-3"
          >
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>FEATURED PORTFOLIO WORK</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase break-words"
          >
            Crafted <span className="gradient-text-neon">Projects</span>
          </motion.h2>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-10 w-full max-w-full">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64 max-w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs focus:outline-none focus:border-cyan-400/50 transition-colors box-border"
            />
          </div>
        </div>

        {/* Projects 3D Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-full">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 group flex flex-col justify-between h-full shadow-xl hover:border-cyan-500/40 transition-all duration-300 w-full max-w-full box-border"
            >
              {/* Responsive 16:9 Image Preview Container */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#07070e] border-b border-white/10 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top sm:group-hover:scale-105 transition-transform duration-500 max-w-full"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 border border-white/20 text-cyan-300 text-[11px] font-mono backdrop-blur-md font-bold shadow-md">
                  {project.category}
                </div>

                {/* Quick View Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/70 hover:bg-cyan-500/30 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 flex items-center space-x-1.5 text-[11px] font-mono shadow-lg"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Inspect Spec</span>
                </button>
              </div>

              {/* Content Body */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between w-full max-w-full overflow-hidden box-border">
                <div className="w-full max-w-full">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1 group-hover:text-cyan-300 transition-colors break-words max-w-full">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-400 mb-3 break-words max-w-full">{project.subtitle}</p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-6 line-clamp-3 break-words max-w-full">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6 max-w-full overflow-hidden">
                    {project.techBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 text-[11px] font-mono border border-white/10 break-words max-w-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links Footer - ONLY Repository (GitHub) Button */}
                <div className="pt-4 border-t border-white/10 w-full max-w-full">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center min-h-[48px] px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 hover:from-cyan-500 hover:via-purple-600 hover:to-pink-500 text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-transparent text-xs font-bold transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 max-w-full box-border"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern High-End Project Inspection Modal via React Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div
              data-lenis-prevent
              data-lenis-prevent-wheel
              data-lenis-prevent-touch
              className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-2xl overflow-y-auto font-sans max-w-full w-full"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[calc(100vw-24px)] sm:max-w-3xl max-h-[88vh] bg-[#0c0c14] border border-white/15 rounded-[20px] sm:rounded-3xl overflow-hidden overflow-x-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col my-auto mt-14 sm:mt-auto font-sans box-border mx-auto"
              >
                {/* Sticky Header Bar: Clean Header with Title & Fixed 48x48px Close (✕) Button */}
                <div className="sticky top-0 z-50 p-4 sm:p-6 border-b border-white/10 bg-[#07070d]/95 backdrop-blur-xl flex items-center justify-between shrink-0">
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-bold">
                        {selectedProject.category}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight pt-0.5">
                      {selectedProject.title}
                    </h2>
                    <p className="text-xs text-purple-400 font-mono font-semibold">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  {/* Touch-Friendly 48px x 48px Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close Project Inspection Modal"
                    className="w-12 h-12 rounded-2xl bg-white/15 hover:bg-rose-500/40 text-white border border-white/30 backdrop-blur-md transition-all flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 shadow-xl ml-2 focus:ring-2 focus:ring-rose-400 focus:outline-none"
                    title="Close Modal"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Scrollable Modal Content */}
                <div
                  data-lenis-prevent
                  data-lenis-prevent-wheel
                  data-lenis-prevent-touch
                  onWheel={(e) => e.stopPropagation()}
                  className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 flex-1 max-h-[calc(85vh-140px)] overscroll-contain text-slate-200"
                >
                  {/* Project Image Frame Showcase */}
                  <div className="relative w-full aspect-[16/9] sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-inner">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top filter brightness-100 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14]/60 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Overview Section */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-widest font-bold flex items-center space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>PROJECT OVERVIEW & ARCHITECTURE</span>
                    </h4>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase text-purple-400 tracking-widest font-bold">
                      KEY FEATURES & FUNCTIONALITIES
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start space-x-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-200 hover:border-purple-500/30 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase text-slate-400 tracking-widest font-bold">
                      TECHS & TOOLS USED
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techBadges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-3.5 py-1.5 rounded-xl bg-purple-500/15 text-purple-300 text-xs font-mono border border-purple-500/30"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Fixed Footer Toolbar - ONLY Repository (GitHub) Button */}
                <div className="p-5 border-t border-white/10 bg-[#07070d] flex items-center justify-end shrink-0">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto justify-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white text-xs font-extrabold flex items-center space-x-2 shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository (GitHub)</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};
