import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import priceList from "@/data/services/branding/price-list.json";
import infoData from "@/data/services/branding/logo-design/logo-design.json";
import faq from "@/data/services/branding/logo-design/faq.json";
import PageMeta from "@/components/common/PageMeta";
import PriceList from "@/components/service/components/price-list/PriceList";
import Faq from "@/components/contact/faq/Faq";
import Intro from "@/components/service/components/intro/Intro";
import LogoDesignIntro from "@/components/service/branding/logo-desing-intro/LogoDesignIntro";
import Inclusives from "@/components/service/components/inclusives/Inclusives";
import Benefits from "@/components/service/components/benefits/Benefits";

const LogoDesign = () => {
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
        <LogoDesignIntro data={infoData} />
        <Inclusives data={infoData} />
        <Benefits onClick={scrollToRef} button data={infoData} />
        <div ref={ref}>
          <PriceList data={priceList} />
        </div>
        <Faq data={faq} />
      </Container>
    </>
  );
};

export default LogoDesign;
