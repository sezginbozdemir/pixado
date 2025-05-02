import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import priceList from "@/data/services/online-marketing/price-list.json";
import infoData from "@/data/services/online-marketing/optimizare-seo/optimizare-seo.json";
import faq from "@/data/services/online-marketing/optimizare-seo/faq.json";
import PageMeta from "@/components/common/PageMeta";
import Intro from "@/components/service/components/intro/Intro";
import PriceList from "@/components/service/components/price-list/PriceList";
import Inclusives from "@/components/service/components/inclusives/Inclusives";
import VisualBenefits from "@/components/service/components/visual-benefits/VisualBenefits";
import Faq from "@/components/contact/faq/Faq";

const Seo = () => {
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
      <Intro data={infoData} branding={true} />
      <VisualBenefits num data={infoData} onClick={scrollToRef} />
      <Inclusives data={infoData} />
      <Container style={{ height: "100%" }}>
        <div ref={ref}>
          <PriceList data={priceList} />
        </div>
        <Faq data={faq} />
      </Container>
    </>
  );
};

export default Seo;
