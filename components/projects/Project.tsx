import Image, { StaticImageData } from "next/image";
import React from "react";
import phoneMockup from "../../public/responsive mockups/mockup1.png";
import laptopMockup from "../../public/responsive mockups/mockup2.png";
import desktopMockup from "../../public/responsive mockups/mockup3.png";
import { motion } from "framer-motion";
import Button from "../base/Button";
import { SiGithub } from "react-icons/si";
import AnimatedText from "../animatedText/AnimatedText";

interface Props {
  data: {
    id: number;
    name: string;
    images: StaticImageData[];
    description: string;
    stack: string[];
    githubURL: string;
    demoURL: string;
  };
}

const Project = ({ data }: Props) => {
  const laptopAnimation = {
    initial: {
      opacity: 0.7,
      x: -30,
    },
    animate: {
      opacity: 1,
      x: 50,
      transition: {
        duration: 1,
      },
    },
  };

  const phoneAnimation = {
    initial: {
      opacity: 0.7,
      x: 30,
    },
    animate: {
      opacity: 1,
      x: -20,
      transition: {
        duration: 1,
      },
    },
  };

  const reflectionAnimation = {
    initial: {
      opacity: 0,
      x: 150,
    },
    animate: {
      opacity: 1,
      x: -200,
      transition: {
        repeat: Infinity,
        duration: 3,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-10 md:px-5 h-full w-full">
      <div className="flex justify-center items-center pr-10 select-none">
        <div className="flex justify-center items-end">
          <motion.div
            variants={laptopAnimation}
            initial="initial"
            animate="animate"
            className="relative w-28 md:w-56 z-10"
          >
            <div className="absolute top-[5%] left-[12.5%] w-[75%] h-[74%] overflow-hidden">
              <Image
                src={data.images[0]}
                alt={""}
                className="h-full object-cover"
              />
              <motion.div
                variants={reflectionAnimation}
                initial="initial"
                animate="animate"
                className="absolute w-[150%] h-full top-0 bg-gradient-to-r from-[#ffffff00] from-40% via-[#ffffff35] via-50% to-[#ffffff00] to-60%"
              ></motion.div>
            </div>
            <Image src={laptopMockup} alt={""} className="z-20" />
          </motion.div>
          <div className="relative w-28 md:w-56">
            <div className="absolute top-[5%] left-[4%] w-[92%] h-[62%] overflow-hidden">
              <Image src={data.images[0]} alt={""} className="" />
              <motion.div
                variants={reflectionAnimation}
                initial="initial"
                animate="animate"
                className="absolute w-[150%] h-full top-0 bg-gradient-to-r from-[#ffffff00] from-40% via-[#ffffff35] via-50% to-[#ffffff00] to-60%"
              ></motion.div>
            </div>
            <Image src={desktopMockup} alt={""} className="z-20 w-96" />
          </div>
          <motion.div
            variants={phoneAnimation}
            initial="initial"
            animate="animate"
            className="relative w-7 md:w-14"
          >
            <div className="absolute flex top-[2.5%] left-[6%] w-[88%] rounded-[5%] h-[95%] overflow-hidden">
              <Image src={data.images[1]} alt={""} className="" />
              <motion.div
                variants={reflectionAnimation}
                initial="initial"
                animate="animate"
                className="absolute w-[150%] h-full top-0 bg-gradient-to-r from-[#ffffff00] from-40% via-[#ffffff35] via-50% to-[#ffffff00] to-60%"
              ></motion.div>
            </div>
            <Image src={phoneMockup} alt={""} className="z-20" />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-2 md:gap-6 items-center">
          <AnimatedText text={data.name} hover={true} />
          <div className="flex md:gap-2 gap-1 flex-wrap md:w-[600px] justify-center">
            {data.stack.map((tech, index) => (
              <span
                className="bg-light-content/90 dark:font-semibold text-xs md:text-base px-2 md:rounded-md rounded-sm text-light-primary dark:text-dark-primary dark:bg-dark-content/90"
                key={index}
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm sm:text-base md:w-[600px] text-light-content dark:text-dark-content">
            {data.description}
          </p>
          <div className="flex gap-2">
            <Button target="_blank" href={data.demoURL}>
              demo
            </Button>
            <Button target="_blank" href={data.githubURL}>
              github <SiGithub />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
