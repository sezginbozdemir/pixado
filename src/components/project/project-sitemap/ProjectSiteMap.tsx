import { ProjectData } from "@/pages/Project";
import placeholder from "@/assets/placeholder.png";
import "./project-sitemap.scss";
import NextButton from "@/components/common/buttons/NextButton";
import decor from "@/assets/line-group-multi.png";
import { Container } from "react-bootstrap";

interface Props {
  project: Pick<ProjectData, "siteMap">;
}

const ProjectSiteMap = ({ project }: Props) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <img src={decor} className="sitemap-decor" />
      <Container>
        <div className="project-sitemap">
          <div className="sitemap-info">
            <div className="body">{project.siteMap.text}</div>
            <NextButton />
          </div>
          <div className="sitemap-img-container">
            <div className="contact-head sitemap-tag title-4">
              {project.siteMap.tag}
            </div>
            <div className="sitemap-img-wrapper">
              <img src={project.siteMap.img || placeholder} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ProjectSiteMap;
