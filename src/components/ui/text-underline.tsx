import { ReactNode } from "react";

interface TextUnderlineProps {
  text: string;
}

const TextUnderline: React.FC<TextUnderlineProps> = ({ text }) => {
  return (
    <span className="relative text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
      {text}
    </span>
  );
};

export default TextUnderline;
