"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowUp } from "react-icons/fa";

type Props = {
  targetRef: React.RefObject<HTMLElement | null>;
};

const ScrollToTop = ({ targetRef }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetRef]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="scroll-to-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: -20 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 p-3 bg-[#98e8ef] text-black rounded-full shadow-md hover:scale-110 transition cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};

export default ScrollToTop;
