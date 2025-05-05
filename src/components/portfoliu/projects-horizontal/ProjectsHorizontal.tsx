import ProjectCard from "../projects-list/ProjectCard";
import "./projects-horizontal.scss";
import lineGroup1 from "@/assets/line-group-1.png";
import lineGroup2 from "@/assets/line-group-2.png";
import lineGroupMulti from "@/assets/line-group-multi.png";
import twoLines from "@/assets/two-lines.png";
import Spacing from "@/components/common/Spacing";
import { Row, Col, Container } from "react-bootstrap";
interface ProjectData {
  id: number;
  title: string;
  imgUrl?: string;
  details: string;
  date: string;
  tags: string[];
  type: string;
}

interface ProjectsListProps {
  projects: ProjectData[];
}
const ProjectsHorizontal: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="projects-list">
      <Container>
        <div className="title-2 horizontal-title">
          <span>
            <div className="body first-row-title">Portofoliu</div>
            ULTIMELE PROIECTE <br /> ALE NOASTRE
          </span>
        </div>
        {projects.map((project: ProjectData, index: number) => (
          <Row key={index}>
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
            <Col xs={12} lg={6}>
              <div className="horizontal-list">
                <div className="body">lorem ipsum lorem ipsum lorem</div>
                <div className="body">lorem ipsum lorem ipsum lorem</div>
                <div className="body">lorem ipsum lorem ipsum lorem</div>
                <div className="body">lorem ipsum lorem ipsum lorem</div>
                <div className="body">lorem ipsum lorem ipsum lorem</div>
                <div className="body">lorem ipsum lorem ipsum lorem</div>
                <div className="body">lorem ipsum lorem ipsum lorem</div>
              </div>
            </Col>
            <Spacing size={3} />
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default ProjectsHorizontal;
