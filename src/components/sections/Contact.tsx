import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github, Sparkles, Clock, ShieldAlert, AlertCircle } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    isSuccess,
    cooldown,
    maxMessageLength,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  return (
    <section id="contact" className="relative py-28 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 text-xs font-mono mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>LET'S CONNECT</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-white"
          >
            Get In <span className="gradient-text-neon">Touch</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Map Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 bg-[#0c0c12]/80 backdrop-blur-xl shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Contact Details</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Have a project idea, inquiry, or potential role? Send a message directly or connect via social channels.
              </p>

              <div className="space-y-4">
                <a
                  href={PERSONAL_INFO.socials.email}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/40 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Direct Email</span>
                    <p className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Location</span>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 block mb-3 font-semibold">SOCIAL CHANNELS</span>
                <div className="flex items-center space-x-3">
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 transition-all hover:scale-105"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-purple-400 transition-all hover:scale-105"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.email}
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-pink-400 transition-all hover:scale-105"
                    title="Gmail (kavyaofficial.it@gmail.com)"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>


          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden bg-[#0c0c12]/80 backdrop-blur-xl shadow-2xl">
              {/* Success Overlay Screen */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-20 bg-[#0c0c12]/95 backdrop-blur-2xl p-8 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                    <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                      Thank you for contacting me. Your message has been sent directly to <span className="text-cyan-400 font-mono font-bold">kavyaofficial.it@gmail.com</span>. I'll reply soon.
                    </p>
                    <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 pt-4">
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>Returning to form in 3 seconds...</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-2 font-bold">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Alex Mercer"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-white/5 border ${
                        touched.name && errors.name
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                      } text-white text-sm focus:outline-none transition-all placeholder-slate-500`}
                    />
                    {touched.name && errors.name && (
                      <span className="text-[11px] text-rose-400 mt-1.5 flex items-center space-x-1 font-mono font-medium">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.name}</span>
                      </span>
                    )}
                  </div>

                  {/* Email Address Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-2 font-bold">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-white/5 border ${
                        touched.email && errors.email
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                      } text-white text-sm focus:outline-none transition-all placeholder-slate-500`}
                    />
                    {touched.email && errors.email && (
                      <span className="text-[11px] text-rose-400 mt-1.5 flex items-center space-x-1 font-mono font-medium">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-2 font-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-white/5 border ${
                        touched.phone && errors.phone
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                      } text-white text-sm focus:outline-none transition-all placeholder-slate-500`}
                    />
                    {touched.phone && errors.phone && (
                      <span className="text-[11px] text-rose-400 mt-1.5 flex items-center space-x-1 font-mono font-medium">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.phone}</span>
                      </span>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-2 font-bold">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Project Inquiry / Job Opportunity"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-white/5 border ${
                        touched.subject && errors.subject
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                      } text-white text-sm focus:outline-none transition-all placeholder-slate-500`}
                    />
                    {touched.subject && errors.subject && (
                      <span className="text-[11px] text-rose-400 mt-1.5 flex items-center space-x-1 font-mono font-medium">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.subject}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Message Input with Character Counter */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-mono text-slate-300 uppercase font-bold">
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <span className={`text-[11px] font-mono ${
                      formData.message.length > maxMessageLength
                        ? 'text-rose-400 font-bold'
                        : 'text-slate-400'
                    }`}>
                      {formData.message.length} / {maxMessageLength}
                    </span>
                  </div>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Describe your project scope or opportunity..."
                    className={`w-full px-4 py-3.5 rounded-2xl bg-white/5 border ${
                      touched.message && errors.message
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                        : 'border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                    } text-white text-sm focus:outline-none transition-all placeholder-slate-500 resize-none`}
                  ></textarea>
                  {touched.message && errors.message && (
                    <span className="text-[11px] text-rose-400 mt-1.5 flex items-center space-x-1 font-mono font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* Cooldown Anti-Spam Notice */}
                {cooldown > 0 && (
                  <div className="p-3 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs flex items-center space-x-2 font-mono">
                    <ShieldAlert className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Anti-spam active: Please wait {cooldown}s before submitting another message.</span>
                  </div>
                )}

                {/* Animated Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || cooldown > 0}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(217,70,239,0.7)] transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    </span>
                  ) : cooldown > 0 ? (
                    <span className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>Cooldown ({cooldown}s)</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
