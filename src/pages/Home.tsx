import { useEffect } from "react";
import BannerSection from "@/components/home/banner-section/BannerSection";
import ScrollAnimation from "@/components/home/scroll-animation/ScrollAnimation";
import RichText from "@/components/home/rich-text/RichText";
import ServicesCarousel from "@/components/home/services-carousel/ServicesCarousel";
import ProjectsList from "@/components/portfoliu/projects-list/ProjectsList";
import data from "@/data/projects/projects.json";
import Contact from "@/components/home/contact/Contact";
import LogoSlide from "@/components/home/logo-slide/LogoSlide";
import { Col } from "react-bootstrap";
import Testimonials from "@/components/home/testimonials/Testimonials";
import PageMeta from "@/components/common/PageMeta";
import Spacing from "@/components/common/Spacing";

const Home = () => {
  const projects = data.slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Col className="home">
      <PageMeta title="Home" description="Home Meta" />
      <BannerSection />
      <Spacing size={4} />
      <ScrollAnimation />
      <RichText />
      <Spacing size={4} />
      <ServicesCarousel />
      <Spacing size={8} />
      <ProjectsList projects={projects} />
      <Spacing size={6} />
      <Contact />
      <Spacing size={6} />
      <LogoSlide />
      <Spacing size={6} />
      <Testimonials />
    </Col>
  );
};

export default Home;
