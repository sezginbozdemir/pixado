import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Intro from "@/components/service/components/intro/Intro";
import WebBanner from "@/components/service/components/banner/WebBanner";
import WebSlider from "@/components/service/web-design/web-slider/WebSlider";
import PriceList from "@/components/service/components/price-list/PriceList";
import InfoList from "@/components/service/components/info-list/InfoList";
import priceList from "@/data/services/web-design/price-list.json";
import infoList from "@/data/services/web-design/info-list.json";
import infoData from "@/data/services/web-design/intro.json";
import faq from "@/data/services/web-design/faq.json";
import data from "@/data/services/web-design/detail-slider.json";
import Faq from "@/components/contact/faq/Faq";
import PageMeta from "@/components/common/PageMeta";
import WebInfo from "@/components/service/web-design/web-info/WebInfo";
import Spacing from "@/components/common/Spacing";

const WebDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const SliderRef = useRef<HTMLDivElement>(null);

  const scrollToRef = () => {
    if (SliderRef.current) {
      SliderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <PageMeta title="Web Design" description="Web Design" />
      <Intro data={infoData} />
      <Container style={{ height: "100%" }}>
        <WebBanner onClick={scrollToRef} img={infoData.img} />
        <WebInfo info={data} />
      </Container>

      <Spacing size={4} />
      <div ref={SliderRef}>
        <WebSlider info={data} />
      </div>
      <Container style={{ height: "100%" }}>
        <PriceList data={priceList} />
        <InfoList data={infoList} />
        <Faq data={faq} />
      </Container>
    </>
  );
};

export default WebDesign;
