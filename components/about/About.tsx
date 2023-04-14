import AnimatedText from "../animatedText/AnimatedText";
import Button from "../base/Button";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-full overflow-y-scroll scrollbar-none p-2 snap-center flex justify-center lg:items-center"
    >
      <div className="flex flex-col lg:w-1/2 gap-3 h-fit items-center justify-center">
        <AnimatedText text="A talented Front-end developer with a unique background in Computational Design and Architecture" />
        <div className="text-light-content dark:text-dark-content text-justify text-sm md:text-base flex flex-col gap-2">
          <p>
            Hi there, I&apos;m Mehrdad Azizkhani, a front-end developer with a
            background in architecture and computational design. After several
            years of working in the architecture industry, I decided to pursue
            my passion for web development and made the switch to front-end
            development.
          </p>
          <p className="italic px-6 md:px-8">
            &quot;If you&apos;re interested in viewing my past work in the field
            of computational design and digital fabrication, please feel free to
            browse my architecture{" "}
            <a
              className="text-light-accent dark:text-dark-accent font-bold underline"
              target="_blank"
              href={
                "https://relayto.com/mehrdad-azizkhani/portfolio-6d71kezn7p08o/hWjIoT621"
              }
            >
              portfolio
            </a>
            .&quot;
          </p>
          <p>
            I have a strong foundation in{" "}
            <abbr
              className="no-underline font-semibold"
              title="HyperText Markup Language"
            >
              HTML
            </abbr>
            ,{" "}
            <abbr
              className="no-underline font-semibold"
              title="Cascading Style Sheets"
            >
              CSS
            </abbr>
            , and JavaScript, and I&apos;m constantly expanding my skillset to
            stay up to date with the latest web development technologies. My
            experience in architecture and design gives me a unique perspective
            on user experience and the importance of creating visually appealing
            and functional interfaces.
          </p>
          <p>
            I&apos;m passionate about learning and growing both personally and
            professionally, and I&apos;m always looking for new challenges and
            opportunities to expand my skills. Thank you for taking the time to
            visit my portfolio website, and I look forward to connecting with
            you!
          </p>
        </div>

        <div className="flex justify-center gap-2">
          <Button href={"#skills"}>skills</Button>
          <Button href={"#certificates"}>certificates</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
