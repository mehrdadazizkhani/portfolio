import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto h-14 md:h-24 flex justify-center text-xs lg:text-base md:justify-end items-center md:pr-16 gap-4">
      <span className="text-light-content dark:text-dark-content whitespace-nowrap bg-light-primary dark:bg-dark-primary z-10 p-3">
        Designed by Mehrdad Azizkhani
      </span>
    </footer>
  );
};

export default Footer;
