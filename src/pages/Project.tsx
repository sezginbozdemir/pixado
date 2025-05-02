import { useEffect } from "react";
import data from "@/data/projects/projects.json";
import { useLocation, useParams } from "react-router-dom";
import PageMeta from "@/components/common/PageMeta";
import { Container } from "react-bootstrap";
import ProjectHero from "@/components/project/project-hero/ProjectHero";
import ProjectContentOne from "@/components/project/project-content-one/ProjectContentOne";
import ProjectImages from "@/components/project/project-images/ProjectImages";
import ProjectContentTwo from "@/components/project/project-content-two/ProjectContentTwo";
import ProjectGallery from "@/components/project/project-gallery/ProjectGallery";
import SimiliarProjects from "@/components/project/similiar-projects/SimiliarProjects";
import Spacing from "@/components/common/Spacing";
import DesktopView from "@/components/project/desktop-view/DesktopView";
import MobileView from "@/components/project/mobile-view/MobileView";
import Loading from "@/components/common/Loading";
import NotFound from "./NotFound";

export interface ProjectData {
  id: number;
  title: string;
  desktopImg: string;
  mobileImg: string;
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

const projects: ProjectData[] = data as ProjectData[];

const Project = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <Loading />;
  }
  if (!/^\d+$/.test(id)) return <NotFound />;

  const project = projects.find((p) => p.id === parseInt(id || "", 10));

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <PageMeta
        title={project.metaTitle}
        description={project.metaDescription}
      />
      <Container>
        <Spacing size={3} />
        <ProjectHero project={project} />
        <Spacing size={6} />
        <ProjectContentOne project={project} />
        <Spacing size={4} />
        <DesktopView project={project} />
        <Spacing size={4} />
        <ProjectImages project={project} />
        <Spacing size={3} />
        <ProjectContentTwo project={project} />
        <Spacing size={3} />
        <MobileView project={project} />
        <Spacing size={3} />
        <ProjectGallery project={project} />
        <Spacing size={3} />
        <SimiliarProjects project={project} projects={projects} />
      </Container>
    </>
  );
};

export default Project;
