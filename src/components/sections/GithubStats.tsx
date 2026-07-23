import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitFork, Star, Github, Activity, Flame } from 'lucide-react';

export const GithubStats: React.FC = () => {
  // Generate mock contribution grid matrix (52 weeks x 7 days)
  const contributionGrid = useMemo(() => {
    const grid = [];
    for (let i = 0; i < 364; i++) {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.85) level = 4;
      else if (rand > 0.65) level = 3;
      else if (rand > 0.45) level = 2;
      else if (rand > 0.25) level = 1;
      grid.push(level);
    }
    return grid;
  }, []);

  const getCellColor = (level: number) => {
    switch (level) {
      case 4: return 'bg-cyan-400 shadow-[0_0_8px_#06b6d4]';
      case 3: return 'bg-purple-500 shadow-[0_0_6px_#8b5cf6]';
      case 2: return 'bg-purple-800';
      case 1: return 'bg-slate-800';
      default: return 'bg-slate-900/60 border border-slate-800/40';
    }
  };

  return (
    <section className="relative py-20 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
          {/* Top Info Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">GitHub Contributions Activity</h3>
                <p className="text-xs text-slate-400 font-mono">1,480+ total commits in the past year</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-cyan-300">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>34 Day Streak</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-purple-300">
                <Activity className="w-4 h-4 text-purple-400" />
                <span>Top 5% Contributor</span>
              </div>
            </div>
          </div>

          {/* Contribution Heatmap Matrix */}
          <div className="overflow-x-auto pb-4">
            <div className="grid grid-rows-7 grid-flow-col gap-1 min-w-[700px]">
              {contributionGrid.map((level, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-[3px] transition-all hover:scale-125 ${getCellColor(level)}`}
                  title={`Level ${level} activity`}
                />
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end space-x-2 text-[11px] text-slate-400 font-mono mt-4">
            <span>Less</span>
            <div className="w-3 h-3 rounded-[3px] bg-slate-900 border border-slate-800" />
            <div className="w-3 h-3 rounded-[3px] bg-slate-800" />
            <div className="w-3 h-3 rounded-[3px] bg-purple-800" />
            <div className="w-3 h-3 rounded-[3px] bg-purple-500" />
            <div className="w-3 h-3 rounded-[3px] bg-cyan-400" />
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};
