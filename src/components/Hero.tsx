"use client";

import { motion } from "motion/react";
import { forwardRef, useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FaLocationDot } from "react-icons/fa6";
import TypingText from "@/components/ui/typing-text";
import { useAnimationStep } from "@/hooks/useAnimationStep";
import NavLink from "@/components/ui/NavLink";
import CustomCursor from "@/components/ui/CustomCursor";
import {
  fadeIn,
  fadeInUp,
  scaleIn,
  defaultTransition,
  scrollReveal,
  staggerChildren,
} from "@/utils/animations";

type Props = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
};

const Hero = forwardRef<HTMLElement, Props>(({ scrollRef }, ref) => {
  const step = useAnimationStep();
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <section
      ref={ref}
      id="home"
      className="h-screen max-w-screen p-8 bg-black flex items-center justify-center overflow-hidden relative"
    >
      <CustomCursor />
      <motion.div
        variants={scrollReveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full h-full border-2 border-white/50 flex flex-col items-center justify-center relative overflow-hidden bg-neutral-900 rounded-md backdrop-blur-sm"
      >
        <ShootingStars />
        <StarsBackground />

        {step === 0 && (
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-4xl md:text-5xl font-semibold text-[#a0f5d1] text-center"
          >
            👋 Greetings!
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-4xl md:text-5xl font-semibold text-[#98e8ef] text-center"
          >
            Let's take a Glimpse at
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate={{
              ...scaleIn.animate,
              y: step === 3 ? -200 : 0,
            }}
            transition={defaultTransition}
            exit="exit"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-gradient-to-r from-[#a0f5d1] via-[#98e8ef] to-[#a0f5d1] bg-clip-text">
                <TypingText
                  text="Vansh Singhal"
                  onComplete={() => setShowSubtitle(true)}
                />
              </h1>

              {showSubtitle && (
                <motion.p
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={defaultTransition}
                  className="text-sm md:text-lg tracking-wide text-gray-400 mt-3"
                >
                  Fullstack Developer | MERN | Next.js | Open Source
                </motion.p>
              )}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ ...defaultTransition, delay: 1 }}
            exit="exit"
            className="absolute bottom-10 w-full text-center space-y-12 px-2 sm:px-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-full px-4 justify-between">
              {/* Left: Navigation */}
              <motion.div
                className="flex flex-col items-start sm:gap-2 sm:w-1/2"
                variants={staggerChildren}
              >
                <NavLink href="#about" text="About" />
                <NavLink href="#skills" text="Skills" />
                <NavLink href="#projects" text="Projects" />
                <NavLink href="#contact" text="Contact" />
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-sm md:text-base text-gray-400 leading-relaxed sm:text-right sm:max-w-xs sm:ml-auto self-center data-cursor-hover"
              >
                <span className="font-bold italic tracking-wide">
                  Results-driven Full Stack Web Developer
                </span>{" "}
                with a strong passion for building scalable, high-performance
                web applications.
              </motion.p>
            </div>

            <motion.div
              variants={fadeInUp}
              className="text-lg text-gray-300 flex items-center justify-center text-center gap-2 data-cursor-hover"
            >
              <FaLocationDot />
              <span> New Delhi, India</span>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
