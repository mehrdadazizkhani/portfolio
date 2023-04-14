import AnimatedText from "../animatedText/AnimatedText";
import Image from "next/image";
import profilePhoto from "../../public/developer-pic-1.png";
import Button from "../base/Button";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-full overflow-y-scroll scrollbar-none p-2 snap-center flex justify-center items-center"
    >
      <div className="hidden md:block">
        <Image src={profilePhoto} alt={""} />
      </div>
      <div className="md:w-[600px]">
        <AnimatedText text="A talented Front-end developer with a unique background in architecture" />
        <p className="text-light-content dark:text-dark-content text-justify text-sm md:text-base">
          Hi there, I&apos;m Mehrdad Azizkhani, a front-end developer with a
          background in architecture and computational design. After several
          years of working in the architecture industry, I decided to pursue my
          passion for web development and made the switch to front-end
          development.
          <br />
          <br />I have a strong foundation in HTML, CSS, and JavaScript, and
          I&apos;m constantly expanding my skillset to stay up to date with the
          latest web development technologies. My experience in architecture and
          design gives me a unique perspective on user experience and the
          importance of creating visually appealing and functional interfaces.
          <br />
          <br />
          When I&apos;m not coding, you can find me playing computer games and
          exploring the latest technology trends. I&apos;m passionate about
          learning and growing both personally and professionally, and I&apos;m
          always looking for new challenges and opportunities to expand my
          skills. Thank you for taking the time to visit my portfolio website,
          and I look forward to connecting with you!
        </p>
        <div className="flex justify-center gap-2">
          <Button href={"#skills"}>skills</Button>
          <Button href={"#certificates"}>certificates</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
