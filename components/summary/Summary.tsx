import Image from "next/image";
import React from "react";
import { MdFileDownload } from "react-icons/md";
import profilePhoto from "../../public/developer-pic-1.png";
import AnimatedText from "../animatedText/AnimatedText";
import Button from "../base/Button";

const Summary = () => {
  return (
    <div className="flex w-full justify-center h-full flex-col md:flex-row items-center md:px-4">
      <Image
        src={profilePhoto}
        alt={"Profile photo"}
        className="w-[250px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px]"
        priority={true}
      />
      <div className="w-full md:w-1/2 flex flex-col gap-4 lg:gap-6">
        <AnimatedText text="Turning Vision Into Reality With Code And Design." />
        <p className="lg:text-2xl text-base text-center text-light-content dark:text-dark-content">
          As a Front-end developer, I am dedicated to turning ideas into
          innovative web applications. Explore my latest projects and articles,
          showcasing my expertise in React.js and web development.
        </p>
        <div className="w-full flex justify-center items-center gap-3 lg:text-lg">
          <Button href={"/mehrdButtondazizkhani.pdf"} download target="_blank">
            Resume <MdFileDownload />
          </Button>
          <a
            href="mailto:mehrdad.azizkhani@gmail.com"
            className="text-light-content dark:text-dark-content font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Summary;
