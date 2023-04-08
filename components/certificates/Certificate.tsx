import Image, { StaticImageData } from "next/image";
import Button from "../base/Button";
import AnimatedText from "../animatedText/AnimatedText";

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
  return (
    <div className="flex flex-col items-center justify-between gap-3 text-light-content dark:text-dark-content w-full md:w-[400px] z-10">
      <div className="mb-12 flex items-center justify-center">
        <div className="relative aspect-square w-16">
          <div className="absolute -bottom-[40px] left-[calc(50%-20px)] border-[20px] border-light-content border-b-[transparent] dark:border-dark-content dark:border-b-[transparent]"></div>
          <div className="absolute h-full w-full rotate-0 bg-light-content dark:bg-dark-content"></div>
          <div className="absolute h-full w-full rotate-[18deg] bg-light-content dark:bg-dark-content"></div>
          <div className="absolute h-full w-full rotate-[36deg] bg-light-content dark:bg-dark-content"></div>
          <div className="absolute h-full w-full rotate-[54deg] bg-light-content dark:bg-dark-content"></div>
          <div className="absolute h-full w-full rotate-[72deg] bg-light-content dark:bg-dark-content"></div>
          <div className="absolute h-full w-full rounded-full bg-dark-content dark:bg-light-content"></div>
          <Image
            src={data.logo}
            alt={`${data.name} certificate`}
            className="absolute h-full w-full rounded-full"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 items-center">
        <AnimatedText text={data.name} />
        <p className="flex w-full justify-between">
          <span className="font-semibold">Credential ID</span>{" "}
          {data.credentialId}
        </p>
        <p className="flex w-full justify-between">
          <span className="font-semibold">Issue date</span> {data.date}
        </p>
        <p className="flex w-full justify-between">
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
