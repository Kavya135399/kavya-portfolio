import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Cpu, Atom, Server, Sparkles, Briefcase, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../../data/portfolioData';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'BrainCircuit': return BrainCircuit;
      case 'Cpu': return Cpu;
      case 'Atom': return Atom;
      case 'Server': return Server;
      case 'Briefcase': return Briefcase;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs font-mono mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>WHAT I OFFER</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase"
          >
            Specialized <span className="gradient-text-neon">Services</span>
          </motion.h2>
        </div>

        {/* Services Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => {
            const Icon = getServiceIcon(srv.icon);
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Glow Backdrop */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 mb-6 shadow-lg shadow-cyan-500/20">
                    <div className="w-full h-full bg-dark-bg rounded-[14px] flex items-center justify-center text-cyan-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                  <a
                    href="#contact"
                    className="text-xs font-mono text-cyan-400 group-hover:text-purple-400 transition-colors flex items-center space-x-1"
                  >
                    <span>Request Proposal →</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
