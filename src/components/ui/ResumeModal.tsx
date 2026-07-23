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
    const element = document.createElement('a');
    const file = new Blob([
      `KAVYA DAVE - RESUME\n` +
      `AI & Machine Learning Engineer | Full Stack Developer\n` +
      `Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}\n\n` +
      `EDUCATION:\n` +
      `- MSc IT Student (Master of Science in Information Technology)\n\n` +
      `KEY SKILLS:\n` +
      `- Programming: Python, Java, JavaScript, PHP, C\n` +
      `- Frontend: React, HTML, CSS, Tailwind CSS, Bootstrap\n` +
      `- Backend: Node.js, Express.js, Laravel, Flask\n` +
      `- Databases: MongoDB, MySQL, Firebase\n` +
      `- AI/ML: Scikit-Learn, TensorFlow, Data Analysis\n\n` +
      `FEATURED PROJECTS:\n` +
      `- HomeSeva: Full Stack Home Services Platform with PhonePe PG\n` +
      `- Om Shanti Travels: Laravel & MySQL Car Rental Web Application\n` +
      `- Placement Management System: MERN Stack Campus Recruitment Portal\n` +
      `- Breast Cancer Prediction: Machine Learning Medical Diagnostic System\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Kavya_Dave_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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
            {/* Header Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60 backdrop-blur-md shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 font-bold">
                  KD
                </div>
                <h3 className="text-lg font-bold text-white">Curriculum Vitae</h3>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-800/80 text-slate-300 hover:text-white hover:border-slate-500 transition-colors flex items-center text-xs font-medium space-x-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity flex items-center text-xs space-x-1.5 shadow-lg shadow-cyan-500/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
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
