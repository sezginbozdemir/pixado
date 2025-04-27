import { useState } from "react";
import "./testimonials.css";
import { Container, Row, Col } from "react-bootstrap";
import data from "@/data/home/testimonials.json";
import NextButton from "@/components/common/buttons/NextButton";
import TestimonialSlider from "./TestimonialSlider";
import TestimonialSliderMobile from "./TestimonialSliderMobile";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : 0
    );
  };
  return (
    <Container className="testimonials-container">
      <div className="testimonials-header-row">
        <Row>
          <Col>
            <div className="testimonials-header body">Testimoniale</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="testimonials-title title-2">
              CE SPUN CLIENȚII NOȘTRI DESPRE NOI
            </div>
          </Col>
        </Row>
      </div>
      <TestimonialSlider currentIndex={currentIndex} data={data} />
      <TestimonialSliderMobile currentIndex={currentIndex} data={data} />
      <Row>
        <Col>
          <NextButton onClick={handleNext} />
        </Col>
        <Col className="dots-container">
          {data.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
            ></span>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
