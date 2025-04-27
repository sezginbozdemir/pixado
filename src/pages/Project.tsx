import { useEffect } from "react";
import data from "@/data/projects/projects.json";
import { useLocation, useParams } from "react-router-dom";
import ProjectDetail from "@/components/portfoliu/projects-list/ProjectDetail";
import PageMeta from "@/components/common/PageMeta";

export interface ProjectData {
  id: number;
  title: string;
  imgUrl?: string;
  details: string;
  date: string;
  tags: string[];
  type: string;
  client: string;
  duration: string;
  website: string;
  banner1: string;
  banner2: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  description: string;
  scope: string;
  role: string;
  metaTitle: string;
  metaDescription: string;
}

const typedData: ProjectData[] = data as ProjectData[];

const Project = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { id } = useParams<{ id: string }>();
  const project = typedData.find((p) => p.id === parseInt(id || "", 10));

  if (!project) {
    return <div className="body">Project not found!</div>;
  }

  return (
    <>
      <PageMeta
        title={project.metaTitle}
        description={project.metaDescription}
      />
      <ProjectDetail project={project} typedData={typedData} />
    </>
  );
};

export default Project;
