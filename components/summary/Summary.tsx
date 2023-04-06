import Image from "next/image";
import React from "react";

import profilePhoto from "../../public/developer-pic-1.png";
import AnimatedText from "../animatedText/AnimatedText";

const Summary = () => {
  return (
    <section className="container mx-auto flex h-full items-center">
      <Image src={profilePhoto} alt={"Profile photo"} />
      <div>
        <AnimatedText text="Turning Vision Into Reality With Code And Design." />
        <p className="text-2xl text-light-content dark:text-dark-content">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <div>
          <a href="" target="_blank" download>
            Resume
          </a>
          <a href="mailto:mehrdad.azizkhani@gmail.com">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Summary;
