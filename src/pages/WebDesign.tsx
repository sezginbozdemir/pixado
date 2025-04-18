import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Intro from "../components/service/web-design/intro/Intro";
import WebBanner from "../components/service/web-design/banner/WebBanner";
import WebSlider from "../components/service/web-design/web-slider/WebSlider";
import PriceList from "../components/service/components/price-list/PriceList";
import data from "../data/services/web-design/data.json";
import Faq from "../components/contact/faq/Faq";

const WebDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container style={{ height: "100%" }}>
      <Intro />
      <WebBanner />
      <WebSlider />
      <PriceList data={data} />
      <Faq />
    </Container>
  );
};

export default WebDesign;
