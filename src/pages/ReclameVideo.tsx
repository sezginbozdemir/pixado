import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import ReclamAnimation from "../components/service/reclame-video/reclam-animation/ReclamAnimation";
import ReclamBanner from "../components/service/reclame-video/reclam-banner/ReclamBanner";
import ReclameText from "../components/service/reclame-video/reclame-text/ReclameText";
import PriceList from "../components/service/components/price-list/PriceList";
import InfoList from "../components/service/components/info-list/InfoList";
import data from "../data/services/reclame-video/about.json";
import infoList from "../data/services/reclame-video/info-list.json";
import priceList from "../data/services/reclame-video/price-list.json";

const ReclameVideo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ReclameRef = useRef<HTMLDivElement>(null);

  const scrollToRef = () => {
    if (ReclameRef.current) {
      ReclameRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container style={{ height: "100%" }}>
      <ReclamBanner onClick={scrollToRef} data={data} />
      <div ref={ReclameRef}>
        <ReclameText data={data} />
      </div>
      <ReclamAnimation data={data} />
      <PriceList data={priceList} />
      <InfoList data={infoList} />
    </Container>
  );
};

export default ReclameVideo;
