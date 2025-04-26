import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import priceList from "../data/services/branding/logo-design/price-list.json";
import faq from "../data/services/branding/logo-design/faq.json";
import PageMeta from "../components/common/PageMeta";
import PriceList from "../components/service/components/price-list/PriceList";
import Faq from "../components/contact/faq/Faq";

const LogoDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageMeta title="Logo Design" description="Logo" />
      <Container style={{ height: "100%" }}>
        <PriceList data={priceList} />
        <Faq data={faq} />
      </Container>
    </>
  );
};

export default LogoDesign;
