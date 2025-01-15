import React from "react";
import ProjectCard from "./ProjectCard";
import data from "./data.json";
import "./projects-list.css";
import { Row, Col, Container } from "react-bootstrap";
interface ProjectData {
  title: string;
  imgUrl?: string;
  details: string;
  date: string;
}

const ProjectsList = () => {
  return (
    <div className="projects-list">
      <Container>
        <div className="title-2 projects-list-title">
          <div className="body first-row-title">Portofoliu</div>
          ULTIMELE PROIECTE <br /> ALE NOASTRE
        </div>
        <Row className="foo">
          {data.map((project: ProjectData, index: number) => (
            <Col className="projects-list-col" key={index} xs={12} md={6}>
              <ProjectCard
                title={project.title}
                imgUrl={project.imgUrl}
                details={project.details}
                date={project.date}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsList;
