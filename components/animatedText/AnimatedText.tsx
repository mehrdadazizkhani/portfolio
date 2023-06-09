import { motion } from "framer-motion";
import React from "react";

interface Props {
  text: string;
  hover?: boolean;
}

const textAnimation = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWordAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, hover = false }: Props) => {
  return (
    <motion.div
      className={`flex lg:gap-3 gap-x-2 gap-y-1 w-full font-bold lg:text-4xl text-lg flex-wrap justify-center text-light-content dark:text-dark-content ${
        hover && " md:hover:tracking-widest transition-all duration-300"
      }`}
      variants={textAnimation}
      initial="initial"
      animate="animate"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          className="inline-block"
          variants={singleWordAnimation}
          key={word + "-" + index}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
