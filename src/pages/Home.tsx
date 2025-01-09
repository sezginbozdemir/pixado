import React from "react";
import BannerSection from "../components/home/banner-section/BannerSection";
import ScrollAnimation from "../components/home/scroll-animation/ScrollAnimation";
const Home = () => {
  return (
    <div className="home">
      <BannerSection />
      <ScrollAnimation />
      <BannerSection />
      <BannerSection />
    </div>
  );
};

export default Home;
