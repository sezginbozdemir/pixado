import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import "./projects-list.css";
import { Container, Row, Col } from "react-bootstrap";

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
    <Container className="detail-container">
      <Row>
        <Col className="detail-back body" xs={12} lg={3}>
          Inapoi
        </Col>
        <Col className="tag-outer" xs={12} lg={4}>
          <Row className="details-regular tag-row">
            {project.tags.map((tag, index) => (
              <Col key={index} className="tag-col work-done-options">
                {tag}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="detail-head-row">
        <Row>
          <div className="floating-title">
            <Row className="body">{project.date}</Row>
            <Row className="title-2 float-text">{project.title}</Row>
          </div>
        </Row>
        <div className="detail-head">
          <img
            className="detail-head-image"
            src={project.imgUrl || "/project-images/wallpaper-1.png"}
          />
        </div>
      </Row>
      <Row className="detail-description">
        <Col lg={6} className="title-2">
          Câteva detalii despre <br />
          proiect , o propozitie
        </Col>
        <Col className="body" lg={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vel ut aliquet feugiat
            consectetur felis nunc nunc amet vitae. Mi sit aliquet mauris
            graseda ut. Lorem ipsum dolor sit amet consectetur. Vel ut aliquet
            feugiat consectetur felis nunc nunc amet vitae. Mi sit aliquet
            mauris graseda ut.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetail;
