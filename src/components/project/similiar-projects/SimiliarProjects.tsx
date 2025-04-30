import { ProjectData } from "@/pages/Project";
import "./similiar-projects.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import ProjectCard from "@/components/portfoliu/projects-list/ProjectCard";
import { Row } from "react-bootstrap";

interface Props {
  project: Pick<ProjectData, "type" | "id">;
  projects: ProjectData[];
}

const SimiliarProjects = ({ projects, project }: Props) => {
  return (
    <>
      <Row className="title-2">Proiecte similare</Row>
      <Row>
        <div className="slider-container">
          <Swiper
            modules={[Pagination, FreeMode]}
            pagination={{ clickable: true, type: "bullets" }}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }}
            freeMode={true}
            grabCursor={true}
          >
            {projects
              .filter((p) => p.type === project.type && p.id !== project.id)
              .map((filteredProject) => (
                <SwiperSlide key={filteredProject.id}>
                  <ProjectCard
                    id={filteredProject.id}
                    title={filteredProject.title}
                    imgUrl={filteredProject.imgUrl}
                    details={filteredProject.details}
                    date={filteredProject.date}
                    tags={filteredProject.tags}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Row>
    </>
  );
};
export default SimiliarProjects;
