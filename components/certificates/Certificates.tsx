import Certificate from "./Certificate";
import certificates from "../../data/certificates";
import { useState } from "react";
import Image from "next/image";

const Certificates = () => {
  const [currentCertificate, setCurrentCertificate] = useState(5);

  return (
    <section className="h-full relative flex flex-col gap-10 justify-between items-center">
      <div className="h-full w-full flex justify-center items-center">
        {certificates.map((certificate) => (
          <div
            className={`w-full ${
              certificate.id !== currentCertificate && "hidden"
            }`}
          >
            <Certificate data={certificate} key={certificate.id} />
          </div>
        ))}
      </div>
      <div className="overflow-x-scroll z-10 scrollbar-none h-36">
        <div className="flex gap-3">
          {certificates.map((certificate) => (
            <Image
              onClick={() => {
                setCurrentCertificate(certificate.id);
              }}
              src={certificate.image}
              alt={certificate.name}
              key={certificate.id}
              className={`w-[150px] cursor-pointer ${
                certificate.id !== currentCertificate && "opacity-40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
