import { ProjectData } from "@/pages/Project";
import "./content-two.scss";
import { Col, Row } from "react-bootstrap";

interface Props {
  project: Pick<ProjectData, "scope" | "role">;
}

const ProjectContentTwo = ({ project }: Props) => {
  return (
    <>
      <Row>
        <Col lg={6} className="title-2">
          Scopul proiectului
        </Col>
        <Col className="body" lg={6}>
          <p>{project.scope}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="title-2">
          Rolul nostru în procesul <br />
          design si dezvoltare
        </Col>
        <Col className="body" lg={6}>
          <p>{project.role}</p>
        </Col>
      </Row>
    </>
  );
};
export default ProjectContentTwo;
