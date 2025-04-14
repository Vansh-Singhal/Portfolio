"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(160, 245, 209)", // #a0f5d1 - Mint Frost
    "rgb(150, 239, 219)", // Bright Seafoam
    "rgb(140, 233, 228)", // Pale Aqua
    "rgb(135, 227, 234)", // Soft Teal Glow
    "rgb(130, 221, 238)", // Chill Sky
    "rgb(125, 215, 240)", // Fresh Ice
    "rgb(120, 209, 242)", // Frosted Cyan
    "rgb(115, 203, 243)", // Arctic Surf
    "rgb(110, 197, 244)", // Cool Glacier
    "rgb(104, 192, 245)"  // #98e8ef - Ice Breeze
  ]
  ;

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
