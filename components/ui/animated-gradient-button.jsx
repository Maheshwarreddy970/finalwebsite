import React, { useEffect, useState } from 'react';

const MainButton = () => {
  const [shinePosition, setShinePosition] = useState(-50);
  const [pulseGlow, setPulseGlow] = useState(0.1);

  // Shine animation
  useEffect(() => {
    const shineInterval = setInterval(() => {
      setShinePosition((prev) => {
        if (prev >= 250) return -50; // Reset to start
        return prev + 5; // Move shine across button
      });
    }, 50); // Adjust speed (3s duration / 60 frames)
    return () => clearInterval(shineInterval);
  }, []);

  // Pulse animation
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseGlow((prev) => (prev === 0.1 ? 0.2 : 0.1)); // Toggle between 0.1 and 0.2
    }, 1000); // Half of 2s duration for each phase
    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <div
      style={{
        perspective: '1000px',
      }}
    >
      <div
        style={{
          width: '200px',
          height: '60px',
          borderRadius: '30px',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
          boxShadow: `
            inset 0 1px 2px rgba(255, 255, 255, 0.4),
            inset 0 -1px 2px rgba(0, 0, 0, 0.2),
            0 4px 8px rgba(0, 0, 0, 0.2),
            0 0 20px rgba(255, 255, 255, ${pulseGlow})
          `,
          transform: 'rotateX(15deg) translateZ(0)',
          transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'rotateX(0deg) translateZ(15px) scale(1.05)';
          e.currentTarget.style.boxShadow = `
            inset 0 1px 2px rgba(255, 255, 255, 0.4),
            inset 0 -1px 2px rgba(0, 0, 0, 0.2),
            0 8px 16px rgba(0, 0, 0, 0.3),
            0 0 40px rgba(255, 255, 255, 0.25)
          `;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'rotateX(15deg) translateZ(0)';
          e.currentTarget.style.boxShadow = `
            inset 0 1px 2px rgba(255, 255, 255, 0.4),
            inset 0 -1px 2px rgba(0, 0, 0, 0.2),
            0 4px 8px rgba(0, 0, 0, 0.2),
            0 0 20px rgba(255, 255, 255, ${pulseGlow})
          `;
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'rotateX(0deg) translateZ(-5px) scale(0.95)';
          e.currentTarget.style.boxShadow = `
            inset 0 1px 2px rgba(255, 255, 255, 0.4),
            inset 0 -1px 2px rgba(0, 0, 0, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.2),
            0 0 10px rgba(255, 255, 255, 0.1)
          `;
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'rotateX(0deg) translateZ(15px) scale(1.05)';
          e.currentTarget.style.boxShadow = `
            inset 0 1px 2px rgba(255, 255, 255, 0.4),
            inset 0 -1px 2px rgba(0, 0, 0, 0.2),
            0 8px 16px rgba(0, 0, 0, 0.3),
            0 0 40px rgba(255, 255, 255, 0.25)
          `;
        }}
      >
        {/* Shine effect (replacing ::before) */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: `${shinePosition}px`,
            width: '50px',
            height: '100%',
            background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1), transparent)',
            transform: 'skewX(-25deg)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        {/* Ground shadow (replacing ::after) */}
        <div
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: '10%',
            width: '80%',
            height: '10px',
            background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, transparent 70%)',
            zIndex: -1,
          }}
        />
        {/* Button text */}
        <span
          style={{
            position: 'relative',
            zIndex: 2,
            color: 'white',
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
            display: 'block',
            lineHeight: '60px',
            textAlign: 'center',
          }}
        >
          Get Started
        </span>
      </div>
    </div>
  );
};

export default MainButton;