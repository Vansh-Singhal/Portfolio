'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void; // 👈 Callback when done
}

const TypingText = ({ text, speed = 100, onComplete }: TypingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // 🔔 Fire callback after typing finishes
      if (onComplete) onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <div className="font-mono">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {text.slice(0, currentIndex)}
      </motion.span>
    </div>
  );
};

export default TypingText;
