import { useRef } from "react";
import "./slider.css";
import tick from "@/assets/round-tick.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { FreeMode } from "swiper/modules";
import Button from "@/components/common/buttons/Button";
import NextButton from "@/components/common/buttons/NextButton";
import placeholder from "@/assets/placeholder.png";
import data from "@/data/services/web-design/detail-slider.json";
import { Container } from "react-bootstrap";
import { useScroll, motion, useTransform } from "framer-motion";
const sliderData: SliderItem[] = data;

type SliderItem = {
  header: string;
  text: string;
  links: string[];
};

const WebSlider = () => {
  const swiperRef = useRef<SwiperType>();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const top = useTransform(scrollYProgress, [0, 1], ["-20%", "50%"]);
  return (
    <div ref={ref} className="web-wrapper">
      <div className="web-container">
        <motion.div
          style={{ scale, top, x: "-50%", left: "50%", y: "-50%" }}
          className="web-motion"
        />
        <Container>
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
                        <li key={index}>
                          <img src={tick} alt="pixado" />
                          {link}
                        </li>
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
                    ODATA CE ESTE FINALIZAT PROCESUL DE DEZVOLTARE VA FI LANSAT
                    SI BENEFICIEZI DE TOT SUPORTUL NOSTRU{" "}
                  </div>
                  <Button className="button-web" text="Contacteaza-ne" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </div>
  );
};
export default WebSlider;
