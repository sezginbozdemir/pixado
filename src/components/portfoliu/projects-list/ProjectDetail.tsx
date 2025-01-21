import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

interface ProjectData {
  id: number;
  title: string;
  imgUrl?: string;
  details: string;
  date: string;
  tags: string[];
  type: string;
}

const typedData: ProjectData[] = data as ProjectData[];

const ProjectDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams<{ id: string }>();
  const project = typedData.find((p) => p.id === parseInt(id || "", 10));

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.imgUrl} alt={project.title} />
      <p>{project.details}</p>
      <p>Date: {project.date}</p>
      <div>
        Tags:{" "}
        {project.tags.map((tag) => (
          <span key={tag}>{tag} </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
