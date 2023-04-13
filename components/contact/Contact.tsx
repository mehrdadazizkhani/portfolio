import Button from "../base/Button";
import { SiGmail } from "react-icons/si";
import { SlScreenSmartphone } from "react-icons/sl";
import AnimatedText from "../animatedText/AnimatedText";

const Contact = () => {
  return (
    <div className="flex w-full h-full justify-center items-center flex-col gap-5">
      <AnimatedText text={"Let's Collaborate"} hover={true} />
      <p className="md:w-[600px] text-light-content dark:text-dark-content">
        Thank you for visiting my portfolio! Whether you have a project in mind
        or just want to connect, I'm happy to hear from you. As a front-end
        developer, I offer website design and development services. Let's
        collaborate to bring your ideas to life! Contact me via email or social
        media, and I'll get back to you as soon as possible.
      </p>
      <div className="flex gap-2 items-center flex-col md:flex-row">
        <Button href="mailto:mehrdad.azizkhani@gmail.com">
          <SiGmail /> mehrdad.azizkhani@gmail.com
        </Button>
        <Button href="tel:989195163559">
          <SlScreenSmartphone /> +98 919 516 3559
        </Button>
      </div>
    </div>
  );
};

export default Contact;
