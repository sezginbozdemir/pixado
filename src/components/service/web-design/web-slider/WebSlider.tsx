import React, { useRef } from "react";
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { FreeMode } from "swiper/modules";
import Button from "../../../common/buttons/Button";
import NextButton from "../../../common/buttons/NextButton";
import placeholder from "../../../../assets/placeholder.png";
import data from "../../../../data/services/web-design/detail-slider.json";
const sliderData: SliderItem[] = data;

type SliderItem = {
  header: string;
  text: string;
  links: string[];
};

const WebSlider = () => {
  const swiperRef = useRef<SwiperType>();
  return (
    <Swiper
      modules={[FreeMode]}
      freeMode={true}
      grabCursor={true}
      slidesPerView="auto"
      spaceBetween={50}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      <SwiperSlide className="unique-slide">
        <div className="first-slide-web">
          <div className="eyebrow-body first-web-head">Web Design</div>
          <div className="title-2">
            CARE SUNT PRINCIPALII PASII IN PROCESUL DE WEB DESIGN
          </div>
          <NextButton
            onClick={() => swiperRef.current?.slideNext()}
            className="next-web"
          />
        </div>
      </SwiperSlide>
      {sliderData.map((slider, index) => (
        <SwiperSlide key={index} className="web-slides">
          <div className="slide-web-two">
            <div className="web-img-container">
              <div className="web-img-wrapper">
                <img src={placeholder} className="slide-web-img" />
              </div>
              <div className="title-4 web-float">{slider.header}</div>
            </div>
            <div className="web-details">
              <div className="body">{slider.text}</div>
              <ul className="body">
                {slider.links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <SwiperSlide className="web-slides-last">
        <div className="slide-web-two">
          <div className="web-img-container">
            <div className="web-img-wrapper">
              <img src={placeholder} className="slide-web-img" />
            </div>
            <div className="title-4 web-float">LANSARE</div>
          </div>
          <div className="web-details-last">
            <div className="title-3">
              ODATA CE ESTE FINALIZAT PROCESUL DE DEZVOLTARE VA FI LANSAT SI
              BENEFICIEZI DE TOT SUPORTUL NOSTRU{" "}
            </div>
            <Button className="button-web" text="Contacteaza-ne" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default WebSlider;
