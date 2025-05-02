import { Col, Row } from "react-bootstrap";
import "./project-hero.scss";
import { Link } from "react-router-dom";
import { ProjectData } from "@/pages/Project";

interface Props {
  project: Pick<ProjectData, "tags" | "date" | "title" | "imgUrl" | "type">;
}

const ProjectHero = ({ project }: Props) => {
  return (
    <>
      <Row>
        <Col className="detail-back body" xs={12} lg={3}>
          <Link to="/portfoliu" className="back-link">
            Inapoi
          </Link>
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
        <div className="floating-title">
          <div className="body floating-detail">
            <span>{project.date}</span>
            <span className="floating-type">{project.type}</span>
          </div>
          <span className="title-2 float-text">
            <span>Proiect:</span>
            {project.title}
          </span>
        </div>
        <div className="detail-head">
          <img
            className="detail-head-image"
            src={project.imgUrl || "/project-images/wallpaper-1.png"}
          />
        </div>
      </Row>
    </>
  );
};

export default ProjectHero;
