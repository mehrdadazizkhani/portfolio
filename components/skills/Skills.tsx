import Skill from "./Skill";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

const Skills = () => {
  return (
    <section id="skills" className="relative h-full w-full snap-center">
      <Skill />
      {/* <RiArrowUpSFill className="absolute text-3xl md:text-5xl text-light-content dark:text-dark-content right-0 animate-pulse cursor-pointer" />
      <RiArrowDownSFill className="absolute text-3xl md:text-5xl text-light-content dark:text-dark-content right-0 bottom-0 animate-pulse cursor-pointer" /> */}
    </section>
  );
};

export default Skills;
