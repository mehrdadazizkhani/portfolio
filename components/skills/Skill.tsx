import { ReactElement } from "react";
import {
  SiCss3,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiAdobephotoshop,
  SiAdobeindesign,
} from "react-icons/si";

interface Props {
  skill: {
    id: number;
    name: string;
    slug: string;
    skillLevel: number;
  };
}

const Skill = ({ skill }: Props) => {
  const iconMap: { [key: string]: ReactElement } = {
    html: <SiHtml5 />,
    css: <SiCss3 />,
    js: <SiJavascript />,
    ts: <SiTypescript />,
    react: <SiReact />,
    next: <SiNextdotjs />,
    chakra: <SiChakraui />,
    redux: <SiRedux />,
    git: <SiGit />,
    sass: <SiSass />,
    tailwind: <SiTailwindcss />,
    graph: <SiGraphql />,
    ps: <SiAdobephotoshop />,
    indesign: <SiAdobeindesign />,
  };
  return (
    <div className="relative group flex w-32 md:w-52 justify-center p-1 md:p-3 lg:text-2xl overflow-hidden text-base items-center gap-1 md:gap-2 text-light-primary dark:text-dark-primary rounded-md cursor-pointer whitespace-nowrap">
      <div className="absolute -z-[2] h-full w-full top-0 left-0 bg-light-content dark:bg-dark-content"></div>
      <div
        className="absolute bg-light-accent -z-[1] h-full top-0 -left-full group-hover:left-0 transition-all duration-300"
        style={{ width: `${skill.skillLevel}%` }}
      ></div>
      {iconMap[skill.slug]}
      {skill.name}
    </div>
  );
};

export default Skill;
