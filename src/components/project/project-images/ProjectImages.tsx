import { ProjectData } from "@/pages/Project";
import "./project-images.scss";
import { Col, Row } from "react-bootstrap";

interface Props {
  project: Pick<ProjectData, "img1" | "img2">;
}

const ProjectImages = ({ project }: Props) => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <img
          className="gallery-image"
          src={project.img1 || "/project-images/wallpaper-1.png"}
        />
      </Col>
      <Col xs={12} md={6}>
        <img
          className="gallery-image"
          src={project.img2 || "/project-images/wallpaper-1.png"}
        />
      </Col>
    </Row>
  );
};
export default ProjectImages;
