import Certificate from "./Certificate";
import certificates from "../../data/certificates";
import Image from "next/image";
import { useState } from "react";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const Certificates = () => {
  const [currentCertificate, setCurrentCertificate] = useState(1);

  const handleLeft = () => {
    setCurrentCertificate(
      currentCertificate === 1 ? certificates.length : currentCertificate - 1
    );
  };

  const handleRight = () => {
    setCurrentCertificate(
      currentCertificate === certificates.length ? 1 : currentCertificate + 1
    );
  };
  return (
    <section
      id="certificates"
      className="relative flex h-full items-center justify-between overflow-hidden md:px-10 snap-center"
    >
      <RiArrowLeftSFill
        onClick={handleLeft}
        className="cursor-pointer text-3xl md:text-5xl h-full text-light-content dark:text-dark-content z-20"
      />
      <div className="relative w-full">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className={`${
              currentCertificate !== certificate.id
                ? "opacity-0"
                : "opacity-100"
            } absolute w-full px-8 flex justify-center h-full top-0 left-0 items-center transition-all duration-1000`}
          >
            {currentCertificate === certificate.id && (
              <Certificate data={certificate} />
            )}
          </div>
        ))}
      </div>
      <RiArrowRightSFill
        onClick={handleRight}
        className="cursor-pointer text-3xl md:text-5xl h-full text-light-content dark:text-dark-content z-10"
      />
    </section>
  );
};

export default Certificates;
