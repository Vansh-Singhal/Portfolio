"use client";

import {
  FaCloud,
  FaCode,
  FaDesktop,
  FaFileSignature,
  FaSearch,
} from "react-icons/fa";
import { ContainerTextFlip } from "./ui/containter-text-flip";
import { GridItem } from "./ui/grid-items";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const skillsData = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <FaDesktop />,
    title: "WEB DEVELOPMENT",
    description:
      "Built responsive, user-friendly websites and web apps using modern frontend technologies such as HTML 5, CSS 3, JavaScript and TypeScript.",
    tools: [
      {
        id: 1,
        name: "HTML",
        image:
          "https://imgs.search.brave.com/apTYUGYQEHeUpo7xWoVibTLfkMA7xZQPo8VUSE-w2F8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc1LzkyLzIz/LzM2MF9GXzc1OTIy/MzQxX0VRNWlyNDgw/MXhISzAweXNtNVlo/WjhudGE5akdqTnRv/LmpwZw",
      },
      {
        id: 2,
        name: "CSS",
        image:
          "https://imgs.search.brave.com/AKQRfFgXNs2RUmDknJwsB5YxngxjVIwvlPv34T1hgYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc1LzkyLzIz/LzM2MF9GXzc1OTIy/MzM2X0p6MlFnTk94/N2RuUmVhOVpJNnlR/VER0bjF2SHE1ZWpG/LmpwZw",
      },
      {
        id: 3,
        name: "JavaScript",
        image:
          "https://imgs.search.brave.com/RYyTBSujGcPv02Sx5pgXMzKoNiMKKIK1-sBkBXB1Vf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc1LzkyLzIz/LzM2MF9GXzc1OTIy/MzMyX1Y4amlKOUky/RjlkOUhxVjdSdFB6/VUF4cjVzN1lIV09k/LmpwZw",
      },
      {
        id: 4,
        name: "TypeScript",
        image:
          "https://imgs.search.brave.com/jS7h-pquRNeBHg6UF2Q6yimewwX-KpBvlWeqa8O3yf8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMjQxNS9Q/TkcvNTEyL3R5cGVz/Y3JpcHRfb3JpZ2lu/YWxfbG9nb19pY29u/XzE0NjMxNy5wbmc",
      },
    ],
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <FaSearch />,
    title: "Backend Languages",
    description:
      "Developed scalable backend systems with Node.js, Express, Python, Java, C++ and Spring Boot.",
    tools: [
      {
        id: 5,
        name: "Node.js",
        image:
          "https://imgs.search.brave.com/BMMlpw3DSs23gbBZualurafinp6qydW74K3OdLboJBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2pv/cmRhbnBhcGFsZW8v/d2ViLWxvZ29zL21h/c3Rlci9sb2dvcy9u/b2RlanMtaWNvbi5z/dmc",
      },
      {
        id: 6,
        name: "Express",
        image:
          "https://imgs.search.brave.com/xrlC1uXtSPUvNS04cqCkzQIpEovjb82W_vItjxceu4w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VheWVyZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDQvZXhwcmVzc2pz/LWxvZ28uc3Zn",
      },
      {
        id: 7,
        name: "Python",
        image:
          "https://imgs.search.brave.com/N_Zg07Rpn5HfangKjIP4NRsfAFB6qZNlxPxw-Ic7joY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE2L2Q5/LzUwLzE2ZDk1MGJj/ZGY1OGQxOWE2YTAw/M2E5Y2E2YWYyYjRm/LmpwZw",
      },
      {
        id: 8,
        name: "Spring Boot",
        image:
          "https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw",
      },
    ],
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/9]",
    icon: <FaCode />,
    title: "MERN Stack And Next.js",
    description:
      "Built multiple dynamic full-stack applications using MongoDB, Express, React, and Node.js or Next.js with seamless frontend-backend integration.",
    tools: [
      {
        id: 9,
        name: "MongoDB",
        image:
          "https://imgs.search.brave.com/x2jV5KzkWexoWD1GecZSV7O-PPdkiPfuj3Ti0W_zLw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oZHBu/Zy5jb20vaW1hZ2Vz/L2xvZ28tbW9uZ29k/Yi1wbmctbW9uZ29k/Yi1sb2dvLXBuZy00/MDAucG5n",
      },
      {
        id: 10,
        name: "Express",
        image:
          "https://imgs.search.brave.com/xrlC1uXtSPUvNS04cqCkzQIpEovjb82W_vItjxceu4w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VheWVyZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDQvZXhwcmVzc2pz/LWxvZ28uc3Zn",
      },
      {
        id: 11,
        name: "React",
        image:
          "https://imgs.search.brave.com/NRCO29TzAPJm0vyPci3-1fXrC9_cu5rq_eXblYme1GQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aGFzaG5vZGUuY29t/L3Jlcy9oYXNobm9k/ZS9pbWFnZS91cGxv/YWQvdjE2NDc0OTIy/NjY2MzEvckg2eURm/V3lKLnBuZw",
      },
      {
        id: 12,
        name: "Node.js",
        image:
          "https://imgs.search.brave.com/BMMlpw3DSs23gbBZualurafinp6qydW74K3OdLboJBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2pv/cmRhbnBhcGFsZW8v/d2ViLWxvZ29zL21h/c3Rlci9sb2dvcy9u/b2RlanMtaWNvbi5z/dmc",
      },
      {
        id: 13,
        name: "Next.js",
        image:
          "https://imgs.search.brave.com/RaITooh2atOnrJ8eal86_f6rAdIRv6Px7ycl-ReXIWw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Zmx5b251aS5jb20v/ZnktYXNzZXRzL2lj/b25zL25leHRqcy1p/Y29uLnBuZw",
      },
    ],
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]",
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    description:
      "Deployed and maintained web applications using GitHub, AWS, Azure, Docker, Vercel, and Cloudinary for performance and reliability.",
    tools: [
      {
        id: 14,
        name: "Docker",
        image:
          "https://imgs.search.brave.com/9Lh4wGI1rXlQxJ9WAhD5TCxeQoiUkM0WqGxRXE1QMZ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZG9ja2VyLmNvbS9h/cHAvdXBsb2Fkcy8y/MDIzLzA4L2xvZ28t/Z3VpZGUtbG9nb3Mt/MS5zdmc",
      },
      {
        id: 15,
        name: "Vercel",
        image:
          "https://imgs.search.brave.com/oHLMTA-7r9z3y42AQ-DgXAItTjqzWEFaBN45ImB5nuU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3ZlcmNl/bDE4NjguanBn",
      },
      {
        id: 16,
        name: "AWS",
        image:
          "https://imgs.search.brave.com/fwuNjmRE9gMM5ShSY5HEMsHUp6hUwguQVlQdIY3ol3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDgvQW1hem9uLVdl/Yi1TZXJ2aWNlcy1B/V1MtTG9nby03MDB4/Mzk0LnBuZw",
      },
    ],
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/9/3/13]",
    icon: <FaFileSignature />,
    title: "Database Handling",
    description:
      "Managed structured and unstructured data using MySQL, MongoDB, Firebase, and NoSQL for efficient data storage and retrieval.",
    tools: [
      {
        id: 19,
        name: "MySQL",
        image:
          "https://imgs.search.brave.com/RAvPAR0s7hJmvMuXvnSHlELWTPgQDpKqvEEHW3o5WEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmRlYmM0ZmZmM2M2/ZTRiOGI1ZGU4ZDMu/cG5n",
      },
      {
        id: 17,
        name: "MongoDB",
        image:
          "https://imgs.search.brave.com/x2jV5KzkWexoWD1GecZSV7O-PPdkiPfuj3Ti0W_zLw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oZHBu/Zy5jb20vaW1hZ2Vz/L2xvZ28tbW9uZ29k/Yi1wbmctbW9uZ29k/Yi1sb2dvLXBuZy00/MDAucG5n",
      },
      {
        id: 18,
        name: "Firebase",
        image:
          "https://imgs.search.brave.com/a_rPZiE5iJ8cO02gt_CXght_zvhSXtj5p2pCh8xqFrY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXJl/YmFzZS5nb29nbGUu/Y29tL3N0YXRpYy9p/bWFnZXMvYnJhbmQt/Z3VpZGVsaW5lcy9s/b2dvLXZlcnRpY2Fs/LnBuZw",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen max-w-screen px-8 bg-gradient-to-b from-[#151525] via-[#101f01a] to-[#102015] flex flex-col items-center justify-center relative gap-8 overflow-hidden"
    >
      <ContainerTextFlip words={["SKILLS", "EXPERTISE", "TECH STACKS"]} />

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4 xl:max-h-[34rem]">
        {skillsData.map((skill) => (
          <GridItem
            key={skill.title}
            area={skill.area}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            tools={<AnimatedTooltip items={skill.tools} />}
          />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
