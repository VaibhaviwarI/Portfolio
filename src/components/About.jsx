import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-10 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12">
            I am a Computer Science Engineering student at Lovely Professional University, passionate about 
            software development and problem-solving. My technical journey has led me to explore 
            the depths of the MERN stack, C++, and AI integrations to build scalable, dynamic applications. 
            A firm believer in continuous learning, I strive to write efficient code and engineer solutions 
            that make a real impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-colors">
              <Terminal className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
              <p className="text-slate-400">Crafting engaging and responsive user interfaces using React, Tailwind CSS, and Framer Motion.</p>
            </div>
            
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-colors">
              <Database className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
              <p className="text-slate-400">Building robust APIs and scalable server architectures with Node.js, Express, and databases like PostgreSQL & MongoDB.</p>
            </div>
            
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-colors">
              <Layout className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Problem Solving</h3>
              <p className="text-slate-400">Strong algorithmic foundation with 300+ problems solved on LeetCode and an active competitive programming profile.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
