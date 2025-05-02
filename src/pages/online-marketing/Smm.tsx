import { useEffect } from "react";
import { Container } from "react-bootstrap";
import priceList from "@/data/services/online-marketing/price-list.json";
import infoData from "@/data/services/online-marketing/smm/smm.json";
import faq from "@/data/services/online-marketing/smm/faq.json";
import PageMeta from "@/components/common/PageMeta";
import Intro from "@/components/service/components/intro/Intro";
import PriceList from "@/components/service/components/price-list/PriceList";
import VisualBenefits from "@/components/service/components/visual-benefits/VisualBenefits";
import Faq from "@/components/contact/faq/Faq";
import SmmServices from "@/components/service/online-marketing/smm/smm-services/SmmServices";
import Socials from "@/components/service/online-marketing/smm/smm-socials/Socials";
import Spacing from "@/components/common/Spacing";

const Smm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageMeta title="Branding" description="Branding" />
      <Container style={{ height: "100%" }}>
        <Intro data={infoData} branding={true} />
        <VisualBenefits num data={infoData} />
        <SmmServices services={infoData.smmServices} />
        <Spacing size={4} />
        <Socials />
        <Spacing size={4} />
        <PriceList data={priceList} />
        <Faq data={faq} />
      </Container>
    </>
  );
};

export default Smm;
