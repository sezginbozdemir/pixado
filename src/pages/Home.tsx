import React from "react";
import BannerSection from "../components/home/banner-section/BannerSection";
import ScrollAnimation from "../components/home/scroll-animation/ScrollAnimation";
import RichText from "../components/home/rich-text/RichText";
import ServicesCarousel from "../components/home/services-carousel/ServicesCarousel";
import ProjectsList from "../components/home/projects-list/ProjectsList";
import Contact from "../components/home/contact/Contact";
import LogoSlide from "../components/home/logo-slide/LogoSlide";
import MarqueeText from "../components/common/MarqueeText";
import { Col } from "react-bootstrap";
import Testimonials from "../components/home/testimonials/Testimonials";
const Home = () => {
  return (
    <Col className="home">
      <BannerSection />
      <ScrollAnimation />
      <RichText />
      <ServicesCarousel />
      <ProjectsList />
      <Contact />
      <LogoSlide />
      <Testimonials />
      <MarqueeText />
    </Col>
  );
};

export default Home;
