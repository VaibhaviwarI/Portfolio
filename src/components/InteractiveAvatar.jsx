import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const InteractiveAvatar = () => {
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

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  
  // Spring values for smooth following
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  // Update spring targets when mouse moves
  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  // Transform values for different body parts (parallax effect)
  const headRotateX = useTransform(mouseY, [-1, 1], [15, -15]);
  const headRotateY = useTransform(mouseX, [-1, 1], [-25, 25]);
  
  const eyeX = useTransform(mouseX, [-1, 1], [-12, 12]);
  const eyeY = useTransform(mouseY, [-1, 1], [-15, 15]);
  
  const pupilX = useTransform(mouseX, [-1, 1], [-8, 8]);
  const pupilY = useTransform(mouseY, [-1, 1], [-10, 10]);
  
  const hairX = useTransform(mouseX, [-1, 1], [-5, 5]);
  const mouthY = useTransform(mouseY, [-1, 1], [-2, 2]);

  return (
    <div className="w-full h-full flex items-center justify-center relative perspective-[1000px]">
      <motion.div 
        style={{ 
          rotateX: headRotateX, 
          rotateY: headRotateY,
          transformStyle: "preserve-3d"
        }}
        className="w-72 h-72 md:w-96 md:h-96 relative z-10"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl overflow-visible">
          
          {/* Back drop shadow pulse */}
          <circle cx="200" cy="200" r="160" fill="#a855f7" opacity="0.1" className="animate-pulse" filter="blur(20px)" />

          {/* Body / Shoulders */}
          <path d="M 60 400 Q 100 280 200 280 Q 300 280 340 400 Z" fill="#4c1d95" />
          <path d="M 120 400 L 140 300 L 260 300 L 280 400 Z" fill="#5b21b6" opacity="0.8" />
          <path d="M 160 320 M 200 340 L 200 400" stroke="#7c3aed" strokeWidth="8" strokeOpacity="0.5" />

          {/* Neck */}
          <rect x="175" y="240" width="50" height="60" rx="20" fill="#e2c19e" />
          <rect x="175" y="240" width="50" height="20" fill="#c9a483" opacity="0.5" />

          {/* Base Head */}
          <rect x="90" y="60" width="220" height="230" rx="100" fill="#6d28d9" /> 
          
          {/* Face Area */}
          <rect x="110" y="110" width="180" height="170" rx="70" fill="#fcdbb4" />
          
          {/* Hair swoosh */}
          <motion.path 
            style={{ x: hairX }}
            d="M 110 140 Q 140 80 200 120 Q 260 80 290 140 Q 200 100 110 140" 
            fill="#0f172a" 
          />
          <motion.path 
            style={{ x: hairX }}
            d="M 90 170 Q 110 90 200 60 Q 290 90 310 170 Z" 
            fill="#0f172a" 
          />
          
          {/* Blush */}
          <circle cx="130" cy="230" r="16" fill="#f43f5e" opacity="0.25" filter="blur(4px)" />
          <circle cx="270" cy="230" r="16" fill="#f43f5e" opacity="0.25" filter="blur(4px)" />

          {/* Left Eye Container */}
          <motion.g style={{ x: eyeX, y: eyeY }}>
            {/* White of eye */}
            <circle cx="155" cy="190" r="32" fill="white" />
            {/* Glasses frame */}
            <circle cx="155" cy="190" r="32" fill="none" stroke="#2dd4bf" strokeWidth="8" />
            
            {/* Pupil Group */}
            <motion.g style={{ x: pupilX, y: pupilY }}>
              <circle cx="155" cy="190" r="14" fill="#0f172a" />
              <circle cx="150" cy="185" r="5" fill="white" />
              <circle cx="162" cy="195" r="2" fill="white" />
            </motion.g>
          </motion.g>

          {/* Right Eye Container */}
          <motion.g style={{ x: eyeX, y: eyeY }}>
            <circle cx="245" cy="190" r="32" fill="white" />
            <circle cx="245" cy="190" r="32" fill="none" stroke="#2dd4bf" strokeWidth="8" />
            
            <motion.g style={{ x: pupilX, y: pupilY }}>
              <circle cx="245" cy="190" r="14" fill="#0f172a" />
              <circle cx="240" cy="185" r="5" fill="white" />
              <circle cx="252" cy="195" r="2" fill="white" />
            </motion.g>
          </motion.g>

          {/* Glasses Bridge */}
          <motion.path 
            style={{ x: eyeX, y: eyeY }}
            d="M 187 190 L 213 190" 
            stroke="#2dd4bf" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />

          {/* Smile */}
          <motion.path 
            style={{ x: hairX, y: mouthY }} 
            d="M 170 245 Q 200 270 230 245" 
            fill="none" 
            stroke="#0f172a" 
            strokeWidth="7" 
            strokeLinecap="round" 
          />
          {/* Dimples */}
          <motion.circle style={{ x: hairX, y: mouthY }} cx="165" cy="240" r="3" fill="#0f172a" />
          <motion.circle style={{ x: hairX, y: mouthY }} cx="235" cy="240" r="3" fill="#0f172a" />

        </svg>
      </motion.div>
    </div>
  );
};

export default InteractiveAvatar;
