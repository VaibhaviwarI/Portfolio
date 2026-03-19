import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "PHP & C", level: 70 }
    ]
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Node.js & Express", level: 85 },
      { name: "SQL & Databases", level: 80 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/30 transition-all shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">
                  {index + 1}
                </span>
                {category.title}
              </h3>
              <div className="flex flex-col gap-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
