import { useState } from "react";
import "./services-carousel.css";
import GreenLine from "@/assets/green-line.png";
import lineGroup2 from "@/assets/line-group-2.png";
import lineGroupMulti from "@/assets/line-group-multi.png";
import ProgressSlider from "./ProgressSlider";
import ProgressSliderMobile from "./ProgressSliderMobile";
import ImageSlider from "./ImageSlider";
import data from "@/data/home/services-carousel.json";
import { Container, Col, Row } from "react-bootstrap";
interface ServiceData {
  title: string;
  description: string[];
  imgUrl: string;
  stats: { label: string; value: number }[];
}

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); //

  const handleClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const typedData = data as ServiceData[];
  return (
    <Container>
      <div className="services-container">
        <Row className="services-carousel">
          <Col xs={12} md={6} lg={8} className="info">
            <Row className="info-details">
              <Col xs={12} md={12} lg={6} className="service-options title-2">
                {data.map((data: ServiceData, index: number) => (
                  <div
                    key={index}
                    className={`service-option ${
                      currentIndex === index ? "active" : ""
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    {currentIndex === index && (
                      <img
                        width={35}
                        height={5}
                        className="title-2 green-line"
                        src={GreenLine}
                      />
                    )}
                    {data.title}
                  </div>
                ))}
              </Col>
              <Col xs={12} md={12} lg={6} className="body service-text">
                {typedData[currentIndex].description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </Col>
            </Row>

            <Row className="info-progress">
              <img className="line-service-2" src={lineGroup2} />

              <ProgressSlider
                currentIndex={currentIndex}
                direction={direction}
                data={data}
              />
            </Row>
          </Col>
          <Col sm={12} md={6} lg={4} className="visual">
            <img className="line-service-multi" src={lineGroupMulti} />
            <ImageSlider currentIndex={currentIndex} direction={direction} />
            <img
              className="visual-base"
              src="/service-images/service-image-2.png"
            />
          </Col>
        </Row>
        <div className="info-progress-mobil">
          <ProgressSliderMobile
            data={data}
            currentIndex={currentIndex}
            direction={direction}
          />
        </div>
      </div>
    </Container>
  );
};

export default ServicesCarousel;
