"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { useEffect, useRef, useState } from "react";

const Home = () => {
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
    <>
      {loading ? (
        <MultiStepLoader
          loadingStates={loadingStates}
          loading={loading}
          duration={500}
        />
      ) : (
        <div>
          <Hero scrollRef={aboutRef} ref={heroRef} />
          <About sectionRef={aboutRef} />
          <Skills />
          <Projects />
          <ScrollToTop targetRef={heroRef} />
        </div>
      )}
    </>
  );
};

export default Home;
