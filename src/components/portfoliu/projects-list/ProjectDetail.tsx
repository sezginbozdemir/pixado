import React, { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "./data.json";
import greenDecor from "../../../assets/green-decor.png";
import RotatingLabel from "../../common/RotatingLabel";
import ProjectCard from "./ProjectCard";
import "./projects-list.css";
import { Container, Row, Col } from "react-bootstrap";

interface ProjectData {
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
}

const typedData: ProjectData[] = data as ProjectData[];

const ProjectDetail: React.FC = () => {
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
    <Container className="detail-container">
      <Row>
        <Col className="detail-back body" xs={12} lg={3}>
          <Link to="/portfoliu" className="back-link">
            Inapoi
          </Link>
        </Col>
        <Col className="tag-outer" xs={12} lg={4}>
          <Row className="details-regular tag-row">
            {project.tags.map((tag, index) => (
              <Col key={index} className="tag-col work-done-options">
                {tag}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="detail-head-row">
        <Row>
          <div className="floating-title">
            <div className="body float-row">
              {project.date}
              <br />
              <span className="title-2 float-text"> {project.title}</span>
            </div>
          </div>
        </Row>
        <div className="detail-head">
          <img
            className="detail-head-image"
            src={project.imgUrl || "/project-images/wallpaper-1.png"}
          />
        </div>
      </Row>
      <div className="detail-description">
        <Row>
          <Col lg={6} className="title-2">
            Câteva detalii despre <br />
            proiect , o propozitie
          </Col>
          <Col className="body" lg={6}>
            <p>{project.description}</p>
            <Row>
              <Col className="description-options">
                <Row>Client</Row>
                <Row className="title-3">{project.client}</Row>
              </Col>
              <Col className="description-options">
                <Row>Durata proiect</Row>
                <Row className="title-3">{project.duration}</Row>
              </Col>
              <Col className="description-options">
                <Row>Website</Row>
                <Row className="title-3">{project.website}</Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="gallery-images">
        <Row>
          <Col xs={12} md={6}>
            <img
              className="gallery-image"
              src={project.img1 || "/project-images/wallpaper-1.png"}
            />
          </Col>
          <Col xs={12} md={6}>
            <img
              className="gallery-image"
              src={project.img2 || "/project-images/wallpaper-1.png"}
            />
          </Col>
        </Row>
      </div>
      <div className="detail-description">
        <Row>
          <Col lg={6} className="title-2">
            Scopul proiectului
          </Col>
          <Col className="body" lg={6}>
            <p>{project.scope}</p>
          </Col>
        </Row>
      </div>
      <div className="detail-description">
        <Row>
          <Col lg={6} className="title-2">
            Rolul nostru în procesul <br />
            design si dezvoltare
          </Col>
          <Col className="body" lg={6}>
            <p>{project.role}</p>
          </Col>
        </Row>
      </div>
      <div>
        <div className="banner-wrapper">
          <div className="detail-banner">
            <img
              className="detail-banner-image"
              src={project.banner1 || "/project-images/wallpaper-1.png"}
            />
          </div>
          <img className="green-decor" src={greenDecor} />
        </div>
      </div>
      <div className="banner-gallery-images">
        <div className="detail-rotating-label">
          <RotatingLabel />
        </div>

        <Row>
          <Col xs={12} md={6}>
            <div className="gallery-image-container-3">
              <img
                className="gallery-image-3"
                src={project.img3 || "/project-images/wallpaper-1.png"}
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="gallery-image-container-4">
              <img
                className="gallery-image-4"
                src={project.img4 || "/project-images/wallpaper-1.png"}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <div className="detail-banner-2">
          <img
            className="detail-banner-image-2"
            src={project.banner2 || "/project-images/wallpaper-1.png"}
          />
        </div>
      </Row>
      <Row className="title-2">Proiecte similare</Row>
      <Row>
        <div className="slider-container">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, type: "bullets" }}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }}
            freeMode={true}
            grabCursor={true}
          >
            {typedData
              .filter((p) => p.type === project.type && p.id !== project.id)
              .map((filteredProject) => (
                <Col key={filteredProject.id}>
                  <SwiperSlide>
                    <ProjectCard
                      id={filteredProject.id}
                      title={filteredProject.title}
                      imgUrl={filteredProject.imgUrl}
                      details={filteredProject.details}
                      date={filteredProject.date}
                      tags={filteredProject.tags}
                    />
                  </SwiperSlide>
                </Col>
              ))}
          </Swiper>
        </div>
      </Row>
    </Container>
  );
};

export default ProjectDetail;
