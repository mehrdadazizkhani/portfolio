import { useState } from "react";
import projects from "../../data/projects";
import Project from "./Project";

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
    <section className="relative flex justify-center items-center w-full h-full">
      {projects.map((project) => (
        <div className="absolute">
          <Project data={project} />
        </div>
      ))}
    </section>
  );
};

export default Projects;
