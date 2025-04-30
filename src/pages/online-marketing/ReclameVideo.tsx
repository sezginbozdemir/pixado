import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import ReclamAnimation from "@/components/service/online-marketing/reclame-video/reclam-animation/ReclamAnimation";
import ReclamBanner from "@/components/service/online-marketing/reclame-video/reclam-banner/ReclamBanner";
import ReclameText from "@/components/service/online-marketing/reclame-video/reclame-text/ReclameText";
import PriceList from "@/components/service/components/price-list/PriceList";
import InfoList from "@/components/service/components/info-list/InfoList";
import data from "@/data/services/online-marketing/reclame-video/about.json";
import infoList from "@/data/services/online-marketing/reclame-video/info-list.json";
import priceList from "@/data/services/online-marketing/price-list.json";
import PageMeta from "@/components/common/PageMeta";

const ReclameVideo = () => {
  const [ready, setReady] = useState<boolean>(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => {
      setReady(true);
    }, 900);
    return () => clearTimeout(timeout);
  }, []);

  const ReclameRef = useRef<HTMLDivElement>(null);

  const scrollToRef = () => {
    if (ReclameRef.current) {
      ReclameRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container style={{ height: "100%" }}>
      <PageMeta title="Reclame Video" description="Reclame Video Meta" />
      <ReclamBanner onClick={scrollToRef} data={data} />
      <div ref={ReclameRef}>
        <ReclameText data={data} />
      </div>
      <ReclamAnimation ready={ready} data={data} />
      <PriceList data={priceList} />
      <InfoList data={infoList} />
    </Container>
  );
};

export default ReclameVideo;
