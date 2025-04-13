"use client";

import { motion } from "motion/react";
import { forwardRef, useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import TextUnderline from "@/components/ui/text-underline";
import Link from "next/link";
import { GoDot } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import TypingText from "@/components/ui/typing-text";
import { useAnimationStep } from "@/hooks/useAnimationStep";

type Props = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
};

const Hero = forwardRef<HTMLElement, Props>(({ scrollRef }, ref) => {
  const [clicked, setClicked] = useState(false);
  const step = useAnimationStep();
  const [showSubtitle, setShowSubtitle] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1200);

    setTimeout(() => {
      setClicked(false); // Reset animation for the next trigger
    }, 1800);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="h-screen max-w-screen p-8 bg-black flex items-center justify-center overflow-hidden relative"
    >
      <div className="w-full h-full border-2 border-white/50 flex flex-col items-center justify-center relative overflow-hidden bg-neutral-900 rounded-md">
        <ShootingStars />
        <StarsBackground />

        {step === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="text-4xl md:text-5xl font-semibold text-[#a0f5d1] text-center"
          >
            👋 Greetings!
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="text-4xl md:text-5xl font-semibold text-[#98e8ef] text-center"
          >
            Let's take a Glimpse at
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: step === 3 ? -200 : 0,
            }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: -50 }}
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
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="absolute bottom-10 w-full text-center space-y-12 px-2 sm:px-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-full px-4 justify-between">
              {/* Left: Navigation */}
              <div className="flex flex-col items-start sm:gap-2 sm:w-1/2">
                <Link
                  href="#"
                  className="px-2 py-2 text-md md:text-lg hover:text-white/70 flex items-center gap-2"
                >
                  <GoDot />
                  <TextUnderline text="Home" classes="text-white" />
                </Link>
                <motion.div
                  onClick={handleClick}
                  initial={{ rotate: 0, y: 0 }}
                  animate={
                    clicked
                      ? {
                          rotate: [0, 100, 80, 95, 85, 85, 85, 60, 60],
                          y: [0, 0, 400],
                          opacity: [1, 1, 1, 0],
                          transition: {
                            duration: 1.2,
                            times: [0, 0.25, 1],
                            ease: "easeInOut",
                          },
                        }
                      : {
                          rotate: 0,
                          y: 0,
                          opacity: 1,
                          transition: { duration: 0.5 },
                        }
                  }
                  className="px-2 py-2 text-md md:text-lg hover:text-white/70 flex items-center gap-2 cursor-pointer"
                  style={{ transformOrigin: "left center" }}
                >
                  <GoDot className="shrink-0" />
                  <TextUnderline text="About" classes="text-white" />
                </motion.div>

                <Link
                  href="#skills"
                  className="px-2 py-2 text-md md:text-lg hover:text-white/70 flex items-center gap-2"
                >
                  <GoDot />
                  <TextUnderline text="Skills" classes="text-white" />
                </Link>
                <Link
                  href="projects"
                  className="px-2 py-2 text-md md:text-lg hover:text-white/70 flex items-center gap-2"
                >
                  <GoDot />
                  <TextUnderline text="Projects" classes="text-white" />
                </Link>
                <Link
                  href="contact"
                  className="px-2 py-2 text-md md:text-lg hover:text-white/70 flex items-center gap-2"
                >
                  <GoDot />
                  <TextUnderline text="Contact" classes="text-white" />
                </Link>
              </div>

              <p className="text-sm md:text-base text-gray-400 leading-relaxed sm:text-right sm:max-w-xs sm:ml-auto self-center">
                <span className="font-bold italic tracking-wide">
                  Results-driven Full Stack Web Developer
                </span>{" "}
                with a strong passion for building scalable, high-performance
                web applications.
              </p>
            </div>

            <div className="text-lg text-gray-300 flex items-center justify-center text-center gap-2">
              <FaLocationDot />
              <span> New Delhi, India</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
