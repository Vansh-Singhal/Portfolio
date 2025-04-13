"use client";

import { FaSearch } from "react-icons/fa";
import { ContainerTextFlip } from "./ui/containter-text-flip";
import { GridItem } from "./ui/grid-items";

const Skills = () => {
  return (
    <section
      id="skills"
      className="md:h-screen max-w-screen px-8 bg-gradient-to-b from-[#151525] via-[#101f01a] to-[#102015] flex flex-col items-center justify-center relative gap-8 overflow-hidden"
    >
      <ContainerTextFlip
        words={["SKILLS", "EXPERTISE", "TECH STACKS"]}
      />

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4 xl:max-h-[34rem]">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<FaSearch />}
          title="Do things the right way"
          description="Running out of copy so I'll write anything."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<FaSearch />}
          title="The best AI code editor ever."
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/9]"
          icon={<FaSearch />}
          title="You should buy Aceternity UI Pro"
          description="It's the best money you'll ever spend"
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]"
          icon={<FaSearch />}
          title="This card is also built by Cursor"
          description="I'm not even kidding. Ask my mom if you don't believe me."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/9/3/13]"
          icon={<FaSearch />}
          title="Coming soon on Aceternity UI"
          description="I'm writing the code as I record this, no shit."
        />
      </ul>
    </section>
  );
};

export default Skills;
