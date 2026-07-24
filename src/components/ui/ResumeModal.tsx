import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, Award, BookOpen, Code, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const content = `====================================================
KAVYA DAVE - CURRICULUM VITAE
AI & Machine Learning Engineer | MERN Stack Developer
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.socials.github}
LinkedIn: ${PERSONAL_INFO.socials.linkedin}
====================================================

ACADEMIC QUALIFICATIONS:
- Master of Science in Information Technology (M.Sc. IT)
  K.S. School of Business Management & Information Technology, Gujarat University
  (Currently Pursuing – 4th Year, 2023 – Present)

- Higher Secondary Certificate (HSC)
  Swaminarayan Vidhya Laya (Completed May 2023 - 95.87 Percentile Rank)

- Secondary School Certificate (SSC)
  Swaminarayan Vidhya Laya (Completed May 2021 - 94.15 Percentile Rank)

TECHNICAL CAPABILITIES:
- Languages: Python, Java, JavaScript, PHP, C
- AI/ML & Data Science: Machine Learning, Scikit-Learn, TensorFlow, Pandas, NumPy
- Frontend Development: React.js, HTML5, CSS3, Tailwind CSS, JavaScript
- Backend Development: Node.js, Express.js, Flask
- Databases & Tools: MongoDB, MySQL, Git, GitHub, Docker, Vercel, Render

FEATURED PROJECTS:
1. Om Shanti Travels (Car Rental Website)
   - Live Demo: https://car-rental-website-1-mnnp.onrender.com/
   - GitHub: https://github.com/Kavya135399/car_rental_website
2. OncoDetect (AI Breast Cancer Prediction System)
   - GitHub: https://github.com/Kavya135399/Breast-Cancer-Prediction
3. PlaceHub (Campus Recruitment & Placement Portal)
   - GitHub: https://github.com/Kavya135399/Placement-Management-System

VERIFIED CERTIFICATIONS:
- Diploma in Multilingual Computer Programming (DMCP)
  Issued by C-DAC (Ministry of Electronics & IT, Govt. of India) - Grade 'A'
====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Kavya_Dave_Resume.txt';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-dark-card border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Sticky Header Toolbar */}
            <div className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-[#090912]/95 backdrop-blur-xl shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 font-bold">
                  KD
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-white tracking-wide">Curriculum Vitae</h3>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <button
                  onClick={handlePrint}
                  className="px-3 py-2 rounded-xl border border-slate-700 bg-slate-800/80 text-slate-300 hover:text-white hover:border-slate-500 transition-colors flex items-center text-xs font-medium space-x-1.5 min-h-[44px]"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Print</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity flex items-center text-xs space-x-1.5 shadow-lg shadow-cyan-500/20 min-h-[44px]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>

                {/* 48px x 48px Touch Target Sticky Close (✕) Button */}
                <button
                  onClick={onClose}
                  aria-label="Close Resume Modal"
                  className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-rose-500/30 text-white border border-white/20 backdrop-blur-md transition-all flex items-center justify-center shrink-0 active:scale-95 shadow-xl ml-1"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Printable Resume Content */}
            <div
              data-lenis-prevent
              data-lenis-prevent-wheel
              data-lenis-prevent-touch
              className="p-6 md:p-10 overflow-y-auto space-y-8 font-sans bg-[#09090e] text-slate-200 flex-1 max-h-[calc(90vh-70px)]"
            >
              {/* Personal Banner */}
              <div className="border-b border-slate-800 pb-6">
                <h1 className="text-3xl font-extrabold text-white tracking-tight gradient-text">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-cyan-400 font-medium text-lg mt-1">
                  {PERSONAL_INFO.tagline}
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-400">
                  <div className="flex items-center space-x-1">
                    <Mail className="w-3.5 h-3.5 text-purple-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-3.5 h-3.5 text-pink-400" />
                    <span>{PERSONAL_INFO.education}</span>
                  </div>
                </div>
              </div>

              {/* Bio Summary */}
              <div>
                <h2 className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-2 flex items-center space-x-2">
                  <span>Professional Summary</span>
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-2xl border border-slate-800/80">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-3 flex items-center space-x-2">
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span>Technical Competencies</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SKILL_CATEGORIES.map((cat, idx) => (
                    <div key={idx} className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/60">
                      <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
                        {cat.title}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((s, sIdx) => (
                          <span key={sIdx} className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 text-slate-200 border border-slate-700/60">
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience & Education */}
              <div>
                <h2 className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-3 flex items-center space-x-2">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span>Education & Experience</span>
                </h2>
                <div className="space-y-4">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                        <h4 className="font-bold text-white text-base">{exp.role}</h4>
                        <span className="text-xs text-purple-400 font-mono">{exp.period}</span>
                      </div>
                      <p className="text-xs text-cyan-400 font-medium mb-2">{exp.organization}</p>
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                        {exp.description.map((desc, dIdx) => (
                          <li key={dIdx}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
