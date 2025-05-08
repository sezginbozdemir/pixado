import { Col, Row } from "react-bootstrap";
import "./content-one.scss";
import { ProjectData } from "@/pages/Project";

interface Props {
  project: Pick<ProjectData, "story" | "client" | "duration" | "website">;
}

const ProjectStory = ({ project }: Props) => {
  return (
    <Row className="story-row">
      <Col
        style={{ gap: "2rem", display: "flex", flexDirection: "column" }}
        lg={6}
      >
        <span className="title-2">{project.story.title}</span>
        <Row>
          <Col className="description-options">
            <Row>Client</Row>
            <Row className="title-3">{project.client}</Row>
          </Col>
          <Col className="description-options">
            <Row>Durata proiect</Row>
            <Row className="title-3">{project.duration}</Row>
          </Col>
          <Col className="description-options">
            <Row>Website</Row>
            <Row className="title-3">{project.website}</Row>
          </Col>
        </Row>
      </Col>
      <Col className="body" lg={6}>
        <p className="story-padding"> {project.story.text}</p>
      </Col>
    </Row>
  );
};
export default ProjectStory;
