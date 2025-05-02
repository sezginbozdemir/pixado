import "./price-list.scss";
import PriceCard from "./PriceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Spacing from "@/components/common/Spacing";

export interface PriceList {
  title: string;
  text: string;
  price: string;
  links: string[];
  pack?: boolean;
}
interface PriceData {
  header: string;
  plans: PriceList[];
}

interface Props {
  data: PriceData;
}

const PriceList = ({ data }: Props) => {
  return (
    <div>
      <Spacing size={3} />

      <div className="header">
        <div className="title-2">PACHETE PRETURI</div>
        <div className="title-2">{data.header}</div>
      </div>
      <Spacing size={2} />
      <Swiper
        className="my-swiper"
        modules={[Pagination, FreeMode]}
        pagination={{ clickable: true, type: "bullets" }}
        freeMode={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 1.3 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {data.plans.map((item, index) => (
          <SwiperSlide key={index}>
            <PriceCard
              key={index}
              title={item.title}
              text={item.text}
              price={item.price}
              links={item.links}
              pack={item.pack}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Spacing size={3} />
    </div>
  );
};

export default PriceList;
