import React, { useState, useEffect } from 'react';
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
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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
    <section id="projects" className="relative py-28 bg-[#050505] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
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
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase"
          >
            Crafted <span className="gradient-text-neon">Projects</span>
          </motion.h2>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
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
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
          </div>
        </div>

        {/* Projects 3D Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 group flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090e] via-transparent to-transparent opacity-90"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 border border-white/20 text-cyan-300 text-xs font-mono backdrop-blur-md">
                  {project.category}
                </div>

                {/* Quick View Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-2xl bg-white/10 hover:bg-cyan-500/30 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 flex items-center space-x-1.5 text-xs font-mono shadow-lg"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Inspect Spec</span>
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-400 mb-3">{project.subtitle}</p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 text-[11px] font-mono border border-white/10"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold hover:opacity-90 transition-opacity flex items-center space-x-1.5 shadow-md shadow-cyan-500/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30 text-xs font-semibold transition-colors flex items-center space-x-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern High-End Project Inspection Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[88vh] bg-[#0c0c14] border border-white/15 rounded-[28px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col my-auto"
            >
              {/* Header Bar: Clean Header with Title & Close Button */}
              <div className="p-6 border-b border-white/10 bg-[#07070d] flex items-start justify-between shrink-0">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-bold">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-1">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xs text-purple-400 font-mono font-semibold">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-105 shrink-0"
                  title="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div
                data-lenis-prevent
                data-lenis-prevent-wheel
                data-lenis-prevent-touch
                onWheel={(e) => e.stopPropagation()}
                className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 max-h-[calc(88vh-180px)] overscroll-contain text-slate-200"
              >
                {/* Project Image Frame Showcase */}
                <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-inner">
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

              {/* Fixed Footer Toolbar */}
              <div className="p-5 border-t border-white/10 bg-[#07070d] flex items-center justify-end space-x-3 shrink-0">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30 text-xs font-bold transition-all flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.liveDemoUrl && (
                  <a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white text-xs font-extrabold flex items-center space-x-2 shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live App</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
