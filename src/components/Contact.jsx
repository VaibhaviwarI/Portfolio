import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 inline-block">
            Let's Connect
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg mb-8">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. 
            I'll try my best to get back to you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <a href="mailto:vaibhavtiwari81356@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white text-purple-400 transition-colors">
                <Mail />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-400">Email Me</p>
                <p className="text-white font-semibold">vaibhavtiwari81356@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/vaibhav-tiwari766/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white text-indigo-400 transition-colors">
                <Linkedin />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-400">LinkedIn</p>
                <p className="text-white font-semibold flex items-center gap-2">Vaibhav Tiwari</p>
              </div>
            </a>

            <div className="flex justify-center gap-6 pt-6 border-t border-slate-800">
              <a href="https://github.com/VaibhaviwarI" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white border border-transparent hover:border-slate-700 transition-all">
                <Github size={24} />
              </a>
              <div className="flex items-center p-3 text-slate-400 hover:text-white transition-colors" title="+91-6388796563">
                 +91-6388796563
              </div>
            </div>
          </motion.div>

          {/* Location visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-slate-800 overflow-hidden relative flex items-center justify-center border border-slate-700 p-8 text-center"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center animate-bounce shadow-lg shadow-indigo-500/50 mb-4">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Based In</h3>
              <p className="text-slate-400 text-lg">Punjab, India & Mahoba, UP</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
