import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ReclamAnimation from "../components/service/reclame-video/reclam-animation/ReclamAnimation";

const ReclameVideo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container style={{ height: "100%" }}>
      <ReclamAnimation img1="" img2="" img3="" img4="" />
    </Container>
  );
};

export default ReclameVideo;
