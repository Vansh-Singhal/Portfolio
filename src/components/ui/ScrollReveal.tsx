import { motion } from "motion/react";
import { ReactNode } from "react";
import { scrollReveal } from "@/utils/animations";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) => {
  const getDirectionVariant = () => {
    const variants = {
      up: { y: 50 },
      down: { y: -50 },
      left: { x: 50 },
      right: { x: -50 },
    };
    return variants[direction];
  };

  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          ...getDirectionVariant(),
        },
        animate: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
            delay,
          },
        },
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
