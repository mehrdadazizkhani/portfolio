import { useState } from "react";
import projects from "../../data/projects";
import Project from "./Project";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(1);

  const handleLeft = () => {
    setCurrentProject(
      currentProject === 1 ? projects.length : currentProject - 1
    );
  };

  const handleRight = () => {
    setCurrentProject(
      currentProject === projects.length ? 1 : currentProject + 1
    );
  };

  return (
    <section className="flex h-full items-center justify-between overflow-hidden md:px-10">
      <RiArrowLeftSFill
        onClick={handleLeft}
        className="cursor-pointer text-3xl md:text-5xl h-full text-light-content dark:text-dark-content z-20"
      />
      <div className="relative w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${
              currentProject !== project.id ? "opacity-0" : "opacity-100"
            } absolute w-full px-8 flex justify-center h-full top-0 left-0 items-center transition-all duration-1000`}
          >
            {currentProject === project.id && <Project data={project} />}
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

export default Projects;
