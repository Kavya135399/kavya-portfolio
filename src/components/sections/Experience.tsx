import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, Building2, CheckCircle2, Sparkles, Trophy, BookOpen } from 'lucide-react';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  statusBadge: string;
  period: string;
  percentileRank?: string;
  badgeType: 'pursuing' | 'achievement';
  description: string;
  highlights: string[];
}

export const Experience: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      id: "msc-it",
      degree: "Master of Science in Information Technology (M.Sc. IT)",
      institution: "K.S. School of Business Management & Information Technology",
      university: "Gujarat University",
      statusBadge: "🟢 Currently Pursuing – 4th Year",
      badgeType: "pursuing",
      period: "2023 – Present",
      description: "Currently pursuing a Master of Science in Information Technology with a strong focus on Artificial Intelligence, Machine Learning, Full Stack Web Development, Cloud Computing, Database Management Systems, Software Engineering, and Modern Web Technologies. Continuously developing practical skills by building real-world applications and AI-powered solutions.",
      highlights: [
        "Artificial Intelligence",
        "Machine Learning",
        "Full Stack Development",
        "React.js",
        "Node.js",
        "MongoDB",
        "Python",
        "Cloud Computing"
      ]
    },
    {
      id: "hsc",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Swaminarayan Vidhya Laya",
      statusBadge: "🏅 95.87 Percentile Rank",
      badgeType: "achievement",
      period: "Completed May 2023",
      percentileRank: "95.87 PR",
      description: "Successfully completed Higher Secondary education with outstanding academic performance. Built a strong foundation in Mathematics, Computer Science, Logical Thinking, and Analytical Problem Solving.",
      highlights: [
        "Mathematics",
        "Computer Science",
        "Logical Thinking",
        "Analytical Problem Solving"
      ]
    },
    {
      id: "ssc",
      degree: "Secondary School Certificate (SSC)",
      institution: "Swaminarayan Vidhya Laya",
      statusBadge: "🏅 94.15 Percentile Rank",
      badgeType: "achievement",
      period: "Completed May 2021",
      percentileRank: "94.15 PR",
      description: "Completed Secondary School education with excellent academic performance. Developed strong fundamentals in Science, Mathematics, Communication, and Problem Solving.",
      highlights: [
        "Science",
        "Mathematics",
        "Communication",
        "Problem Solving"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-12 sm:py-16 md:py-20 bg-[#050505] text-white overflow-hidden selection:bg-purple-500/30 font-sans scroll-mt-[80px]">
      {/* Background Mesh Pattern & Aurora Glow Circles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-32 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 text-xs font-mono shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>ACADEMIC JOURNEY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase"
          >
            Education <span className="gradient-text-neon">Timeline</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed font-sans"
          >
            "My academic journey reflects a strong commitment to technology, software development, artificial intelligence, and continuous learning."
          </motion.p>
        </div>

        {/* Vertical Timeline Axis */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-8 lg:ml-12 space-y-12">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-12"
            >
              {/* Glowing Bullet Marker Node */}
              <div className="absolute -left-[21px] top-1.5 w-10 h-10 rounded-2xl bg-[#080810] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] group">
                <GraduationCap className="w-5 h-5 text-cyan-300" />
              </div>

              {/* Glassmorphism Education Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-card p-6 sm:p-8 rounded-[28px] border border-white/10 bg-[#0c0c14]/90 backdrop-blur-2xl shadow-2xl space-y-6 hover:border-cyan-500/40 transition-all group"
              >
                {/* Card Top Row: Status Badge & Period */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-md ${
                      edu.badgeType === 'pursuing'
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                        : 'bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                    }`}
                  >
                    <span>{edu.statusBadge}</span>
                  </span>

                  {/* Duration Period */}
                  <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-xl">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree & Institution Header */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-sans">
                    <div className="flex items-center space-x-1.5 text-slate-200 font-semibold">
                      <Building2 className="w-4 h-4 text-purple-400" />
                      <span>{edu.institution}</span>
                    </div>

                    {edu.university && (
                      <span className="text-slate-400 font-mono text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                        {edu.university}
                      </span>
                    )}
                  </div>
                </div>

                {/* Percentile Rank Highlight Box (if present) */}
                {edu.percentileRank && (
                  <div className="inline-flex items-center space-x-3 p-3 rounded-2xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-transparent border border-amber-500/30 text-amber-300">
                    <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Academic Score</div>
                      <div className="text-base font-extrabold font-mono text-amber-300">{edu.percentileRank}</div>
                    </div>
                  </div>
                )}

                {/* Description Paragraph */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                  {edu.description}
                </p>

                {/* Key Highlights / Subjects Badge Cloud */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold flex items-center space-x-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>KEY HIGHLIGHTS & CORE SUBJECTS</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((item, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-mono hover:text-white hover:border-purple-400/40 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
