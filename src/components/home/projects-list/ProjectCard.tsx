import React from "react";
import "./projects-list.css";
import { Row, Col, Container } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  imgUrl?: string;
  details: string;
  date: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgUrl,
  details,
  date,
}) => {
  return (
    <Container className="project">
      <div className="project-card">
        <Row className="details-regular work-done">
          <Col className="work-done-options">Design</Col>
          <Col className="work-done-options">Branding</Col>
          <Col className="work-done-options">SEO</Col>
        </Row>
        <div className="project-image">
          <img
            src={imgUrl || "/project-images/project-card.png"}
            alt={title}
            className="background-img"
          />
        </div>
      </div>
      <div className="project-details">
        <div className="title-date-container">
          <span className="body project-date">{date}</span>
          <div className="body project-title">{title}</div>
        </div>
        <p className="project-description title-3">{details}</p>
      </div>
    </Container>
  );
};

export default ProjectCard;
