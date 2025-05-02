import { Col, Row } from "react-bootstrap";
import "./content-one.scss";
import { ProjectData } from "@/pages/Project";

interface Props {
  project: Pick<ProjectData, "description" | "client" | "duration" | "website">;
}

const ProjectContentOne = ({ project }: Props) => {
  return (
    <Row>
      <Col lg={6} className="title-2">
        Scopul proiectului
      </Col>
      <Col className="body" lg={6}>
        <p>{project.description}</p>
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
    </Row>
  );
};
export default ProjectContentOne;
