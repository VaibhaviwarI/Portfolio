import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import RobotAvatar from './RobotAvatar';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl text-cyan-400 font-semibold mb-2">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Vaibhav Tiwari
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              A passionate <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> specializing in building exceptional digital experiences. 
              Currently exploring deep into MERN stack and AI integrations.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/20">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="px-8 py-3 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-full font-medium transition-colors">
                Contact Me
              </a>
              <a href="/Resume.pdf" download="Resume.pdf" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-full font-medium transition-all shadow-lg shadow-purple-500/20 flex items-center gap-2">
                Download Resume <Download size={18} />
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 justify-center md:justify-center w-full text-slate-400">
              <a href="https://github.com/VaibhaviwarI" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all shadow-lg hover:shadow-cyan-500/50 rounded-full">
                <Github size={36} />
              </a>
              <a href="https://www.linkedin.com/in/vaibhav-tiwari766/" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all shadow-lg hover:shadow-blue-500/50 rounded-full mx-4">
                <Linkedin size={36} />
              </a>
              <a href="mailto:vaibhavtiwari81356@gmail.com" className="hover:text-white hover:scale-110 transition-all shadow-lg hover:shadow-emerald-500/50 rounded-full">
                <Mail size={36} />
              </a>
            </div>
          </motion.div>

          {/* Interactive 3D Robot Avatar */}
          <div className="flex-1 flex justify-center w-full max-w-lg mt-10 md:mt-0 relative z-20">
            <RobotAvatar />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
