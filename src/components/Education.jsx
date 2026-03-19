import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 8.6",
    period: "Since August 2023"
  },
  {
    institution: "Kendriya Vidyalaya Mahoba",
    location: "Mahoba, Uttar Pradesh",
    degree: "Intermediate",
    score: "Percentage: 89.4%",
    period: "Apr 2021 - Mar 2022"
  },
  {
    institution: "Kendriya Vidyalaya Mahoba",
    location: "Mahoba, Uttar Pradesh",
    degree: "Matriculation",
    score: "Percentage: 92.2%",
    period: "Apr 2019 - Mar 2020"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-900/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Education</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
            >
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                  <p className="text-slate-400 text-sm mb-2">{edu.location}</p>
                  <p className="text-slate-200 font-medium">{edu.degree}</p>
                </div>
              </div>
              <div className="md:text-right mt-4 md:mt-0">
                <span className="inline-block px-4 py-1 rounded-full bg-slate-900 text-emerald-400 font-semibold text-sm mb-2">
                  {edu.score}
                </span>
                <p className="text-slate-500 text-sm block">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
