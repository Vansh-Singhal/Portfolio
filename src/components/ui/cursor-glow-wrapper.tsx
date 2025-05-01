"use client";

import React, { useEffect, useRef, ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface CursorGlowWrapperProps {
  children: ReactNode;
}

const CursorGlowWrapper: React.FC<CursorGlowWrapperProps> = ({ children }) => {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const glow = glowRef.current;
    const wrapper = wrapperRef.current;
  
    if (!glow || !wrapper) return;
  
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);
  
    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };
  
    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseenter', handleMouseEnter);
    wrapper.addEventListener('mouseleave', handleMouseLeave);
  
    // ✅ TEMP listener to simulate a "mouseenter" and position update
    const initialMouseCheck = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const isInBounds =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
  
      if (isInBounds) {
        setIsActive(true);
        handleMouseMove(e); // Manually position glow
      }
  
      window.removeEventListener('mousemove', initialMouseCheck);
    };
  
    window.addEventListener('mousemove', initialMouseCheck);
  
    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', initialMouseCheck);
    };
  }, []);
  

  return (
    <div ref={wrapperRef} className="relative overflow-visible">
      <div
        ref={glowRef}
        className={cn(
          "pointer-events-none absolute z-[9999] size-20 -translate-x-1/2 -translate-y-1/2",
          "rounded-full bg-white/10 blur-xl transition-opacity duration-300",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />
      {children}
    </div>
  );
};

export default CursorGlowWrapper;
