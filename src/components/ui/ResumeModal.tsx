import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, Award, BookOpen, Code, Mail, Phone, MapPin, Globe, Github, Linkedin, Briefcase, GraduationCap, Languages, CheckCircle, FileText, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setIsDownloading(true);
    const pdfUrl = '/resume/Kavya_Dave_Resume.pdf';

    fetch(pdfUrl, { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Resume PDF file not found');
        }
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Kavya_Dave_Resume.pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(() => {
        alert('Original Resume PDF file is currently unavailable. Please try again later.');
      })
      .finally(() => {
        setIsDownloading(false);
      });
  };

  const handleOpenNewTab = () => {
    window.open('/resume/Kavya_Dave_Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl font-sans"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0c14] border border-white/15 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col my-auto"
          >
            {/* Sticky Header Toolbar with SINGLE Fixed Close (✕) Button */}
            <div className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#07070d]/95 backdrop-blur-xl shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shadow-md">
                  <div className="w-full h-full bg-[#09090e] rounded-[10px] flex items-center justify-center">
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-xs">
                      KD
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white tracking-wide">Dave Kavya H.</h3>
                  <p className="text-[10px] font-mono text-cyan-400">ATS PDF Resume (4.8 KB)</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Open PDF in New Tab */}
                <button
                  onClick={handleOpenNewTab}
                  className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30 transition-all flex items-center text-xs font-semibold space-x-1.5 min-h-[44px] hover:scale-105 active:scale-95"
                  title="Open PDF in New Tab"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span className="hidden sm:inline">Preview PDF</span>
                </button>

                {/* Download Resume PDF Button */}
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold hover:opacity-95 transition-all flex items-center text-xs space-x-1.5 shadow-lg shadow-cyan-500/20 min-h-[44px] hover:scale-105 active:scale-95 disabled:opacity-75"
                >
                  {isDownloading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </>
                  )}
                </button>

                {/* SINGLE FIXED CLOSE (✕) BUTTON - MIN TOUCH TARGET 48px x 48px */}
                <button
                  onClick={onClose}
                  aria-label="Close Resume Modal"
                  className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-rose-500/30 text-white border border-white/20 backdrop-blur-md transition-all flex items-center justify-center shrink-0 active:scale-95 shadow-xl ml-1"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Resume Content & Preview Container */}
            <div
              data-lenis-prevent
              data-lenis-prevent-wheel
              data-lenis-prevent-touch
              className="p-5 sm:p-8 md:p-10 overflow-y-auto space-y-8 font-sans bg-[#09090e] text-slate-200 flex-1 max-h-[calc(92vh-70px)] selection:bg-purple-500/30 selection:text-white"
            >

              {/* Profile Top Banner */}
              <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/profile.jpg"
                      alt="Dave Kavya H."
                      className="w-16 h-16 rounded-2xl object-cover object-center border-2 border-cyan-400/40 shadow-lg shrink-0"
                    />
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Dave Kavya H.
                      </h1>
                      <p className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                        4th Year M.Sc. IT Student | Full Stack (MERN) Developer | AI/ML Enthusiast
                      </p>
                    </div>
                  </div>

                  {/* Contact Badges */}
                  <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-mono text-slate-300">
                    <a href="mailto:kavyaofficial.it@gmail.com" className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 flex items-center space-x-1.5 hover:text-cyan-300">
                      <Mail className="w-3.5 h-3.5 text-purple-400" />
                      <span>kavyaofficial.it@gmail.com</span>
                    </a>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Ahmedabad, Gujarat, India</span>
                    </span>
                    <a href="https://linkedin.com/in/kavya-dave-baa617406" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 flex items-center space-x-1.5 hover:text-cyan-300">
                      <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>linkedin.com/in/kavya-dave-baa617406</span>
                    </a>
                    <a href="https://github.com/Kavya135399" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 flex items-center space-x-1.5 hover:text-purple-300">
                      <Github className="w-3.5 h-3.5 text-purple-400" />
                      <span>github.com/Kavya135399</span>
                    </a>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="shrink-0 px-3.5 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center space-x-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  <span>Available for Internship | Immediate Joining</span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <span>Professional Summary</span>
                </h2>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Motivated and detail-oriented 4th Year M.Sc. IT student at Gujarat University with a strong foundation in Full Stack Web Development, MERN Stack, and Artificial Intelligence & Machine Learning. Skilled in React.js, Node.js, JavaScript, Python, PHP, MongoDB, and MySQL, with hands-on experience developing scalable web applications and AI/ML solutions. Seeking a Software Developer, MERN Stack Developer, or AI/ML Internship to apply technical skills, gain industry experience, and contribute to innovative projects.
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>Education</span>
                </h2>
                <div className="space-y-3">
                  {/* M.Sc. IT */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <h3 className="font-extrabold text-white text-sm sm:text-base">K.S. School of Business Management & Information Technology</h3>
                      <span className="text-xs font-mono text-cyan-400 font-bold">06/2023 – 05/2028 | Ahmedabad</span>
                    </div>
                    <p className="text-xs font-semibold text-purple-300">Master of Science in Information Technology (M.Sc. IT)</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                      <li>Gujarat University</li>
                      <li>Currently pursuing 4th Year Integrated M.Sc. IT</li>
                      <li>Focus Areas: MERN Stack, Full Stack Development, Artificial Intelligence & Machine Learning</li>
                    </ul>
                  </div>

                  {/* HSC */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <h3 className="font-extrabold text-white text-sm sm:text-base">Swaminarayan Vidyalaya</h3>
                      <span className="text-xs font-mono text-cyan-400 font-bold">06/2022 – 05/2023 | Ahmedabad</span>
                    </div>
                    <p className="text-xs font-semibold text-purple-300">HSC (Higher Secondary Certificate)</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                      <li>Completed Higher Secondary Certificate (HSC)</li>
                      <li>Percentile Rank: <strong className="text-emerald-400">95.87</strong></li>
                    </ul>
                  </div>

                  {/* SSC */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <h3 className="font-extrabold text-white text-sm sm:text-base">Swaminarayan Vidyalaya</h3>
                      <span className="text-xs font-mono text-cyan-400 font-bold">06/2020 – 05/2021 | Ahmedabad</span>
                    </div>
                    <p className="text-xs font-semibold text-purple-300">SSC (Secondary School Certificate)</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                      <li>Completed Secondary School Certificate (SSC)</li>
                      <li>Percentile Rank: <strong className="text-emerald-400">94.15</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase flex items-center space-x-2">
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span>Technical Skills</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <h4 className="text-xs font-bold text-cyan-300 font-mono">React.js</h4>
                    <p className="text-xs text-slate-300">• React Hooks • Components • React Router • Responsive UI</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <h4 className="text-xs font-bold text-purple-300 font-mono">JavaScript</h4>
                    <p className="text-xs text-slate-300">• ES6+ • DOM Manipulation • Async/Await</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <h4 className="text-xs font-bold text-pink-300 font-mono">Git & GitHub</h4>
                    <p className="text-xs text-slate-300">• Version Control • Branching • Repository Management</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <h4 className="text-xs font-bold text-cyan-300 font-mono">Node.js</h4>
                    <p className="text-xs text-slate-300">• Express.js • REST APIs • JWT Authentication</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <h4 className="text-xs font-bold text-purple-300 font-mono">Python</h4>
                    <p className="text-xs text-slate-300">• Flask • Machine Learning Basics • Pandas • NumPy • Scikit-learn</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <h4 className="text-xs font-bold text-pink-300 font-mono">MongoDB</h4>
                    <p className="text-xs text-slate-300">• CRUD Operations • Database Design • Mongoose</p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase flex items-center space-x-2">
                  <Languages className="w-4 h-4 text-emerald-400" />
                  <span>Languages</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-bold text-white block">English</span>
                    <span className="text-slate-400 text-[11px]">• Read, Write, Speak</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-bold text-white block">Hindi</span>
                    <span className="text-slate-400 text-[11px]">• Read, Write, Speak</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-bold text-white block">Gujarati</span>
                    <span className="text-slate-400 text-[11px]">• Read, Write, Speak</span>
                  </div>
                </div>
              </div>

              {/* Key Projects */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase flex items-center space-x-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Key Projects</span>
                </h2>
                <div className="space-y-3">
                  {/* Car Rental Website */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <h3 className="font-extrabold text-white text-sm sm:text-base flex items-center space-x-2">
                        <span>Car Rental Website</span>
                        <a href="https://github.com/Kavya135399/car_rental_website" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-xs">
                          <ExternalLink className="w-3.5 h-3.5 inline" />
                        </a>
                      </h3>
                      <span className="text-xs font-mono text-cyan-400 font-bold">03/2026 – 05/2026</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-400">Technologies: Laravel, PHP, MySQL, Bootstrap</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                      <li>Developed a responsive car rental website using Laravel, PHP, and MySQL.</li>
                      <li>Implemented vehicle booking and admin dashboard.</li>
                      <li>Designed a secure, user-friendly interface.</li>
                    </ul>
                  </div>

                  {/* Placement Portal */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <h3 className="font-extrabold text-white text-sm sm:text-base flex items-center space-x-2">
                        <span>Placement Portal (MERN Stack)</span>
                        <a href="https://github.com/Kavya135399/Placement-Management-System" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-xs">
                          <ExternalLink className="w-3.5 h-3.5 inline" />
                        </a>
                      </h3>
                      <span className="text-xs font-mono text-cyan-400 font-bold">01/2026 – 03/2026</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-400">Technologies: MongoDB, Express.js, React.js, Node.js</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                      <li>Developed a MERN-based placement portal.</li>
                      <li>Implemented JWT authentication and REST APIs.</li>
                      <li>Built job posting and application tracking features.</li>
                    </ul>
                  </div>

                  {/* Breast Cancer Malignancy Prediction */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <h3 className="font-extrabold text-white text-sm sm:text-base flex items-center space-x-2">
                        <span>Breast Cancer Malignancy Prediction (Machine Learning)</span>
                        <a href="https://github.com/Kavya135399/Breast-Cancer-Prediction" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-xs">
                          <ExternalLink className="w-3.5 h-3.5 inline" />
                        </a>
                      </h3>
                      <span className="text-xs font-mono text-cyan-400 font-bold">02/2026 – 04/2026</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-400">Technologies: Python, Flask, Scikit-learn, Pandas, NumPy, Machine Learning</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                      <li>Developed a machine learning model using Python and Scikit-learn.</li>
                      <li>Built a Flask web application for prediction.</li>
                      <li>Achieved real-time benign/malignant prediction.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PDF Preview Frame Option */}
              <div className="pt-4 border-t border-white/10 text-center">
                <button
                  onClick={handleOpenNewTab}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-cyan-300 hover:text-white transition-all shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Full PDF in New Tab</span>
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
