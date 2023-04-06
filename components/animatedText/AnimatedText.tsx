import { motion } from "framer-motion";
import React from "react";

interface Props {
  text: string;
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

const AnimatedText = ({ text }: Props) => {
  return (
    <motion.div
      className="flex gap-3 text-4xl capitalize text-light-content dark:text-dark-content"
      variants={textAnimation}
      initial="initial"
      animate="animate"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          className="inline-block"
          variants={singleWordAnimation}
          initial="initial"
          animate="animate"
          key={word + "-" + index}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
