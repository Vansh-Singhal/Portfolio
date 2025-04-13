"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { motion } from "motion/react";

const MiniContact = () => {
  const email = "vansh.singhal@hotmail.com";
  const contact = "+91 9773699880";

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`${text} copied to clipboard`);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  const iconVariants = {
    rest: { scale: 1, transition: { type: "spring", stiffness: 300 } },
    hover: { scale: 1.25, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 6, duration: 0.6 }}
      className="fixed bottom-0 right-0 m-8 p-2 mr-0 sm:mr-8 flex flex-row gap-4 text-[#98e8ef] rounded-md backdrop-blur-md bg-white/10 border border-white/30 shadow-lg"
    >
      <motion.button
        onClick={() => copyToClipboard(contact)}
        title="Copy phone number"
        variants={iconVariants}
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        className="text-2xl cursor-pointer"
      >
        <MdPhone />
      </motion.button>

      <motion.button
        onClick={() => copyToClipboard(email)}
        title="Copy email"
        variants={iconVariants}
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        className="text-2xl cursor-pointer"
      >
        <MdEmail />
      </motion.button>

      <div className="min-h-full border-l-2 border-white" />

      <motion.div
        variants={iconVariants}
        initial="rest"
        whileHover="hover"
        whileTap="hover"
      >
        <Link
          href="https://linkedin.com/in/vansh-singhal-182939289/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl block"
        >
          <FaLinkedin />
        </Link>
      </motion.div>

      <motion.div
        variants={iconVariants}
        initial="rest"
        whileHover="hover"
        whileTap="hover"
      >
        <Link
          href="https://github.com/Vansh-Singhal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl block"
        >
          <FaGithub />
        </Link>
      </motion.div>

      <motion.div
        variants={iconVariants}
        initial="rest"
        whileHover="hover"
        whileTap="hover"
      >
        <Link
          href="https://leetcode.com/u/vansh_singhal_11/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl block"
        >
          <SiLeetcode />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default MiniContact;
