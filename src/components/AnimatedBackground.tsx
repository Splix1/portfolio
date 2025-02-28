'use client';

import { CSSProperties } from "react";

interface CustomCSSProperties extends CSSProperties {
  '--duration'?: string;
  '--twinkle-duration'?: string;
  '--twinkle-delay'?: string;
}

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            '--duration': `${Math.random() * 15 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          } as CustomCSSProperties}
        />
      ))}
      
      {/* Stars */}
      {[...Array(60)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            '--twinkle-duration': `${Math.random() * 3 + 2}s`,
            '--twinkle-delay': `${Math.random() * 2}s`,
          } as CustomCSSProperties}
        />
      ))}
    </div>
  );
} 