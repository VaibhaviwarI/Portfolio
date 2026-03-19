import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Workflow, BrainCircuit } from 'lucide-react';

const projects = [
  {
    title: "Driver Sentiment Engine",
    category: "Full Stack",
    date: "Mar 2026",
    description: "Real-time Driver Feedback & Safety Monitoring System. Built a full-stack platform to collect passenger feedback and analyze driver sentiment with real-time alerts. Designed EMA-based sentiment scoring (O(1)) with a persistent job queue.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Vercel", "Render"],
    links: { live: "#", github: "#" },
    icon: <Workflow className="w-10 h-10 text-cyan-400" />
  },
  {
    title: "CareerAi",
    category: "AI apps",
    date: "July 2025",
    description: "A full-stack career guidance platform enabling users to discover suitable options and receive personalized pathways. Developed with AI-powered recommendations using OpenAI API, dashboards, reports, and secure authentication.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MySQL", "Clerk", "OpenAI API"],
    links: { live: "#", github: "#" },
    icon: <BrainCircuit className="w-10 h-10 text-blue-400" />
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full Stack", "AI apps"];

  const filteredProjects = projects.filter(project => 
    filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-20 bg-slate-900/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Highlighted Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30" 
                    : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800/40 rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all group relative overflow-hidden"
              >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-900/80 rounded-2xl shadow-lg">
                  {project.icon}
                </div>
                <div className="flex gap-4">
                  <a href={project.links.github} className="text-slate-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.links.live} className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">{project.date}</p>
              
              <p className="text-slate-300 mb-8 leading-relaxed h-auto md:h-24">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-xs font-medium border border-slate-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
