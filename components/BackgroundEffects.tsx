import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030303]">
      
      {/* 1. Base Mesh Gradient - Subtle & Dark */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,60,30,0.15),transparent_50%)]" />
      
      {/* 2. Grid System with Mask */}
      <div className="absolute inset-0 bg-grid opacity-[0.15]" 
           style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)' }} />

      {/* 3. Floating Light Beams */}
      <div className="absolute top-[-20%] left-[20%] w-[1px] h-[150vh] bg-gradient-to-b from-transparent via-white/5 to-transparent rotate-[15deg] animate-pulse-slow blur-[1px]" />
      <div className="absolute top-[-20%] right-[30%] w-[1px] h-[150vh] bg-gradient-to-b from-transparent via-noble-500/5 to-transparent -rotate-[15deg] animate-pulse-slow delay-700 blur-[1px]" />

      {/* 4. Drifting Particles */}
      <div className="absolute inset-0">
         {[...Array(15)].map((_, i) => (
           <div
             key={i}
             className="absolute bg-white/20 rounded-full"
             style={{
               width: Math.random() * 2 + 'px',
               height: Math.random() * 2 + 'px',
               top: Math.random() * 100 + '%',
               left: Math.random() * 100 + '%',
               animation: `float ${Math.random() * 10 + 20}s linear infinite`,
               opacity: Math.random() * 0.3 + 0.1
             }}
           />
         ))}
      </div>
      
      {/* 5. Top Horizon Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-noble-400/20 to-transparent blur-[8px]" />
      
    </div>
  );
};