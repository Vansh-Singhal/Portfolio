"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import TextUnderline from "@/components/ui/text-underline";
import Link from "next/link";
import { GoDot } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 2000),
      setTimeout(() => setStep(2), 4000),
      setTimeout(() => setStep(3), 6000),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="h-screen w-screen p-8 bg-black flex items-center justify-center overflow-hidden relative">
      <div className="w-full h-full border-2 border-white/50 flex flex-col items-center justify-center relative overflow-hidden bg-neutral-900">
        <ShootingStars />
        <StarsBackground />
        {step === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="text-4xl md:text-5xl font-semibold text-[#a0f5d1]"
          >
            👋 Hello!
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0,y: -50 }}
            className="text-4xl md:text-5xl font-semibold text-[#98e8ef]"
          >
            My name is
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: step === 3 ? -100 : 0,
            }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="space-y-4 bg-gradient-to-r from-[#a0f5d1] via-[#98e8ef] to-[#a0f5d1] bg-clip-text text-center absolute top-3/8 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-5/6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-transparent">
              Vansh Singhal
            </h1>
            <p className="text-sm md:text-lg tracking-wide text-gray-400">
              Fullstack Developer | MERN | Next.js | Open Source
            </p>
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
              <div className="flex flex-col items-start gap-2 sm:w-1/2">
                <Link
                  href="#"
                  className="px-2 py-2 text-md md:text-lg hover:text-white/70 flex items-center gap-2"
                >
                  <GoDot />
                  <TextUnderline text="Home" />
                </Link>
                <Link
                  href="/about"
                  className="px-2 py-2 text-md md:text-lg hover:text-white/70 flex items-center gap-2"
                >
                  <GoDot />
                  <TextUnderline text="About" />
                </Link>
                <Link
                  href="#"
                  className="px-2 py-2 text-md md:text-lg hover:text-white/70 flex items-center gap-2"
                >
                  <GoDot />
                  <TextUnderline text="Skills" />
                </Link>
                <Link
                  href="#"
                  className="px-2 py-2 text-md md:text-lg hover:text-white/70 flex items-center gap-2"
                >
                  <GoDot />
                  <TextUnderline text="Projects" />
                </Link>
                <Link
                  href="#"
                  className="px-2 py-2 text-md md:text-lg hover:text-white/70 flex items-center gap-2"
                >
                  <GoDot />
                  <TextUnderline text="Contact" />
                </Link>
              </div>

              {/* Right: Description Text */}
              <p className="text-sm md:text-base text-gray-400 leading-relaxed sm:text-right sm:max-w-xs sm:ml-auto self-center">
              <span className="font-bold italic">Results-driven Full Stack Web Developer</span> with a strong passion for building scalable, high-performance web applications.
              </p>
            </div>

            <h3 className="text-lg text-gray-300 flex items-center justify-center text-center gap-2">
              <FaLocationDot />
              <span> New Delhi, India</span>
            </h3>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;
