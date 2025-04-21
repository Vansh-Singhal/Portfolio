'use client';

import React, { useEffect, useRef, ReactNode, useState } from 'react';
import {cn} from '@/lib/utils'

interface CursorGlowWrapperProps {
  children: ReactNode;
}

const CursorGlowWrapper: React.FC<CursorGlowWrapperProps> = ({ children }) => {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const glow = glowRef.current;
    const parent = glow?.parentElement;

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    const handleMouseMove = (e: MouseEvent) => {
      if (!glow || !parent) return;

      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

    parent?.addEventListener('mousemove', handleMouseMove);
    parent?.addEventListener('mouseenter', handleMouseEnter);
    parent?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parent?.removeEventListener('mousemove', handleMouseMove);
      parent?.removeEventListener('mouseenter', handleMouseEnter);
      parent?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative overflow-visible">
      <div
        ref={glowRef}
        className={cn(
          'pointer-events-none absolute z-[9999] h-40 w-40 -translate-x-1/2 -translate-y-1/2',
          'rounded-full bg-white/10 blur-xl transition-opacity duration-300',
          isActive ? 'opacity-100' : 'opacity-0'
        )}
      />
      {children}
    </div>
  );
};

export default CursorGlowWrapper;
