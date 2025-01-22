import React, { useEffect } from "react";
import BannerSection from "../components/home/banner-section/BannerSection";
import ScrollAnimation from "../components/home/scroll-animation/ScrollAnimation";
import RichText from "../components/home/rich-text/RichText";
import ServicesCarousel from "../components/home/services-carousel/ServicesCarousel";
import ProjectsList from "../components/portfoliu/projects-list/ProjectsList";
import data from "../components/portfoliu/projects-list/data.json";
import Contact from "../components/home/contact/Contact";
import LogoSlide from "../components/home/logo-slide/LogoSlide";
import { Col } from "react-bootstrap";
import Testimonials from "../components/home/testimonials/Testimonials";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = data.slice(0, 4);
  return (
    <Col className="home">
      <BannerSection />
      <ScrollAnimation />
      <RichText />
      <ServicesCarousel />
      <ProjectsList projects={projects} />
      <Contact />
      <LogoSlide />
      <Testimonials />
    </Col>
  );
};

export default Home;
