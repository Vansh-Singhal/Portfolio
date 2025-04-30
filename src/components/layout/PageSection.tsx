import { ReactNode } from "react";
import ScrollReveal from "../ui/ScrollReveal";

interface PageSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  containerClassName?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const PageSection = ({
  children,
  id,
  className = "",
  containerClassName = "",
  delay = 0,
  direction = "up"
}: PageSectionProps) => {
  return (
    <section
      id={id}
      className={`min-h-screen w-full relative py-16 ${className}`}
    >
      <ScrollReveal
        delay={delay}
        direction={direction}
        className={`container mx-auto px-4 md:px-8 ${containerClassName}`}
      >
        {children}
      </ScrollReveal>
    </section>
  );
};

export default PageSection;