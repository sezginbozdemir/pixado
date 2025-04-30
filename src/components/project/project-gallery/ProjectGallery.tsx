import { ProjectData } from "@/pages/Project";
import "./gallery.scss";
import { Col, Row } from "react-bootstrap";
import ArrowButton from "@/components/common/buttons/ArrowButton";
import RotatingLabel from "@/components/common/RotatingLabel";
import { useRef } from "react";

interface Props {
  project: Pick<ProjectData, "img3" | "img4" | "banner2" | "banner1">;
}

const ProjectGallery = ({ project }: Props) => {
  const RowRef = useRef<HTMLDivElement>(null);

  const scrollToRef = () => {
    if (RowRef.current) {
      RowRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="banner-wrapper">
        <div className="detail-banner">
          <img
            className="detail-banner-image"
            src={project.banner1 || "/project-images/wallpaper-1.png"}
          />
        </div>
        <ArrowButton onClick={scrollToRef} className="green-decor" />
      </div>
      <div className="banner-gallery-images">
        <div className="detail-rotating-label">
          <RotatingLabel />
        </div>

        <Row ref={RowRef}>
          <Col xs={12} md={6}>
            <div className="gallery-image-container-3">
              <img
                className="gallery-image-3"
                src={project.img3 || "/project-images/wallpaper-1.png"}
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="gallery-image-container-4">
              <img
                className="gallery-image-4"
                src={project.img4 || "/project-images/wallpaper-1.png"}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <div className="detail-banner-2">
          <img
            className="detail-banner-image-2"
            src={project.banner2 || "/project-images/wallpaper-1.png"}
          />
        </div>
      </Row>
    </>
  );
};
export default ProjectGallery;
