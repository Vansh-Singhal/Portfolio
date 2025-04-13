import { ReactNode } from "react";

interface TextUnderlineProps {
  text: string;
  classes?: string;
}

const TextUnderline: React.FC<TextUnderlineProps> = ({ text, classes = "" }) => {
  return (
    <span
      className={`relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${classes}`}
    >
      {text}
    </span>
  );
};

export default TextUnderline;
