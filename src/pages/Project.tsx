import { useEffect } from "react";
import data from "@/data/projects/projects.json";
import { useLocation, useParams } from "react-router-dom";
import PageMeta from "@/components/common/PageMeta";
import { Container } from "react-bootstrap";
import ProjectHero from "@/components/project/project-hero/ProjectHero";
import SimiliarProjects from "@/components/project/similiar-projects/SimiliarProjects";
import Spacing from "@/components/common/Spacing";
import Loading from "@/components/common/Loading";
import NotFound from "./NotFound";
import ProjectStory from "@/components/project/project-story/ProjectStory";
import ProjectSiteMap from "@/components/project/project-sitemap/ProjectSiteMap";
import ProjectTechnology from "@/components/project/project-technology/ProjectTechnology";
import ProjectAppointments from "@/components/project/project-appointments/ProjectAppointments";
import ProjectResponsive from "@/components/project/project-responsive/ProjectResponsive";
import ProjectPerformance from "@/components/project/project-performance/ProjectPerformance";
import ProjectSocial from "@/components/project/project-social/ProjectSocial";
import ProjectSeo from "@/components/project/project-seo/ProjectSeo";
import ProjectConclusion from "@/components/project/project-conclusion/ProjectConclusion";

export interface ProjectData {
  id: number;
  title: string;
  imgUrl?: string;
  list: string[];
  details: string;
  date: string;
  tags: string[];
  type: string;
  client: string;
  duration: string;
  website: string;
  category: string;
  metaTitle: string;
  metaDescription: string;

  story: {
    title: string;
    text: string;
  };

  siteMap: {
    tag: string;
    text: string;
    img: string;
  };

  technology: {
    title: string;
    textOne: string;
    textTwo: string;
    icons: {
      title: string;
      icon: string;
    }[];
    list: {
      title: string;
      items: string[];
    };
  };

  appointments: {
    title: string;
    textOne: string;
    textTwo: string;
    tag: string;
    img: string;
  };

  responsive: {
    title: string;
    textOne: string;
    textTwo: string;
    img: string;
  };

  performance: {
    title: string;
    text: string;
    tag: string;
    img: string;
  };

  social: {
    title: string;
    text: string;
    cardOne: {
      tag: string;
      text: string;
      img: string;
    };
    cardTwo: {
      tag: string;
      text: string;
      img: string;
    };
    cardThree: {
      tag: string;
      text: string;
      img: string;
    };
    cardFour: {
      tag: string;
      text: string;
      img: string;
    };
  };

  seo: {
    title: string;
    text: string;
    cardOne: {
      tag: string;
      text: string;
      img: string;
    };
    cardTwo: {
      tag: string;
      text: string;
      img: string;
    };
    cardThree: {
      tag: string;
      text: string;
      img: string;
    };
    banner: {
      tag: string;
      img: string;
    };
  };
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
        <ProjectStory project={project} />
        <Spacing size={6} />
      </Container>
      <ProjectSiteMap project={project} />
      <Spacing size={6} />
      <Container>
        <ProjectTechnology project={project} />
        <Spacing size={6} />
      </Container>
      <ProjectAppointments project={project} />
      <Spacing size={6} />
      <Container>
        <ProjectResponsive project={project} />
        <Spacing size={6} />
      </Container>
      <ProjectPerformance project={project} />
      <Spacing size={6} />
      <ProjectSocial project={project} />
      <Spacing size={6} />
      <ProjectSeo project={project} />
      <Spacing size={6} />
      <Container>
        <ProjectConclusion />
        <Spacing size={6} />
        <SimiliarProjects project={project} projects={projects} />
      </Container>
    </>
  );
};

export default Project;
