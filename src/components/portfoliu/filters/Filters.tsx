import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./filters.css";
import { ProjectData } from "@/pages/Project";

type ProjectPreview = Pick<
  ProjectData,
  "id" | "title" | "imgUrl" | "details" | "list" | "date" | "tags" | "type"
>;

interface FiltersProps {
  projects: ProjectPreview[];
  setProjects: React.Dispatch<React.SetStateAction<ProjectPreview[]>>;
}

const Filters: React.FC<FiltersProps> = ({ projects, setProjects }) => {
  const [activeType, setActiveType] = useState<string>("all");

  const uniqueTypes = Array.from(
    new Set(projects.map((project) => project.type))
  );

  const handleFilter = (type: string) => {
    setActiveType(type);
    const filteredProjects =
      type === "all"
        ? projects
        : projects.filter((project) => project.type === type);
    setProjects(filteredProjects);
  };

  return (
    <Container>
      <Row>
        <Col className="portfoliu-head eyebrow-body" xs={12} md={6} lg={3}>
          Portfoliu
        </Col>
        <Col
          className={`filter-button title-2 ${
            activeType === "all" ? "active" : ""
          }`}
          xs={12}
          md={6}
          lg={3}
          onClick={() => handleFilter("all")}
        >
          <div className="filter-button-inner">
            toate lucrarile
            <span className="project-count">{projects.length}</span>
          </div>
        </Col>
        {uniqueTypes.map((type) => {
          const projectCount = projects.filter(
            (project) => project.type === type
          ).length;

          return (
            <Col
              className={`filter-button title-2 ${
                activeType === type ? "active" : ""
              }`}
              onClick={() => handleFilter(type)}
              xs={12}
              md={6}
              lg={3}
              key={type}
            >
              <div className="filter-button-inner">
                {type}
                <span className="project-count">{projectCount}</span>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Filters;
