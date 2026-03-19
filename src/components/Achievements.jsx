import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

const certifications = [
  { name: "C++ Programming Certification", by: "NeoColab", date: "Aug 2024 – Dec 2024" },
  { name: "Training Certificate - Machine Learning", by: "NeoColab", date: "July 2024 – Sep 2024" },
  { name: "Java Programming Certification", by: "NeoColab", date: "Jan 2025 – May 2025" },
  { name: "Data Structure and Algorithm", by: "NeoColab", date: "Aug 2024 – Dec 2024" }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-950 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Trophy className="text-cyan-400" /> Key Milestones
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-white">400+ Problems Solved on Leetcode</h4>
                  <span className="text-slate-400 text-sm">Aug 2025</span>
                </div>
                <p className="text-cyan-400 font-medium text-sm">Consistent problem solving focusing on algorithmic optimization.</p>
              </div>
              
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-white">Highest Rating: 1793</h4>
                  <span className="text-slate-400 text-sm">Aug 2025</span>
                </div>
                <p className="text-cyan-400 font-medium text-sm">Achieved in Leetcode Biweekly Contest 168.</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-cyan-400" /> Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <Award className="w-6 h-6 text-cyan-500 mb-3" />
                  <h4 className="text-white font-medium text-sm mb-1">{cert.name}</h4>
                  <p className="text-slate-400 text-xs mb-2">by {cert.by}</p>
                  <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-[10px] uppercase font-bold tracking-wider">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
