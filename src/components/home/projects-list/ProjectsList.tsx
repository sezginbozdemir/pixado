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
  tags: string[];
}

const ProjectsList = () => {
  return (
    <div className="projects-list">
      <Container>
        <div className="title-2 projects-list-title">
          <div className="body first-row-title">Portofoliu</div>
          ULTIMELE PROIECTE <br /> ALE NOASTRE
        </div>
        <div className="projects-list-title-mobil">
          <Row>
            <Col>
              <div className="first-row-title body">Portofoliu</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="title-2">
                ULTIMELE PROIECTE <br /> ALE NOASTRE
              </div>
            </Col>
          </Row>
        </div>

        <Row>
          {data.slice(0, 4).map((project: ProjectData, index: number) => (
            <Col className="projects-list-col" key={index} xs={12} lg={6}>
              <ProjectCard
                title={project.title}
                imgUrl={project.imgUrl}
                details={project.details}
                date={project.date}
                tags={project.tags}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsList;
