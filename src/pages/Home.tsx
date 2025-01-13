import React from "react";
import BannerSection from "../components/home/banner-section/BannerSection";
import ScrollAnimation from "../components/home/scroll-animation/ScrollAnimation";
import RichText from "../components/home/rich-text/RichText";
import ServicesCarousel from "../components/home/services-carousel/ServicesCarousel";
import ProjectCard from "../components/home/projects-list/ProjectCard";
const Home = () => {
  return (
    <div className="home">
      <BannerSection />
      <ScrollAnimation />
      <RichText />
      <ServicesCarousel />
      <ProjectCard />
    </div>
  );
};

export default Home;
