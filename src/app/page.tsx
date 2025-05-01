"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaHome } from "react-icons/fa";
import Contact from "@/components/Contact";
import CursorGlowWrapper from "@/components/ui/cursor-glow-wrapper";

const Home = () => {
  const links = [
    {
      title: "Back to Top",
      icon: (
        <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Contact",
      icon: (
        <MdPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "tel:+919773699880",
    },
    {
      title: "Email",
      icon: (
        <MdEmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:vanshsinghal@hotmail.com",
    },
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://linkedin.com/in/vansh-singhal-182939289/",
    },
    {
      title: "GitHub",
      icon: (
        <FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Vansh-Singhal",
    },
    {
      title: "LeetCode",
      icon: (
        <SiLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/u/vansh_singhal_11/",
    },
  ];

  const [loading, setLoading] = useState(true);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  const loadingStates = [
    { text: "Crafting pixels into personality..." },
    { text: "Loading passion, one component at a time..." },
    { text: "Checking for issues" },
    { text: "Setting up the Page" },
    { text: "Bringing designs to life — almost there!" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-screen overflow-hidden">
      {loading ? (
        <MultiStepLoader
          loadingStates={loadingStates}
          loading={loading}
          duration={500}
        />
      ) : (
        <CursorGlowWrapper>
          <div>
            <Hero scrollRef={aboutRef} ref={heroRef} />
            <About sectionRef={aboutRef} />
            <Skills />
            <Projects />
            <Contact />
            <div className="fixed bottom-2 right-2 flex items-center justify-center md:w-full z-50">
              <FloatingDock items={links} />
            </div>
          </div>
        </CursorGlowWrapper>
      )
    }
    </div>
  );
};

export default Home;
