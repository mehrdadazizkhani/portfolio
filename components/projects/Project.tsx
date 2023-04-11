import Image, { StaticImageData } from "next/image";
import React from "react";
import phoneMockup from "../../public/responsive mockups/mockup1.png";
import laptopMockup from "../../public/responsive mockups/mockup2.png";
import desktopMockup from "../../public/responsive mockups/mockup3.png";

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
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-56">
        <div className="absolute bg-light-accent top-[5%] left-[4%] w-[92%] h-[62%]">
          <Image src={data.images[0]} alt={""} className="" />
        </div>
        <Image src={desktopMockup} alt={""} className="z-20 w-96" />
      </div>
      <div className="relative w-56">
        <div className="absolute bg-light-accent top-[5%] left-[12.5%] w-[75%] h-[74%]">
          <Image
            src={data.images[0]}
            alt={""}
            className="h-full object-cover"
          />
        </div>
        <Image src={laptopMockup} alt={""} className="z-20" />
      </div>
      <div className="relative w-56">
        <div className="absolute flex bg-light-accent top-[2.5%] left-[6%] w-[88%] rounded-[5%] h-[95%] overflow-hidden">
          <Image src={data.images[1]} alt={""} className="" />
        </div>
        <Image src={phoneMockup} alt={""} className="z-20" />
      </div>
    </div>
  );
};

export default Project;
