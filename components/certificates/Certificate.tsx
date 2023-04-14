import Image, { StaticImageData } from "next/image";
import Button from "../base/Button";
import AnimatedText from "../animatedText/AnimatedText";
import { motion } from "framer-motion";

interface Props {
  data: {
    id: number;
    name: string;
    logo: StaticImageData;
    image: StaticImageData;
    organization: string;
    date: string;
    credentialId: string;
    credentialURL: string;
  };
}

const Certificate = ({ data }: Props) => {
  const reflectionAnimation = {
    initial: {
      opacity: 0,
      x: 150,
    },
    animate: {
      opacity: 1,
      x: -300,
      transition: {
        repeat: Infinity,
        duration: 3,
      },
    },
  };

  const frameAnimation = {
    initial: {
      opacity: 0.7,
      y: -30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="flex flex-col items-center justify-between gap-6 text-light-content dark:text-dark-content w-full z-10">
      <motion.div
        variants={frameAnimation}
        initial="initial"
        animate="animate"
        className="relative w-[200px] xl:w-[300px] p-4 xl:p-6 bg-light-primary dark:bg-dark-primary border-[6px] xl:border-[10px] border-dark-primary dark:border-light-primary shadow-md xl:shadow-lg shadow-light-content overflow-hidden"
      >
        <Image src={data.image} alt={data.name} />
        <motion.div
          variants={reflectionAnimation}
          initial="initial"
          animate="animate"
          className="absolute w-[150%] h-full top-0 bg-gradient-to-r from-[#ffffff00] from-40% via-[#ffffff35] via-50% to-[#ffffff00] to-60%"
        ></motion.div>
      </motion.div>
      <div className="flex md:w-1/2 w-full flex-col gap-4 items-center text-sm md:text-base">
        <AnimatedText text={data.name} />
        <p className="flex flex-col w-full justify-center items-center md:flex-row md:justify-between">
          <span className="font-semibold">Credential ID</span>{" "}
          {data.credentialId}
        </p>
        <p className="flex flex-col w-full justify-center items-center md:flex-row md:justify-between">
          <span className="font-semibold">Issue date</span> {data.date}
        </p>
        <p className="flex flex-col w-full justify-center items-center md:flex-row md:justify-between">
          <span className="font-semibold">Organization</span>{" "}
          {data.organization}
        </p>
        <Button target="_blank" href={data.credentialURL}>
          original version
        </Button>
      </div>
    </div>
  );
};

export default Certificate;
