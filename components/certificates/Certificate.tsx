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
    <div className="text-light-content h-full flex-col md:flex-row dark:text-dark-content md:px-20 flex gap-3 justify-between items-center">
      <div className="md:w-1/2 hidden md:block">
        <Image src={data.image} alt={`${data.name} certificate`} />
      </div>
      <div className="flex flex-col gap-3 w-full md:w-1/2">
        <AnimatedText text={data.name} />
        <p className="flex justify-between w-full">
          <span className="font-semibold">Credential ID</span>{" "}
          {data.credentialId}
        </p>
        <p className="flex justify-between w-full">
          <span className="font-semibold">Issue date</span> {data.date}
        </p>
        <p className="flex justify-between w-full">
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
