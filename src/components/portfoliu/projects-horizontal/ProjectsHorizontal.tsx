import ProjectCard from "../projects-list/ProjectCard";
import "./projects-horizontal.scss";
import Spacing from "@/components/common/Spacing";
import { Row, Col, Container } from "react-bootstrap";
import tick from "@/assets/tick.png";
import Button from "@/components/common/buttons/Button";
import decor1 from "@/assets/line-group-1.png";
import decor2 from "@/assets/line-group-multi.png";
import { useNavigate } from "react-router-dom";
import { ProjectData } from "@/pages/Project";
type ProjectPreview = Pick<
  ProjectData,
  "id" | "title" | "imgUrl" | "details" | "list" | "date" | "tags" | "type"
>;

interface ProjectsListProps {
  projects: ProjectPreview[];
}
const ProjectsHorizontal: React.FC<ProjectsListProps> = ({ projects }) => {
  const navigate = useNavigate();
  return (
    <div className="projects-list">
      <Container>
        <div className="title-2 horizontal-title">
          <img src={decor1} />
          <span>
            <div className="body first-row-title">Portofoliu</div>
            ULTIMELE PROIECTE <br /> ALE NOASTRE
          </span>
        </div>
        <div className="projects-horizontal">
          {projects.map((project: ProjectPreview, index: number) => (
            <Row style={{ position: "relative" }} key={index}>
              <img
                src={index % 2 === 0 ? decor1 : decor2}
                className={
                  index % 2 === 0 ? "horizontal-decor" : "horizontal-decor-two"
                }
              />
              <Col xs={12} lg={6}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  imgUrl={project.imgUrl}
                  details={project.details}
                  date={project.date}
                  tags={project.tags}
                />
              </Col>
              <Col className="horizontal-list-col" xs={12} lg={6}>
                <ul className="horizontal-list">
                  {project.list.map((item, index) => (
                    <li className="body" key={index}>
                      <img src={tick} alt="pixado" />
                      {item}
                    </li>
                  ))}
                  <Button
                    onClick={() => navigate(`/portfoliu/${project.id}`)}
                    text="Află mai multe despre proiect"
                  />
                </ul>
              </Col>
              <Spacing size={3} />
            </Row>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProjectsHorizontal;
