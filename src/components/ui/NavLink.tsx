import { motion } from "motion/react";
import { GoDot } from "react-icons/go";
import TextUnderline from "./text-underline";
import { navLinkAnimation } from "@/utils/animations";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  text: string;
  onClick?: () => void;
}

const NavLink = ({ href, text, onClick }: NavLinkProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const baseClasses =
    "px-2 py-2 text-md md:text-lg hover:text-white/70 flex items-center gap-2 cursor-pointer";

  const handleClick = () => {
    setIsClicked(true);
    const element = document.querySelector(href);
    if (element) {
      setTimeout(
        () => element.scrollIntoView({ behavior: "smooth", block: "start" }),
        1000
      );
    }
    onClick?.();
    setTimeout(() => setIsClicked(false), 1800);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={navLinkAnimation.initial}
      animate={isClicked ? navLinkAnimation.clicked : navLinkAnimation.normal}
      whileHover={{ scale: 1.05 }}
      className={baseClasses}
      style={{ transformOrigin: "left center" }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
      aria-label={`Navigate to ${text} section`}
    >
      <GoDot className="shrink-0" aria-hidden="true" />
      <TextUnderline text={text} classes="text-white" />
    </motion.div>
  );
};

export default NavLink;
