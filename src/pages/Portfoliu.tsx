import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import ProjectsList from "../components/portfoliu/projects-list/ProjectsList";
import Filters from "../components/portfoliu/filters/Filters";
import data from "../data/projects/projects.json";
interface ProjectData {
  id: number;
  title: string;
  imgUrl?: string;
  details: string;
  date: string;
  tags: string[];
  type: string;
}

const Portfoliu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    setProjects(data);
  }, []);

  return (
    <Col className="portfoliu">
      <Filters projects={data} setProjects={setProjects} />
      <ProjectsList projects={projects} />
    </Col>
  );
};

export default Portfoliu;
