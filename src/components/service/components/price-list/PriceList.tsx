import React from "react";
import "./price-list.scss";
import PriceCard from "./PriceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

export interface PriceList {
  title: string;
  text: string;
  price: string;
  links: string[];
}

interface Props {
  data: PriceList[];
}

const PriceList = ({ data }: Props) => {
  return (
    <Swiper
      modules={[Pagination, FreeMode]}
      pagination={{ clickable: true, type: "bullets" }}
      freeMode={true}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <PriceCard
            key={index}
            title={item.title}
            text={item.text}
            price={item.price}
            links={item.links}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PriceList;
