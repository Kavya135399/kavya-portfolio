import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white p-6 relative overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 max-w-lg"
      >
        <div className="text-9xl font-black gradient-text-neon tracking-tighter mb-4">
          404
        </div>
        <h2 className="text-2xl font-bold text-slate-200 mb-4">
          Quantum Portal Malfunction
        </h2>
        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          The requested coordinate does not exist in this dimensional matrix. Return to baseline portfolio core.
        </p>

        <a
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </a>
      </motion.div>
    </div>
  );
};
