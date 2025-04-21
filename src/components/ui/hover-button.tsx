import { ReactNode } from "react";

interface HoverButtonProps {
  text: string;
  icon: ReactNode;
}

const HoverButton: React.FC<HoverButtonProps> = ({ text, icon }) => {
  return (
    <div className="relative w-40 h-12 bg-gradient-to-r from-[#a0f5d1] via-[#98e8ef] to-[#a0f5d1] text-black rounded overflow-hidden group data-cursor-hover">
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-full">
        {text}
      </span>

      <span className="absolute inset-0 flex items-center justify-center translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0">
        {icon}
      </span>
    </div>
  );
};

export default HoverButton;
