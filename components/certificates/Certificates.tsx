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
    <section className="relative flex h-full items-center justify-between overflow-hidden md:px-10">
      {certificates.map((certificate) => (
        <div
          className="absolute hidden md:flex items-center justify-center h-full top-0 left-0 w-full"
          key={certificate.id}
        >
          <Image
            src={certificate.image}
            alt={`${certificate.name} certificate`}
            className={`w-auto h-[500px] transition-all duration-500 ${
              currentCertificate === certificate.id ? "opacity-5" : "opacity-0"
            }`}
          />
        </div>
      ))}
      <RiArrowLeftSFill
        onClick={handleLeft}
        className="cursor-pointer text-3xl md:text-5xl h-full text-light-content dark:text-dark-content z-20"
      />
      {certificates.map((certificate) => (
        <div
          key={certificate.id}
          className={`${
            currentCertificate !== certificate.id ? "opacity-0" : "opacity-100"
          } absolute w-full px-8 flex justify-center h-full top-0 left-0 items-center transition-all duration-1000`}
        >
          {currentCertificate === certificate.id && (
            <Certificate data={certificate} />
          )}
        </div>
      ))}
      <RiArrowRightSFill
        onClick={handleRight}
        className="cursor-pointer text-3xl md:text-5xl h-full text-light-content dark:text-dark-content z-10"
      />
    </section>
  );
};

export default Certificates;
