"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./canvas/Earth";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import TextUnderline from "./ui/text-underline";
import { LayoutGrid } from "./ui/layout-grid";
import Link from "next/link";
import { IoIosNavigate } from "react-icons/io";

const SkeletonOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Email</p>
    <Link
      href="mailto:vanshsinghal@hotmail.com"
      className="font-normal text-base my-4 max-w-lg text-neutral-200 hover:text-[#98e8ef] transition duration-300 flex gap-2"
    >
      vanshsinghal@hotmail.com <IoIosNavigate size={20} />
    </Link>
  </div>
);

const SkeletonTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Contact No.</p>
    <Link
      href="tel:+919773699880"
      className="font-normal text-base my-4 max-w-lg text-neutral-200 hover:text-[#98e8ef] transition duration-300 flex gap-2"
    >
      +91 9773699880 <IoIosNavigate size={20} />
    </Link>
  </div>
);

const SkeletonThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Instagram</p>
    <Link
      href="https://www.instagram.com/imma.vansh/"
      className="font-normal text-base my-4 max-w-lg text-neutral-200 hover:text-[#98e8ef] transition duration-300 flex gap-2"
    >
      https://www.instagram.com <IoIosNavigate size={20} />
    </Link>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">LinkedIn</p>
    <Link
      href="https://linkedin.com/in/vansh-singhal-182939289/"
      className="font-normal text-base my-4 max-w-lg text-neutral-200 hover:text-[#98e8ef] transition duration-300 flex gap-2"
    >
      https://www.linkedin.com <IoIosNavigate size={20} />
    </Link>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 cursor-pointer",
    thumbnail:
      "https://images.unsplash.com/photo-1584543515885-b8981dbf0b5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 cursor-pointer",
    thumbnail:
      "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1 cursor-pointer",
    thumbnail:
      "https://images.unsplash.com/photo-1596526131090-bcbe09e432d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 cursor-pointer",
    thumbnail:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative h-screen max-w-screen flex flex-col lg:flex-row gap-10 overflow-hidden bg-black"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full lg:w-1/2 h-full p-12 flex flex-col gap-6"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-transparent pl-8">
          <TextUnderline
            text="Contact Me"
            classes="bg-gradient-to-r from-[#a0f5d1] to-[#98e8ef] bg-clip-text"
          />
        </h2>

        <LayoutGrid cards={cards} />
      </motion.div>

      {/* Right Column: EarthCanvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.5)}
        className="hidden lg:block relative z-10 flex-1 h-full max-w-1/2"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
};

export default Contact;
