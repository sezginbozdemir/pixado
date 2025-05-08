import { useEffect } from "react";
import data from "@/data/services/web-design/plans.json";
import priceListWeb from "@/data/services/web-design/price-list.json";
import priceListCommerce from "@/data/services/e-commerce/price-list.json";
import { useLocation, useParams } from "react-router-dom";
import PageMeta from "@/components/common/PageMeta";
import { Container } from "react-bootstrap";
import Spacing from "@/components/common/Spacing";
import Loading from "@/components/common/Loading";
import NotFound from "./NotFound";
import Intro from "@/components/service/components/intro/Intro";
import VisualBenefits from "@/components/service/components/visual-benefits/VisualBenefits";
import TextBubbles from "@/components/service/web-design/text-bubbles/TextBubbles";
import WebDesignIcons from "@/components/service/web-design/icons/Icons";
import PriceList from "@/components/service/components/price-list/PriceList";

export interface PlanData {
  id: string;
  title: string;
  text: string;
  description: string;
  textOne?: string;
  textTwo?: string;
  benefitsTitleTwo: string;
  benefitsTwo: {
    title: string;
  }[];
  iconsTitle: string;
  icons: {
    icon: string;
    text?: string;
  }[];
}

const plans: PlanData[] = data as PlanData[];

const Plan = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { id } = useParams<{ id: string }>();
  console.log(id);
  if (!id) {
    return <Loading />;
  }

  const plan = plans.find((p) => p.id === id);

  if (!plan) {
    return <NotFound />;
  }

  const priceList = location.pathname.includes("web-design/web-")
    ? priceListWeb
    : location.pathname.includes("web-design/commerce-")
    ? priceListCommerce
    : priceListWeb;
  return (
    <>
      <PageMeta title="Plans Meta Title" description=" Plans Meta Desc" />
      <Intro data={plan} />
      <Container>
        {plan.textOne && plan.textTwo && (
          <>
            <TextBubbles info={plan} />
            <Spacing size={4} />
          </>
        )}
      </Container>
      <VisualBenefits icon="bullet" data={plan} />
      <Container>
        <Spacing size={4} />
        <WebDesignIcons info={plan} />
        <Spacing size={4} />
        <PriceList data={priceList} />
      </Container>
    </>
  );
};

export default Plan;
