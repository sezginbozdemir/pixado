import { ProjectData } from "@/pages/Project";
import placeholder from "@/assets/placeholder.png";
import "./social.scss";
import NextButton from "@/components/common/buttons/NextButton";
import { Container } from "react-bootstrap";
import decor from "@/assets/line-group-multi.png";
interface Props {
  project: Pick<ProjectData, "social">;
}

const ProjectSocial = ({ project }: Props) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <img src={decor} className="social-decor" />
      <Container>
        <div className="project-social">
          <div className="social-row-1">
            <h2 className="title-2">{project.social.title}</h2>
            <p
              className="body"
              dangerouslySetInnerHTML={{ __html: project.social.text }}
            />
          </div>
          <div className="social-row-2">
            <div className="cardOne-info">
              <div
                className="body"
                dangerouslySetInnerHTML={{
                  __html: project.social.cardOne.text,
                }}
              />
              <NextButton />
            </div>
            <div className="social-cardOne">
              <div className="social-img-container">
                <div className="contact-head social-tag title-4">
                  {project.social.cardOne.tag}
                </div>
                <div className="social-img-wrapper appointments-mask">
                  <img src={project.social.cardOne.img || placeholder} />
                </div>
              </div>
            </div>
          </div>
          <div className="social-row-3">
            {[project.social.cardTwo, project.social.cardThree].map(
              (card, index) => (
                <div className="social-card" key={index}>
                  <p
                    className="body"
                    dangerouslySetInnerHTML={{ __html: card.text }}
                  />
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
              )
            )}
          </div>
          <div className="social-row-1">
            <div className="cardOne-info">
              <div
                className="body"
                dangerouslySetInnerHTML={{
                  __html: project.social.cardFour.text,
                }}
              />{" "}
            </div>
            <div className="social-cardOne">
              <div className="social-img-container">
                <div className="contact-head social-tag title-4">
                  {project.social.cardFour.tag}
                </div>
                <div className="social-img-wrapper appointments-mask">
                  <img src={project.social.cardFour.img || placeholder} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ProjectSocial;
