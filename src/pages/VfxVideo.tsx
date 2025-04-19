import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import SimpleBanner from "../components/service/components/simple-banner/SimpleBanner";

const VfxVideo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container style={{ height: "100%" }}>
      <SimpleBanner img="" />
    </Container>
  );
};

export default VfxVideo;
