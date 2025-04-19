import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Intro from "../components/service/web-design/intro/Intro";
import WebBanner from "../components/service/web-design/banner/WebBanner";
import WebSlider from "../components/service/web-design/web-slider/WebSlider";
import PriceList from "../components/service/components/price-list/PriceList";
import priceList from "../data/services/web-design/price-list.json";
import infoList from "../data/services/web-design/info-list.json";
import infoData from "../data/services/web-design/intro.json";
import Faq from "../components/contact/faq/Faq";
import InfoList from "../components/service/components/info-list/InfoList";

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
    <Container style={{ height: "100%" }}>
      <Intro data={infoData} />
      <WebBanner onClick={scrollToRef} img={infoData.img} />
      <div ref={SliderRef}>
        <WebSlider />
      </div>
      <PriceList data={priceList} />
      <InfoList data={infoList} />
      <Faq />
    </Container>
  );
};

export default WebDesign;
