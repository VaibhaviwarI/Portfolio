import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Summer Training</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative pl-8 md:pl-0"
        >
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-800 transform -translate-x-1/2"></div>
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Timeline dot */}
            <div className="absolute left-0 w-8 h-8 rounded-full bg-slate-900 border-4 border-amber-500 shadow-xl md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10 transition-transform group-hover:scale-125">
              <Lightbulb className="w-3 h-3 text-amber-500" />
            </div>

            <div className="w-full md:w-5/12 ml-10 md:ml-0 md:mr-auto p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg hover:border-amber-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Mastering Data Structures and Algorithms</h3>
              <p className="text-amber-500 font-medium mb-4">Central of Professional Enhancement</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm leading-relaxed">
                <li>Aimed to enhance core problem-solving ability through structured learning of advanced data structures.</li>
                <li>Undertook an intensive training program covering recursion, dynamic programming, trees, graphs, and optimized patterns.</li>
                <li>Gained stronger algorithmic thinking and capability to implement efficient solutions for complex computational problems.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
