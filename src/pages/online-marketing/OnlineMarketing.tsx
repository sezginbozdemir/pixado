import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import priceList from "@/data/services/online-marketing/price-list.json";
import infoList from "@/data/services/online-marketing/info-list.json";
import infoData from "@/data/services/online-marketing/online-marketing.json";
import PageMeta from "@/components/common/PageMeta";
import WebBanner from "@/components/service/components/banner/WebBanner";
import Intro from "@/components/service/components/intro/Intro";
import PriceList from "@/components/service/components/price-list/PriceList";
import InfoList from "@/components/service/components/info-list/InfoList";
import BrandingServices from "@/components/service/components/sub-services/BrandingServices";

const OnlineMarketing = () => {
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
        <PriceList data={priceList} />
        <InfoList data={infoList} />
      </Container>
    </>
  );
};

export default OnlineMarketing;
