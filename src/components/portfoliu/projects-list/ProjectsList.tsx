import React from "react";
import ProjectCard from "./ProjectCard";
import "./projects-list.css";
import lineGroup1 from "../../../assets/line-group-1.png";
import lineGroup2 from "../../../assets/line-group-2.png";
import lineGroupMulti from "../../../assets/line-group-multi.png";
import twoLines from "../../../assets/two-lines.png";
import { Row, Col, Container } from "react-bootstrap";
interface ProjectData {
  id: number;
  title: string;
  imgUrl?: string;
  details: string;
  date: string;
  tags: string[];
  type: string;
}

interface ProjectsListProps {
  projects: ProjectData[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
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
        <img className="line-projects-1" src={lineGroup1} />
        <img className="line-projects-2" src={lineGroup2} />
        <img className="line-projects-4" src={lineGroup1} />
        <img className="line-projects-6" src={lineGroup1} />
        <img className="projects-two-lines" src={twoLines} />
        <img className="line-projects-multi" src={lineGroupMulti} />

        <Row>
          {projects.map((project: ProjectData, index: number) => (
            <Col className="projects-list-col" key={index} xs={12} lg={6}>
              <ProjectCard
                id={project.id}
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
