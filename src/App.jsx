import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { User, Terminal, FolderDot, Mail } from 'lucide-react';

function App() {
  return (
    <main className="bg-slate-950 font-sans w-full min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 hidden md:block">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tighter hover:opacity-80 transition-opacity">
            Personal Portfolio
          </a>
          <ul className="flex space-x-8 text-sm font-medium text-slate-300">
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Education />
      <Contact />
      
      {/* Mobile Floating Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-sm">
        <ul className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 p-3 rounded-2xl shadow-2xl flex justify-around items-center text-slate-400">
          <li>
            <a href="#about" className="p-2 hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all flex flex-col items-center gap-1 group">
              <User size={20} className="group-hover:text-cyan-400" />
              <span className="text-[10px] font-medium uppercase tracking-wider">About</span>
            </a>
          </li>
          <li>
            <a href="#skills" className="p-2 hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all flex flex-col items-center gap-1 group">
              <Terminal size={20} className="group-hover:text-cyan-400" />
              <span className="text-[10px] font-medium uppercase tracking-wider">Skills</span>
            </a>
          </li>
          <li>
            <a href="#projects" className="p-2 hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all flex flex-col items-center gap-1 group">
              <FolderDot size={20} className="group-hover:text-cyan-400" />
              <span className="text-[10px] font-medium uppercase tracking-wider">Work</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="p-2 hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all flex flex-col items-center gap-1 group">
              <Mail size={20} className="group-hover:text-cyan-400" />
              <span className="text-[10px] font-medium uppercase tracking-wider">Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      <footer className="bg-slate-950 py-12 md:py-8 text-center border-t border-slate-900">
        <p className="text-slate-500 text-sm">
          Built with React, Tailwind CSS, and Framer Motion <br/>
          © {new Date().getFullYear()} Vaibhav Tiwari. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default App;
