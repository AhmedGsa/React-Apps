import React from "react";
import { useFetchProjects } from "../fetch-projects";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-center">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          projects.map((project) => (
            <a
              target="_blank"
              href={project.fields.url}
              className="project"
              key={project.sys.id}
            >
              <img
                className="img"
                src={project.fields.image.fields.file.url}
              ></img>
              <h5>{project.fields.title}</h5>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
