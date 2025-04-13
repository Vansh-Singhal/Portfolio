"use client";

import { FaSearch } from "react-icons/fa";
import { ContainerTextFlip } from "./ui/containter-text-flip";
import { GridItem } from "./ui/grid-items";

const Skills = () => {
  return (
    <section
      id="skills"
      className="md:h-screen max-w-screen px-8 bg-gradient-to-b from-[#151525] via-[#101f01a] to-[#102015] flex flex-col items-center justify-center relative gap-8 overflow-hidden"
    >
      <ContainerTextFlip
        words={["SKILLS", "EXPERTISE", "TECH STACKS"]}
      />

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4 xl:max-h-[34rem]">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<FaSearch />}
          title="WEB DEVELOPMENT"
          description="Built responsive, user-friendly websites and web apps using modern frontend technologies such as HTML 5,CSS 3, JavaScript and TypeScript."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<FaSearch />}
          title="Backend Languages"
          description="Developed scalable backend systems with Node.js, Express, Python, Java, C++ and Spring Boot."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/9]"
          icon={<FaSearch />}
          title="MERN STACK And NEXT.JS"
          description="Built multiple dynamic full-stack applications using MongoDB, Express, React, and Node.js or Next.js with seamless frontend-backend integration."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]"
          icon={<FaSearch />}
          title="Cloud & DevOps"
          description="Deployed and maintained web applications using GitHub, AWS, Azure, Docker, Vercel, and Cloudinary for performance and reliability."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/9/3/13]"
          icon={<FaSearch />}
          title="Database Handling"
          description="Managed structured and unstructured data using MySQL, MongoDB, Firebase, and NoSQL for efficient data storage and retrieval."
        />
      </ul>
    </section>
  );
};

export default Skills;
