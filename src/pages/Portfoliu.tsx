import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Filters from "@/components/portfoliu/filters/Filters";
import data from "@/data/projects/projects.json";
import PageMeta from "@/components/common/PageMeta";
import Spacing from "@/components/common/Spacing";
import Loading from "@/components/common/Loading";
import ProjectsHorizontal from "@/components/portfoliu/projects-horizontal/ProjectsHorizontal";
import { ProjectData } from "./Project";
type ProjectPreview = Pick<
  ProjectData,
  "id" | "title" | "imgUrl" | "details" | "list" | "date" | "tags" | "type"
>;

const Portfoliu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [projects, setProjects] = useState<ProjectPreview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setProjects(data);
    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return (
    <Col className="portfoliu">
      <PageMeta title="Portfoliu" description="Portfoliu Meta" />
      <Spacing size={5} />
      <Filters projects={data} setProjects={setProjects} />
      <Spacing size={5} />
      <ProjectsHorizontal projects={projects} />
    </Col>
  );
};

export default Portfoliu;
