import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing 3D Visual Engine...');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const statuses = [
      'Initializing 3D Visual Engine...',
      'Compiling AI/ML Shaders...',
      'Loading Full-Stack Modules...',
      'Optimizing Physics Engine...',
      'Ready for Launch...'
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 5;
        const statusIdx = Math.min(Math.floor((next / 100) * statuses.length), statuses.length - 1);
        setStatusText(statuses[statusIdx]);
        return Math.min(next, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white select-none"
        >
          {/* Background Ambient Glow */}
          <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

          {/* Glowing Monogram Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="w-24 h-24 rounded-3xl border border-cyan-500/40 bg-dark-card/80 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.3)]">
              <span className="text-4xl font-black gradient-text-neon tracking-tighter">
                KD
              </span>
            </div>
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30 blur animate-pulse -z-10"></div>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xl font-bold tracking-widest text-slate-200 mb-2 uppercase"
          >
            KAVYA DAVE
          </motion.h1>

          <p className="text-xs text-cyan-400 font-mono tracking-wider mb-8">
            {statusText}
          </p>

          {/* Progress Bar Container */}
          <div className="w-64 md:w-80 h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5 mb-4 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_#06b6d4]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Percentage Counter */}
          <div className="text-sm font-mono text-slate-400">
            [ <span className="text-white font-bold">{progress}%</span> ]
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
