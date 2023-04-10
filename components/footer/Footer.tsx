import React from "react";
import SincWave from "../sincWave/SincWave";

const Footer = () => {
  return (
    <footer className="container mx-auto h-14 md:h-24 flex justify-center text-xs lg:text-base md:justify-end items-center md:pr-20 gap-4 overflow-hidden">
      <div className="relative text-light-content dark:text-dark-content whitespace-nowrap z-10 w-[300px] md:w-[500px] h-40">
        <div className="absolute w-full h-full top-0 flex left-0 bg-light-primary dark:bg-dark-primary text-light-content dark:text-dark-content">
          <SincWave
            color={"#3563E9"}
            thickness={0.5}
            scale={16}
            frequency={0.02}
            amplitudesMax={[120, 90, 60, 40, 200]}
            animationSpeed={0.05}
            animationAmplitude={0.2}
          />
        </div>
        <div className="absolute text-light-content font-bold dark:text-dark-content text-sm flex justify-center items-center h-full w-full z-10 top-0 left-0 uppercase drop-shadow-md shadow-[red]">
          mehrdad azizkhani
        </div>
      </div>
    </footer>
  );
};

export default Footer;
