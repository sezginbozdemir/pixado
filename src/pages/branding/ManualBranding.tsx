import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import priceList from "@/data/services/branding/price-list.json";
import infoData from "@/data/services/branding/manual-branding/manual-branding.json";
import faq from "@/data/services/branding/manual-branding/faq.json";
import PageMeta from "@/components/common/PageMeta";
import PriceList from "@/components/service/components/price-list/PriceList";
import Faq from "@/components/contact/faq/Faq";
import Intro from "@/components/service/components/intro/Intro";
import Inclusives from "@/components/service/components/inclusives/Inclusives";
import Benefits from "@/components/service/components/benefits/Benefits";
import VisualBenefits from "@/components/service/components/visual-benefits/VisualBenefits";
import SimpleBanner from "@/components/service/components/simple-banner/SimpleBanner";

const ManualBranding = () => {
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
      <PageMeta title="Logo Design" description="Logo" />
      <Intro data={infoData} />
      <Container style={{ height: "100%" }}>
        <Inclusives data={infoData} />
        <SimpleBanner img={infoData.banner} />
        <VisualBenefits onClick={scrollToRef} data={infoData} />
        <Benefits data={infoData} />
        <div ref={ref}>
          <PriceList data={priceList} />
        </div>
        <Faq data={faq} />
      </Container>
    </>
  );
};

export default ManualBranding;
