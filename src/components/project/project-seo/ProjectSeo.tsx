import { ProjectData } from "@/pages/Project";
import placeholder from "@/assets/placeholder.png";
import "./seo.scss";
import { useMediaQuery } from "react-responsive";
import { Container } from "react-bootstrap";
import decor from "@/assets/line-group-multi.png";

interface Props {
  project: Pick<ProjectData, "seo">;
}

const ProjectSeo = ({ project }: Props) => {
  const mobile = useMediaQuery({ maxWidth: 992 });
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <img src={decor} className="seo-decor" />
      <Container>
        <div className="project-seo">
          <div className="seo-row-1">
            <h2 className="title-2">{project.seo.title}</h2>
            <p className="body">{project.seo.text}</p>
          </div>
          <div className="seo-row-2">
            <div className="seo-cardOne">
              <div className="social-img-container">
                <div className="contact-head social-tag title-4">
                  {project.seo.cardOne.tag}
                </div>
                <div className="social-img-wrapper appointments-mask">
                  <img src={project.seo.cardOne.img || placeholder} />
                </div>
              </div>
            </div>
            <div className="seo-cardOne-info">
              <div className="body">{project.seo.cardOne.text}</div>
            </div>
          </div>
          <div className="seo-row-3">
            {[project.seo.cardTwo, project.seo.cardThree].map((card, index) => (
              <div className="seo-card" key={index}>
                <p className="body">{card.text}</p>
                <div className="social-img-container">
                  <div className="contact-head social-tag title-4">
                    {card.tag}
                  </div>
                  <div
                    className={`social-img-wrapper ${
                      index === 0 ? `sitemap-mask` : `appointments-mask`
                    }`}
                  >
                    <img src={card.img || placeholder} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="seo-row-4">
            <div className="social-img-container">
              <div className="contact-head social-tag title-4">
                {project.seo.banner.tag}
              </div>
              <div
                className={`social-img-wrapper ${
                  mobile ? `appointments-mask` : `banner-mask`
                }`}
              >
                <img src={project.seo.banner.img || placeholder} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ProjectSeo;
