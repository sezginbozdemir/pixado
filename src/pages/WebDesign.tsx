import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Intro from "../components/service/web-design/intro/Intro";
import WebBanner from "../components/service/web-design/banner/WebBanner";
import WebSlider from "../components/service/web-design/web-slider/WebSlider";
import PriceList from "../components/service/components/price-list/PriceList";
import InfoList from "../components/service/components/info-list/InfoList";
import priceList from "../data/services/web-design/price-list.json";
import infoList from "../data/services/web-design/info-list.json";
import infoData from "../data/services/web-design/intro.json";
import Faq from "../components/contact/faq/Faq";
import PageMeta from "../components/common/PageMeta";

const WebDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const SliderRef = useRef<HTMLDivElement>(null);

  const scrollToRef = () => {
    if (SliderRef.current) {
      SliderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <PageMeta title="Web Design" description="Web Design" />
      <Container style={{ height: "100%" }}>
        <Intro data={infoData} />
        <WebBanner onClick={scrollToRef} img={infoData.img} />
      </Container>

      <div ref={SliderRef}>
        <WebSlider />
      </div>
      <Container style={{ height: "100%" }}>
        <PriceList data={priceList} />
        <InfoList data={infoList} />
        <Faq />
      </Container>
    </>
  );
};

export default WebDesign;
