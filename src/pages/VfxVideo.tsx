import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import SimpleBanner from "../components/service/components/simple-banner/SimpleBanner";
import VfxText from "../components/service/vfx-video/vfx-text/VfxText";
import priceList from "../data/services/vfx-video/price-list.json";
import infoList from "../data/services/vfx-video/info-list.json";
import data from "../data/services/vfx-video/about.json";
import PriceList from "../components/service/components/price-list/PriceList";
import InfoList from "../components/service/components/info-list/InfoList";
import VfxAnimation from "../components/service/vfx-video/vfx-animation/VfxAnimation";
import PageMeta from "../components/common/PageMeta";

const VfxVideo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container style={{ height: "100%" }}>
      <PageMeta title="VFX" description="VFX" />
      <SimpleBanner img={data.banner} />
      <VfxText data={data} />
      <VfxAnimation />
      <PriceList data={priceList} />
      <InfoList data={infoList} />
    </Container>
  );
};

export default VfxVideo;
