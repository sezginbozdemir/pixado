import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import ProjectsList from "@/components/portfoliu/projects-list/ProjectsList";
import Filters from "@/components/portfoliu/filters/Filters";
import data from "@/data/projects/projects.json";
import PageMeta from "@/components/common/PageMeta";
import Spacing from "@/components/common/Spacing";
interface ProjectData {
  id: number;
  title: string;
  imgUrl?: string;
  details: string;
  date: string;
  tags: string[];
  type: string;
}

const Portfoliu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    setProjects(data);
  }, []);

  return (
    <Col className="portfoliu">
      <PageMeta title="Portfoliu" description="Portfoliu Meta" />
      <Filters projects={data} setProjects={setProjects} />
      <Spacing size={5} />
      <ProjectsList projects={projects} />
    </Col>
  );
};

export default Portfoliu;
