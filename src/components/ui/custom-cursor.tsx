'use client';

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Function to move the cursor
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    // Handle mouse enter and leave events
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Select all elements with the `data-cursor-hover` attribute
    const hoverTargets = document.querySelectorAll('[data-cursor-hover], a, button');

    // Add event listeners for hover targets
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Listen for mouse movement to move the custom cursor
    document.addEventListener('mousemove', moveCursor);

    // Hide the default cursor
    document.body.style.cursor = 'none';

    // Cleanup function when component is unmounted
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.style.cursor = 'auto'; // Restore the default cursor
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`hidden : md:block fixed z-[9999] top-0 left-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full 
        border border-white bg-white/20 backdrop-blur-sm pointer-events-none transition-all duration-200 ease-out 
        ${isHovering ? 'scale-150' : 'scale-50'}`}
    />
  );
};

export default CustomCursor;
