import React, { useState } from "react";
import "./services-carousel.css";
import GreenLine from "../../../assets/green-line.png";
import lineGroup1 from "../../../assets/line-group-1.png";
import lineGroup2 from "../../../assets/line-group-2.png";
import lineGroupMulti from "../../../assets/line-group-multi.png";
import ProgressSlider from "./ProgressSlider";
import ImageSlider from "./ImageSlider";
import data from "./data.json";
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
              <ProgressSlider
                currentIndex={currentIndex}
                direction={direction}
              />
            </Row>
          </Col>
          <Col sm={12} md={6} lg={4} className="visual">
            <ImageSlider currentIndex={currentIndex} direction={direction} />
            <img
              className="visual-base"
              src="/service-images/service-image-2.png"
            />
          </Col>
          <img className="line-service-1" src={lineGroup1} />
          <img className="line-service-2" src={lineGroup2} />
          <img className="line-service-multi" src={lineGroupMulti} />
        </Row>
        <Row className="info-progress-mobil">
          <ProgressSlider currentIndex={currentIndex} direction={direction} />
        </Row>
      </div>
    </Container>
  );
};

export default ServicesCarousel;
