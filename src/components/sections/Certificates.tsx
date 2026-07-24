import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award, ShieldCheck, CheckCircle2, X, ExternalLink, Download,
  Brain, Code2, Cloud, Sparkles, BookOpen, Layers, Eye
} from 'lucide-react';

export const Certificates: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Single Real C-DAC Certificate Details
  const singleCertificate = {
    id: "cdac-dmcp",
    title: "Diploma in Multilingual Computer Programming (DMCP)",
    recipient: "Dave Kavya Hirenbhai",
    issuedBy: "Centre for Development of Advanced Computing (C-DAC)",
    ministry: "Ministry of Electronics & IT, Govt. of India",
    programme: "PACE (Programme for Advancing Computer Education)",
    institute: "Roman Technology, New Ranip",
    training: "144 Hours of Training",
    duration: "Jun-2023 to Nov-2023",
    grade: "Grade 'A'",
    issueDate: "16-01-2024",
    place: "Pune",
    certNo: "P036764",
    regNo: "GNR04Ju20712454",
    verificationBadge: "✓ Verified C-DAC Certificate",
    description: "Successfully completed the Diploma in Multilingual Computer Programming under the PACE initiative by C-DAC (Government of India). The program covered 144 hours of rigorous hands-on training in software development, multilingual computing, programming logic, and database management.",
    image: "/certificates/cdac-cert.jpg"
  };

  // 4 Currently Learning Cards
  const learningCards = [
    {
      id: "ai",
      icon: Brain,
      title: "Artificial Intelligence",
      color: "from-purple-500/20 via-pink-500/10 to-transparent",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
      skills: ["Deep Learning", "Computer Vision", "NLP", "Generative AI"]
    },
    {
      id: "ml",
      icon: Sparkles,
      title: "Machine Learning",
      color: "from-cyan-500/20 via-blue-500/10 to-transparent",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400",
      skills: ["TensorFlow", "Scikit-Learn", "Model Optimization", "Predictive Analytics"]
    },
    {
      id: "mern",
      icon: Code2,
      title: "MERN Stack",
      color: "from-pink-500/20 via-rose-500/10 to-transparent",
      borderColor: "border-pink-500/30",
      iconColor: "text-pink-400",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"]
    },
    {
      id: "cloud",
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-blue-500/20 via-indigo-500/10 to-transparent",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
      skills: ["Git", "GitHub", "Docker", "CI/CD", "Vercel", "Render"]
    }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = singleCertificate.image;
    link.download = 'CDAC_DMCP_Certificate_Kavya_Dave.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certificates" className="relative py-24 bg-[#050505] text-white overflow-hidden selection:bg-purple-500/30 font-sans">
      {/* Background Mesh Pattern & Ambient Blur Circles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 text-xs font-mono shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
            <Award className="w-4 h-4 text-purple-400" />
            <span>PROFESSIONAL CREDENTIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase"
          >
            🏆 Certifications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base font-sans"
          >
            Professional Certifications & Continuous Learning
          </motion.p>
        </div>


        {/* ======================================================== */}
        {/* SINGLE REAL CERTIFICATE SHOWCASE CARD (CENTERED ~700px) */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Animated Glowing Ambient Halo */}
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 opacity-50 blur-xl group-hover:opacity-90 transition duration-700"></div>

            {/* Glass Container */}
            <div className="relative rounded-[28px] glass-card overflow-hidden border border-white/15 bg-[#0c0c14]/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              
              {/* LEFT: Certificate Image Frame */}
              <div className="w-full md:w-5/12 shrink-0 space-y-3">
                <div
                  onClick={() => setModalOpen(true)}
                  className="relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/15 bg-[#07070e] p-2 shadow-inner group/img cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={singleCertificate.image}
                    alt={singleCertificate.title}
                    className="w-full h-full object-contain object-center group-hover/img:scale-[1.03] transition-transform duration-500 rounded-xl"
                  />
                  
                  {/* Hover Overlay Trigger */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center space-x-2 text-white text-xs font-mono backdrop-blur-xs rounded-2xl">
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <span>Click for Fullscreen</span>
                  </div>
                </div>

                {/* Verification Pill */}
                <div className="flex items-center justify-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{singleCertificate.verificationBadge}</span>
                </div>
              </div>

              {/* RIGHT: Certificate Details */}
              <div className="w-full md:w-7/12 space-y-3">
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono border border-purple-500/30">
                    C-DAC PACE Certification
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight pt-1">
                    {singleCertificate.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 font-bold">
                    {singleCertificate.issuedBy}
                  </p>
                </div>

                {/* Meta Attributes Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
                  <div>
                    <span className="text-slate-500">Programme:</span>
                    <p className="font-semibold text-slate-200">{singleCertificate.programme}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Institute:</span>
                    <p className="font-semibold text-slate-200">{singleCertificate.institute}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Duration & Training:</span>
                    <p className="font-semibold text-slate-200">{singleCertificate.duration} ({singleCertificate.training})</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Grade & Date:</span>
                    <p className="font-semibold text-amber-300">{singleCertificate.grade} • {singleCertificate.issueDate}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-1">
                  {singleCertificate.description}
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col xs:flex-row items-center gap-3 w-full">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full xs:w-auto justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold flex items-center space-x-2 shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>

                  <button
                    onClick={handleDownload}
                    className="w-full xs:w-auto justify-center px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30 text-xs font-semibold flex items-center space-x-2 transition-all"
                  >
                    <Download className="w-4 h-4 text-cyan-400" />
                    <span>Download Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* ======================================================== */}
        {/* CURRENTLY LEARNING SECTION (4 ANIMATED CARDS) */}
        {/* ======================================================== */}
        <div className="space-y-4 pt-2">
          <div className="text-center space-y-1">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>CONTINUOUS LEARNING & EXPANSION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              📚 Currently Learning
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {learningCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`glass-card p-5 sm:p-6 rounded-[24px] border ${card.borderColor} bg-gradient-to-br ${card.color} backdrop-blur-xl shadow-xl transition-all space-y-3 flex flex-col justify-between`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-2xl bg-white/10 ${card.iconColor} border border-white/10`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-extrabold text-white">{card.title}</h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {card.skills.map((sk, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] font-mono hover:text-cyan-300 transition-colors"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>


        {/* ======================================================== */}
        {/* ELEGANT CENTERED QUOTE */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-2 max-w-3xl mx-auto"
        >
          <div className="px-6 py-5 sm:px-8 sm:py-6 rounded-[24px] glass-card border border-white/10 bg-[#0c0c14]/80 backdrop-blur-xl shadow-2xl relative">
            <p className="text-slate-300 text-sm sm:text-base italic font-sans leading-relaxed">
              "Technology evolves every day, and so do I. I continuously learn, build, and innovate to become a better AI/ML and Full Stack Developer."
            </p>
          </div>
        </motion.div>

      </div>

      {/* Fullscreen Certificate Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#0c0c14] border border-white/20 rounded-[28px] overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-sm sm:text-base font-bold text-white">{singleCertificate.title}</h4>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="w-full max-h-[75vh] overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center p-2">
                <img
                  src={singleCertificate.image}
                  alt={singleCertificate.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-cyan-400 font-bold">{singleCertificate.issuedBy}</span>
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Image</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
