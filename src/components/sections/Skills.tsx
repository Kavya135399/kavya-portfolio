import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layout, Server, Database, Brain, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const filteredCategories = activeTab === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === activeTab);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming': return Terminal;
      case 'Frontend': return Layout;
      case 'Backend': return Server;
      case 'Databases': return Database;
      case 'AI & Data Science': return Brain;
      case 'Tools & DevOps': return Wrench;
      default: return Cpu;
    }
  };

  return (
    <section id="skills" className="relative py-16 sm:py-28 bg-[#050505] overflow-hidden scroll-mt-[90px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs font-mono mb-3"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase"
          >
            Skills & <span className="gradient-text-neon">Technologies</span>
          </motion.h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, groupIdx) => {
            const Icon = getCategoryIcon(catGroup.title);
            return (
              <motion.div
                key={catGroup.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-3xl border border-white/10 relative overflow-hidden group"
              >
                {/* Background Shimmer Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>

                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {catGroup.title}
                  </h3>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  {catGroup.skills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5 shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIdx * 0.1 }}
                          className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
