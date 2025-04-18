import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Intro from "../components/service/web-design/intro/Intro";
import WebBanner from "../components/service/web-design/banner/WebBanner";
import WebSlider from "../components/service/web-design/web-slider/WebSlider";

const WebDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container style={{ height: "100%" }}>
      <Intro />
      <WebBanner />
      <WebSlider />
    </Container>
  );
};

export default WebDesign;
