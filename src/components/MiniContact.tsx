"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

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

  return (
    <div className="fixed bottom-0 right-0 m-8 p-2 mr-0 sm:mr-8 flex flex-row gap-4 bg-gray-300/30 text-[#98e8ef]">
      <button
        onClick={() => copyToClipboard(contact)}
        className="text-2xl cursor-pointer"
        title="Copy phone number"
      >
        <MdPhone />
      </button>

      <button
        onClick={() => copyToClipboard(email)}
        className="text-2xl cursor-pointer"
        title="Copy email"
      >
        <MdEmail />
      </button>

      <div className="min-h-full border-2 border-white" />

      <Link
        href="https://linkedin.com/in/vansh-singhal-182939289/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl cursor-pointer"
      >
        <FaLinkedin />
      </Link>

      <Link
        href="https://github.com/Vansh-Singhal"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl cursor-pointer"
      >
        <FaGithub />
      </Link>

      <Link
        href="https://leetcode.com/u/vansh_singhal_11/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl cursor-pointer"
      >
        <SiLeetcode />
      </Link>
    </div>
  );
};

export default MiniContact;
