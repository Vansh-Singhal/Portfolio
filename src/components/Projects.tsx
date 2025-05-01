"use client";

import { motion } from "motion/react";
import TextUnderline from "./ui/text-underline";
import HoverButton from "./ui/hover-button";
import { FaGithub } from "react-icons/fa";
import ProjectCarousel from "./ProjectCarousel";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  src: string;
  URL: string;
  category: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "HIREBUS",
      description:
        "HireBus is a MERN stack job-hunting platform that connects job seekers with recruiters. Users can browse and apply for jobs, while recruiters can post listings and manage applicants seamlessly.",
      src: "/hirebus.jpg",
      URL: "https://hirebus-4mvb.onrender.com/",
      category: "Web Application",
    },
    {
      id: 2,
      title: "SITCOIN",
      description:
        "Sitcoin is a MERN-stack powered UPI-like payment app that enables secure, real-time money transfers via contacts, bank accounts, or QR codes, with support for UPI reversals. It offers a seamless user experience with a clean, intuitive interface.",
      src: "/sitcoin.png",
      URL: "https://sit-coin.onrender.com/",
      category: "Mobile Application",
    },
    {
      id: 3,
      title: "PORTFOLIO",
      description:
        "This portfolio is built with Next.js and TypeScript, leveraging SSR and type safety for performance and reliability. Visuals are powered by Aceternity, enabling interactive 3D elements and smooth animations with modern WebGL techniques.",
      src: "/portfolio.png",
      URL: "/",
      category: "Personal Website",
    },
    {
      id: 4,
      title: "BLACKJACK",
      description:
        "A browser-based card game uses HTML, Tailwind CSS, and JavaScript, following the MVC (Model-View-Controller) architecture.",
      src: "/blackjack.png",
      URL: "https://blackjack-game-fsdproject.vercel.app/",
      category: "Game",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen max-w-screen p-8 bg-gradient-to-b from-[#102015] via-[#0a1a0a] to-[#000] flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden relative md:gap-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full md:max-w-1/2 my-10 p-2 rounded-2xl space-y-8"
      >
        <ProjectCarousel
          projects={projects}
          className="h-[500px] md:h-[600px] shadow-white/30 shadow-2xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        className="my-10 w-full md:max-w-1/2 h-full p-2 rounded-2xl space-y-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-transparent">
          <TextUnderline
            text="My Projects"
            classes="bg-gradient-to-r to-[#a0f5d1] from-[#a9afff] bg-clip-text"
          />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-[#dbebe7] text-sm md:text-md lg:text-lg space-y-4 leading-relaxed tracking-wide font-light"
        >
          <p>
            I love using my projects as a space to explore new technologies and
            level up my current stack. Whether it’s building rich UIs with React
            and Three.js or handling backend logic with Node.js or Spring Boot,
            I’m always experimenting and pushing boundaries...
          </p>
          <p>
            I’m also big on learning by doing — constantly diving into tools
            like Docker, AWS, Firebase, or MongoDB and finding ways to integrate
            them into my work...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="md:pt-4 w-full flex flex-row"
        >
          <Link href="https://github.com/Vansh-Singhal" target="_blank">
            <HoverButton text="More Projects" icon={<FaGithub size={25} />} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
