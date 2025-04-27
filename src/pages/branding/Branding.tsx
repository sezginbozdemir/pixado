import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import priceList from "@/data/services/branding/price-list.json";
import infoList from "@/data/services/branding/info-list.json";
import infoData from "@/data/services/branding/branding.json";
import PageMeta from "@/components/common/PageMeta";
import WebBanner from "@/components/service/components/banner/WebBanner";
import Intro from "@/components/service/components/intro/Intro";
import PriceList from "@/components/service/components/price-list/PriceList";
import InfoList from "@/components/service/components/info-list/InfoList";
import SimpleBanner from "@/components/service/components/simple-banner/SimpleBanner";
import BrandingServices from "@/components/service/branding/sub-services/BrandingServices";

const Branding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ref = useRef<HTMLDivElement>(null);

  const scrollToRef = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <PageMeta title="Branding" description="Branding" />
      <Container style={{ height: "100%" }}>
        <Intro data={infoData} branding={true} />
        <WebBanner onClick={scrollToRef} img={infoData.banner} />
        <div ref={ref}>
          <BrandingServices services={infoData.services} />
        </div>
        <div className="branding-img-wrapper">
          <SimpleBanner img={infoData.img} />
        </div>
        <PriceList data={priceList} />
        <InfoList data={infoList} />
      </Container>
    </>
  );
};

export default Branding;
