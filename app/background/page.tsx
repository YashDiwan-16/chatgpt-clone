// app/components/EnhancedAIBackground.tsx

"use client";

import React from "react";

const AIAnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 z-[-999]">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient
            id="circles"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        <g className="animate-slow-spin">
          <circle cx="500" cy="500" r="300" fill="url(#circles)" />
          <circle
            cx="500"
            cy="500"
            r="400"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <circle
            cx="500"
            cy="500"
            r="300"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
        </g>

        <g className="animate-float">
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r={Math.random() * 10 + 1}
              fill="rgba(255,255,255,0.3)"
            />
          ))}
        </g>

        <path
          d="M0,500 Q250,300 500,500 T1000,500"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          className="animate-wave"
        />
      </svg>
    </div>
  );
};

export default AIAnimatedBackground;
