import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const RobotAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize to -1 to 1 based on center of screen
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const spring = { damping: 20, stiffness: 150, mass: 0.5 };
  const mouseX = useSpring(0, spring);
  const mouseY = useSpring(0, spring);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  // Head tilt parallax (subtle 3D rotation)
  const headRotateX = useTransform(mouseY, [-1, 1], [15, -15]);
  const headRotateY = useTransform(mouseX, [-1, 1], [-25, 25]);

  // Eye movement inside the glossy screen (bounded so they don't detach)
  const eyeX = useTransform(mouseX, [-1, 1], [-18, 18]);
  const eyeY = useTransform(mouseY, [-1, 1], [-10, 10]);

  return (
    <div className="w-full max-w-sm aspect-square mx-auto flex items-center justify-center perspective-[1200px] z-20">
      <motion.div 
        style={{ rotateX: headRotateX, rotateY: headRotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full cursor-pointer hover:scale-105 transition-transform duration-500"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_40px_rgba(6,182,212,0.3)] overflow-visible">
          <defs>
            {/* Robot Shell 3D Gradient */}
            <radialGradient id="shellGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="50%" stopColor="#e2e8f0"/>
              <stop offset="90%" stopColor="#94a3b8"/>
              <stop offset="100%" stopColor="#64748b"/>
            </radialGradient>
            
            {/* Glossy Black Screen 3D Gradient */}
            <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e293b"/>
              <stop offset="50%" stopColor="#020617"/>
              <stop offset="100%" stopColor="#000000"/>
            </linearGradient>

            {/* Glowing Cyan Eyes Gradient */}
            <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="40%" stopColor="#0891b2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#083344" stopOpacity="0" />
            </radialGradient>

            <filter id="outerShadow">
              <feDropShadow dx="0" dy="10" stdDeviation="8" floodOpacity="0.5" />
            </filter>
            
            <filter id="innerGlow">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#67e8f9" floodOpacity="0.6" />
            </filter>

            {/* Clipping path bounds the eyes exactly inside the black screen so they NEVER detach */}
            <clipPath id="screenClip">
              <rect x="50" y="70" width="100" height="60" rx="25" />
            </clipPath>
          </defs>

          {/* Neck Joint */}
          <rect x="85" y="150" width="30" height="40" rx="10" fill="#475569" filter="url(#outerShadow)" />
          <line x1="85" y1="165" x2="115" y2="165" stroke="#1e293b" strokeWidth="4" />
          <line x1="85" y1="175" x2="115" y2="175" stroke="#1e293b" strokeWidth="4" />

          {/* Main Head Shell (Cute overlapping capsule shape) */}
          <rect x="30" y="30" width="140" height="135" rx="60" fill="url(#shellGrad)" filter="url(#outerShadow)" />
          
          {/* Headphones / Ears */}
          <rect x="20" y="80" width="15" height="40" rx="7" fill="#06b6d4" filter="url(#outerShadow)" />
          <rect x="165" y="80" width="15" height="40" rx="7" fill="#06b6d4" filter="url(#outerShadow)" />
          <circle cx="27" cy="100" r="4" fill="#164e63" />
          <circle cx="173" cy="100" r="4" fill="#164e63" />

          {/* Antenna */}
          <line x1="100" y1="30" x2="100" y2="10" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
          <circle cx="100" cy="8" r="6" fill="#06b6d4" filter="url(#innerGlow)" />

          {/* Face Screen (Glassmorphic dark mask) */}
          <rect x="45" y="65" width="110" height="70" rx="30" fill="none" stroke="#64748b" strokeWidth="4" />
          <rect x="50" y="70" width="100" height="60" rx="25" fill="url(#screenGrad)" />

          {/* Highlight for Glass Reflection */}
          <path d="M 55 75 Q 100 70 145 75 Q 140 85 60 85 Z" fill="#ffffff" opacity="0.1" />

          {/* INTERACTIVE EYES bounded strictly inside the screen clip path */}
          <g clipPath="url(#screenClip)">
            <motion.g style={{ x: eyeX, y: eyeY }}>
              {/* Left Eye */}
              <circle cx="75" cy="100" r="18" fill="url(#eyeGlow)" />
              <rect x="68" y="95" width="14" height="10" rx="5" fill="#cffafe" filter="url(#innerGlow)" />
              
              {/* Right Eye */}
              <circle cx="125" cy="100" r="18" fill="url(#eyeGlow)" />
              <rect x="118" y="95" width="14" height="10" rx="5" fill="#cffafe" filter="url(#innerGlow)" />
            </motion.g>
          </g>

          {/* Little Tech Details / Screws */}
          <circle cx="100" cy="145" r="3" fill="#64748b" />
          <circle cx="85" cy="145" r="2" fill="#94a3b8" />
          <circle cx="115" cy="145" r="2" fill="#94a3b8" />
        </svg>
      </motion.div>
    </div>
  );
};

export default RobotAvatar;
