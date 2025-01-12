import React from "react";
import BannerSection from "../components/home/banner-section/BannerSection";
import ScrollAnimation from "../components/home/scroll-animation/ScrollAnimation";
import RichText from "../components/home/rich-text/RichText";
import ServicesCarousel from "../components/home/services-carousel/ServicesCarousel";
const Home = () => {
  return (
    <div className="home">
      <BannerSection />
      <ScrollAnimation />
      <RichText />
      <ServicesCarousel />
    </div>
  );
};

export default Home;
