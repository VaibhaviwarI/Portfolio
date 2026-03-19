import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const Interactive3DAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const spring = { damping: 25, stiffness: 200, mass: 0.5 };
  const mouseX = useSpring(0, spring);
  const mouseY = useSpring(0, spring);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  // The face moves slightly for 3D depth
  const faceRotateX = useTransform(mouseY, [-1, 1], [15, -15]);
  const faceRotateY = useTransform(mouseX, [-1, 1], [-20, 20]);

  // The eyes track intensely to follow the cursor (as requested)
  const eyeX = useTransform(mouseX, [-1, 1], [-12, 12]);
  const eyeY = useTransform(mouseY, [-1, 1], [-15, 15]);

  return (
    <div className="w-full max-w-sm aspect-square mx-auto flex items-center justify-center perspective-[1000px] z-20">
      <motion.div 
        style={{ rotateX: faceRotateX, rotateY: faceRotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full cursor-pointer hover:scale-105 transition-transform duration-500"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_30px_50px_rgba(6,182,212,0.4)] overflow-visible">
          <defs>
            {/* 3D Skin Gradient */}
            <radialGradient id="skinGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffedd5"/>
              <stop offset="60%" stopColor="#fed7aa"/>
              <stop offset="100%" stopColor="#fdba74"/>
            </radialGradient>
            
            {/* 3D Hair Gradient */}
            <radialGradient id="hairGrad" cx="40%" cy="20%" r="60%">
              <stop offset="0%" stopColor="#334155"/>
              <stop offset="100%" stopColor="#0f172a"/>
            </radialGradient>

            <linearGradient id="glassesGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            <filter id="shadow">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.4" />
            </filter>
            
            <filter id="eyeShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2" />
            </filter>
            
            {/* Inner shadow for eye sockets */}
            <filter id="innerGlow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
              <feFlood floodColor="#000" floodOpacity="0.1" result="glowColor" />
              <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Neck */}
          <path d="M 85 140 L 115 140 L 125 180 L 75 180 Z" fill="url(#skinGrad)" filter="url(#shadow)" />
          
          {/* Shirt */}
          <path d="M 50 200 Q 100 150 150 200 Z" fill="url(#glassesGrad)" filter="url(#shadow)" opacity="0.9" />

          {/* Base Head */}
          <circle cx="100" cy="100" r="55" fill="url(#skinGrad)" filter="url(#shadow)" />
          
          {/* Hair Base */}
          <path d="M 40 100 Q 45 35 100 35 Q 155 35 160 100 Q 155 80 100 70 Q 45 80 40 100" fill="url(#hairGrad)" filter="url(#shadow)" />
          
          {/* Hair Swoosh / Highlight */}
          <path d="M 45 80 Q 70 25 110 35 Q 150 45 155 80 Q 120 35 45 80" fill="#475569" opacity="0.6" />

          {/* Ears */}
          <circle cx="45" cy="105" r="10" fill="url(#skinGrad)" filter="url(#shadow)" />
          <circle cx="155" cy="105" r="10" fill="url(#skinGrad)" filter="url(#shadow)" />

          {/* Inner Ear Detail */}
          <circle cx="43" cy="105" r="4" fill="#fdba74" opacity="0.8" />
          <circle cx="157" cy="105" r="4" fill="#fdba74" opacity="0.8" />

          {/* Interactive Eyes Group - ONLY THIS group moves drastically to follow cursor */}
          <motion.g style={{ x: eyeX, y: eyeY }}>
            {/* Left Eye White */}
            <ellipse cx="76" cy="95" rx="14" ry="18" fill="white" filter="url(#innerGlow)" />
            {/* Left Pupil */}
            <circle cx="76" cy="95" r="7" fill="#1e293b" />
            {/* Left Eye Shine */}
            <circle cx="78" cy="92" r="2.5" fill="white" />
            <circle cx="74" cy="97" r="1" fill="white" />
            
            {/* Right Eye White */}
            <ellipse cx="124" cy="95" rx="14" ry="18" fill="white" filter="url(#innerGlow)" />
            {/* Right Pupil */}
            <circle cx="124" cy="95" r="7" fill="#1e293b" />
            {/* Right Eye Shine */}
            <circle cx="126" cy="92" r="2.5" fill="white" />
            <circle cx="122" cy="97" r="1" fill="white" />

            {/* Glasses Frames */}
            <rect x="58" y="80" width="36" height="30" rx="10" fill="none" stroke="url(#glassesGrad)" strokeWidth="4" filter="url(#eyeShadow)" />
            <rect x="106" y="80" width="36" height="30" rx="10" fill="none" stroke="url(#glassesGrad)" strokeWidth="4" filter="url(#eyeShadow)" />
            {/* Glasses Bridge */}
            <line x1="94" y1="95" x2="106" y2="95" stroke="url(#glassesGrad)" strokeWidth="4" filter="url(#eyeShadow)" />
            
            {/* Eyebrows */}
            <path d="M 60 70 Q 76 65 88 72" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
            <path d="M 112 72 Q 124 65 140 70" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
          </motion.g>

          {/* Nose */}
          <path d="M 95 115 Q 100 120 105 115" fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

          {/* Cheeks / Blush */}
          <circle cx="65" cy="115" r="8" fill="#f43f5e" opacity="0.4" filter="blur(2px)" />
          <circle cx="135" cy="115" r="8" fill="#f43f5e" opacity="0.4" filter="blur(2px)" />

          {/* Mouth/Smile */}
          <path d="M 85 130 Q 100 145 115 130" fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Interactive3DAvatar;
