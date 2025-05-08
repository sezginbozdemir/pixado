import { ProjectData } from "@/pages/Project";
import placeholder from "@/assets/placeholder.png";
import "./performance.scss";
import { Container } from "react-bootstrap";
import decor from "@/assets/line-group-multi.png";

interface Props {
  project: Pick<ProjectData, "performance">;
}

const ProjectPerformance = ({ project }: Props) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <img src={decor} className="performance-decor" />
      <Container>
        <div className="project-performance">
          <div className="performance-info">
            <div className="title-2">{project.performance.title}</div>
            <div className="body">{project.performance.text}</div>
          </div>
          <div className="performance-img-container">
            <div className="contact-head performance-tag title-4">
              {project.performance.tag}
            </div>
            <div className="performance-img-wrapper">
              <img src={project.performance.img || placeholder} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ProjectPerformance;
