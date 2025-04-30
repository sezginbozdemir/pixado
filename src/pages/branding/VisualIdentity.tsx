import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import priceList from "@/data/services/branding/price-list.json";
import infoData from "@/data/services/branding/visual-identity/visual-identity.json";
import faq from "@/data/services/branding/visual-identity/faq.json";
import PageMeta from "@/components/common/PageMeta";
import PriceList from "@/components/service/components/price-list/PriceList";
import Faq from "@/components/contact/faq/Faq";
import Intro from "@/components/service/components/intro/Intro";
import VisualIdentityCards from "@/components/service/branding/visual-identity/cards/VisualIdentityCards";
import VisualBanner from "@/components/service/branding/visual-identity/banner/VisualBanner";
import VisualBenefits from "@/components/service/components/visual-benefits/VisualBenefits";

const VisualIdentity = () => {
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
      <Container style={{ height: "100%" }}>
        <Intro data={infoData} />
        <VisualIdentityCards data={infoData} />
        <VisualBanner data={infoData} />
        <VisualBenefits onClick={scrollToRef} data={infoData} />
        <div ref={ref}>
          <PriceList data={priceList} />
        </div>
        <Faq data={faq} />
      </Container>
    </>
  );
};

export default VisualIdentity;
