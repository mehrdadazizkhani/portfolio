import Skill from "./Skill";
import skills from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative h-full w-full snap-center flex justify-center items-center"
    >
      <div className="lg:w-1/2 flex justify-center items-center gap-3 md:gap-5 flex-wrap">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
