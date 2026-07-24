import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, Brain, Code2, Cloud, Sparkles, FolderGit2, Award, Clock,
  Cpu, Terminal, Linkedin, Github, Mail, Send, FileText, CheckCircle2,
  Calendar, Layers, Zap, Rocket
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface AboutProps {
  onOpenResume?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  // 4 Large Premium Feature Cards Data
  const largeFeatureCards = [
    {
      id: "education",
      icon: GraduationCap,
      title: "Education",
      subtitle: "MSc Information Technology",
      description: "Advanced Master's Degree specializing in Artificial Intelligence, Machine Learning algorithms, and Cloud Computing architecture.",
      color: "from-cyan-500/20 via-blue-500/10 to-transparent",
      borderColor: "border-cyan-500/30",
      glowColor: "shadow-[0_0_30px_rgba(6,182,212,0.15)]",
      iconColor: "text-cyan-400",
      skills: ["MSc IT", "Artificial Intelligence", "Machine Learning", "Cloud Systems"]
    },
    {
      id: "aiml",
      icon: Brain,
      title: "AI & Machine Learning",
      subtitle: "Neural Networks & Predictive Analytics",
      description: "Engineering intelligent machine learning models, computer vision systems, and deep learning algorithms for real-world diagnostic applications.",
      color: "from-purple-500/20 via-pink-500/10 to-transparent",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      iconColor: "text-purple-400",
      skills: ["Python", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "OpenCV", "Deep Learning"]
    },
    {
      id: "fullstack",
      icon: Code2,
      title: "Full Stack Development",
      subtitle: "Enterprise MERN Web Architecture",
      description: "Building high-performance, responsive web applications using React.js, RESTful Node/Express backends, and robust MongoDB databases.",
      color: "from-pink-500/20 via-rose-500/10 to-transparent",
      borderColor: "border-pink-500/30",
      glowColor: "shadow-[0_0_30px_rgba(244,63,94,0.15)]",
      iconColor: "text-pink-400",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
      id: "devops",
      icon: Cloud,
      title: "Cloud & DevOps",
      subtitle: "Continuous Integration & Deployment",
      description: "Deploying production-ready applications with automated CI/CD pipelines, containerization, and modern cloud platforms.",
      color: "from-blue-500/20 via-indigo-500/10 to-transparent",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      iconColor: "text-blue-400",
      skills: ["Git", "GitHub", "Docker", "Firebase", "Render", "Vercel", "Netlify", "CI/CD"]
    }
  ];



  // 6 Realistic Stats Cards
  const statistics = [
    { value: "4+", label: "Real-World Projects", color: "text-cyan-400", borderColor: "border-cyan-500/30", icon: FolderGit2 },
    { value: "15+", label: "Programming & Tech", color: "text-purple-400", borderColor: "border-purple-500/30", icon: Cpu },
    { value: "Active", label: "Open Source & Repos", color: "text-pink-400", borderColor: "border-pink-500/30", icon: Terminal },
    { value: "Learning", label: "Skill Development", color: "text-amber-400", borderColor: "border-amber-500/30", icon: Award },
    { value: "AI / ML", label: "Machine Learning & AI", color: "text-emerald-400", borderColor: "border-emerald-500/30", icon: Brain },
    { value: "M.Sc. IT", label: "Currently Pursuing (4th Yr)", color: "text-blue-400", borderColor: "border-blue-500/30", icon: GraduationCap }
  ];

  return (
    <section id="about" className="relative py-32 bg-[#050505] text-white overflow-hidden selection:bg-purple-500/30 font-sans">
      {/* Background Mesh Pattern & Aurora Glow Circles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Spacious Full-Width Container (1400px) */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Balanced Two-Column Layout (LEFT 45% / RIGHT 55%, 80px Gap) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ======================================================== */}
          {/* LEFT COLUMN (45%): FULL BODY PROFILE SHOWCASE & IDENTITY */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8 lg:sticky lg:top-28"
          >
            {/* Image Container with object-fit: contain (No face cropping!) */}
            <div className="relative group w-full max-w-[240px] xs:max-w-[260px] sm:max-w-md lg:max-w-none mx-auto">
              {/* Outer Animated Aurora Glow Halo */}
              <div className="absolute -inset-1.5 rounded-[36px] bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 opacity-60 blur-2xl group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-pulse"></div>

              {/* Glass Frame Container: 280px to 650px height */}
              <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[480px] lg:h-[650px] rounded-[28px] sm:rounded-[32px] glass-card overflow-hidden p-3 sm:p-4 border border-white/10 bg-[#0c0c14]/90 backdrop-blur-2xl shadow-2xl flex flex-col justify-center items-center">
                <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-gradient-to-b from-[#090912] via-[#050508] to-[#0a0a14] flex items-center justify-center p-2">
                  
                  {/* FULL PHOTO DISPLAY with object-contain (No face cropping!) */}
                  <img
                    src="/profile.jpg"
                    alt="Kavya Dave"
                    className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-700 filter brightness-100 contrast-105"
                  />

                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                  {/* Floating Monogram Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#090910]/90 backdrop-blur-xl border border-white/10 text-xs font-mono text-cyan-300 font-bold shadow-lg flex items-center space-x-2">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>KD PORTFOLIO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Identity Card Below Photo */}
            <div className="glass-card p-6 rounded-[28px] border border-white/10 bg-[#0c0c14]/90 backdrop-blur-xl shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-wider">KAVYA DAVE</h3>
                  <p className="text-xs font-mono text-cyan-400 font-bold mt-0.5">AI/ML Engineer • MERN Stack Developer</p>
                </div>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
                  <span>Open to Work</span>
                </span>
              </div>

              {/* Roles Badge List */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">React Developer</span>
                <span className="px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">Python Developer</span>
              </div>

              {/* Social Channels Row */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase font-semibold">CONNECT:</span>
                <div className="flex items-center space-x-3">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-purple-400 hover:border-purple-400/40 hover:scale-110 transition-all"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:scale-110 transition-all"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.email}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-pink-400 hover:border-pink-400/40 hover:scale-110 transition-all"
                    title="Gmail (kavyaofficial.it@gmail.com)"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>


          {/* ======================================================== */}
          {/* RIGHT COLUMN (55%): LARGE HEADING, CARDS, SKILLS & MORE */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-12"
          >
            {/* Header & Subtitle */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 text-xs font-mono shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>ABOUT ME</span>
              </div>

              {/* Large Desktop 52px Title */}
              <h2 className="text-[28px] sm:text-[36px] lg:text-[52px] font-extrabold tracking-tight uppercase leading-tight text-white">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI/ML Engineer</span> • MERN Stack Developer
              </h2>

              {/* Professional Narrative Paragraphs */}
              <div className="max-w-[700px] text-slate-300 text-base sm:text-lg leading-[1.9] font-sans space-y-4 pt-2">
                <p>
                  I am a passionate MSc Information Technology student specializing in Artificial Intelligence, Machine Learning, and Full Stack Web Development. I enjoy building scalable MERN stack applications, AI-powered solutions, and modern user experiences.
                </p>
                <p>
                  I have experience developing intelligent machine learning models, REST APIs, responsive React applications, cloud deployments, and enterprise-level web applications.
                </p>
                <p>
                  I continuously learn new technologies and enjoy solving real-world problems using AI and software engineering. My goal is to contribute to innovative products that create meaningful impact through technology.
                </p>
              </div>
            </div>

            {/* 4 Large Premium Feature Cards */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold flex items-center space-x-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>CORE FEATURE CAPABILITIES</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {largeFeatureCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className={`glass-card p-6 rounded-[28px] border ${card.borderColor} bg-gradient-to-br ${card.color} backdrop-blur-xl ${card.glowColor} transition-all space-y-4 flex flex-col justify-between`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-2xl bg-white/10 ${card.iconColor} border border-white/10`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-base font-extrabold text-white">{card.title}</h4>
                            <p className="text-xs text-slate-400 font-mono">{card.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {card.skills.map((sk, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] font-mono hover:text-cyan-300 transition-colors"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>



          </motion.div>
        </div>


        {/* ======================================================== */}
        {/* STATISTICS SECTION (6 PERFECTLY BALANCED COUNTER CARDS) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-20">
          {statistics.map((st, idx) => {
            const Icon = st.icon;
            const isNumber = /^\d+\+?$/.test(st.value);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`glass-card p-4 rounded-[24px] text-center border ${st.borderColor} bg-[#0c0c14]/90 backdrop-blur-xl shadow-xl transition-all flex flex-col items-center justify-center space-y-1.5 h-36`}
              >
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  <Icon className={`w-4 h-4 ${st.color}`} />
                </div>
                <div className={`font-mono font-extrabold tracking-tight ${isNumber ? 'text-2xl sm:text-3xl text-white' : 'text-xs sm:text-sm font-bold ' + st.color}`}>
                  {st.value}
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold leading-tight max-w-[110px] line-clamp-2">
                  {st.label}
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* ======================================================== */}
        {/* CTA BANNER AT BOTTOM */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-card p-8 sm:p-12 rounded-[32px] border border-white/10 bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-pink-950/40 backdrop-blur-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="text-center sm:text-left space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-mono">
              Ready to collaborate on high-impact AI/ML systems and full-stack web applications.
            </p>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <a
              href="#contact"
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-extrabold text-xs sm:text-sm shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(217,70,239,0.7)] transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <Rocket className="w-4 h-4" />
              <span>Hire Me</span>
            </a>

            <button
              onClick={onOpenResume}
              className="px-7 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-slate-200 hover:text-white font-extrabold text-xs sm:text-sm transition-all flex items-center space-x-2 backdrop-blur-md"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
