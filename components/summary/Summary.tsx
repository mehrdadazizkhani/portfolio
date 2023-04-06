import Image from "next/image";
import React from "react";

import profilePhoto from "../../public/developer-pic-1.png";
import AnimatedText from "../animatedText/AnimatedText";

const Summary = () => {
  return (
    <div className="flex w-full justify-center flex-col md:flex-row h-full items-center px-4">
      <div>
        <Image
          src={profilePhoto}
          alt={"Profile photo"}
          className="w-[350px] md:w-[500px]"
        />
      </div>
      <div className="w-full md:w-1/2">
        <AnimatedText text="Turning Vision Into Reality With Code And Design." />
        <p className="md:text-2xl text-base text-center text-light-content dark:text-dark-content">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <div className="w-full flex justify-center items-center gap-3">
          <a href="" target="_blank" download>
            Resume
          </a>
          <a href="mailto:mehrdad.azizkhani@gmail.com">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Summary;
