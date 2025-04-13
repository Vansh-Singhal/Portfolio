"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { useRef } from "react";

const Home = () => {

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <div>
      <Hero scrollRef={aboutRef} ref={heroRef}/>
      <About sectionRef={aboutRef}/>
      <ScrollToTop targetRef={heroRef} />
    </div>
  );
};

export default Home;
