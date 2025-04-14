"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  description: string;
  src: string;
  URL: string;
  category: string;
}

interface ProjectCarouselProps {
  projects: Project[];
  className?: string;
}

// Define animation variants for entering, centering, and exiting slides.
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function ProjectCarousel({ projects, className }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    // Calculate new index with wrap-around behavior.
    let newIndex = activeIndex + newDirection;
    if (newIndex < 0) {
      newIndex = projects.length - 1;
    } else if (newIndex >= projects.length) {
      newIndex = 0;
    }
    setDirection(newDirection);
    setActiveIndex(newIndex);
  };

  const nextProject = () => paginate(1);
  const prevProject = () => paginate(-1);

  return (
    <div className={`relative w-full min-h-full overflow-hidden rounded-xl ${className}`}>
      <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#102015]/50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#102015]/50 to-transparent pointer-events-none" />

      {/* Navigation buttons */}
      <button
        onClick={prevProject}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-all hover:bg-black/70"
        aria-label="Previous project"
      >
        <IoChevronBack className="h-6 w-6" />
      </button>
      <button
        onClick={nextProject}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-all hover:bg-black/70"
        aria-label="Next project"
      >
        <IoChevronForward className="h-6 w-6" />
      </button>

      {/* Carousel container for animated slide */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={projects[activeIndex].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'tween', duration: 0.6 },
              opacity: { duration: 0.6 },
            }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <ProjectCard project={projects[activeIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              // Update the carousel with manual pagination.
              const newDirection = index > activeIndex ? 1 : -1;
              setDirection(newDirection);
              setActiveIndex(index);
            }}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? "bg-[#a0f5d1] w-6" : "w-2 bg-white/30"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex w-full h-full flex-col overflow-hidden rounded-xl">
      <div className="relative h-[40%] w-full">
        <Image
          src={project.src || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-scale-down rounded-t-xl shadow-2xl sm:mt-4"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex flex-col justify-between md:pt-12 p-6 max-h-[60%] bg-[#0f1a14]/80 backdrop-blur-md rounded-b-xl border border-[#a0f5d1]/10">
        <div>
          <h3 className="text-2xl font-bold text-[#a0f5d1] md:text-3xl mb-3 text-center">
            {project.title}
          </h3>
          <p className="text-[#dbebe7] text-sm md:text-base font-light">{project.description}</p>
        </div>
        <a
          href={project.URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-md border border-[#a0f5d1]/20 bg-[#a0f5d1]/10 px-4 py-2 text-sm font-medium text-[#a0f5d1] transition-colors hover:bg-[#a0f5d1]/20 focus:outline-none focus:ring-2 focus:ring-[#a0f5d1]/30 focus:ring-offset-2 focus:ring-offset-[#102015] group"
        >
          View Project
          <FiExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
 