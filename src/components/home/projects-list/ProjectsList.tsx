import React from "react";
import ProjectCard from "./ProjectCard";
import data from "./data.json";
import "./projects-list.css";
import Title from "../../common/Title";
import Text from "../../common/Text";

interface ProjectData {
  title: string;
  imgUrl?: string;
  details: string;
  date: string;
}

const ProjectsList = () => {
  return (
    <div className="projects-list">
      <div className="projects-list-title">
        <div className="first-row-title">
          <Text variant="body">Portofoliu</Text>
        </div>

        <Title variant="h2">
          ULTIMELE PROIECTE <br /> ALE NOASTRE
        </Title>
      </div>
      {data.map((project: ProjectData, index: number) => (
        <ProjectCard
          key={index}
          title={project.title}
          imgUrl={project.imgUrl}
          details={project.details}
          date={project.date}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
