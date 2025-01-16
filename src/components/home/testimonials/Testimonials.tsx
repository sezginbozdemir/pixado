import React, { useState } from "react";
import "./testimonials.css";
import { Container, Row, Col } from "react-bootstrap";
import data from "./data.json";
import TestimonialCard from "./TestimonialCard";
import NextButton from "../../common/NextButton";
interface TestimonialData {
  name: string;
  occupation: string;
  testimonial: string;
}
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 450;
  const overlap = cardWidth * 0.8;

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
      <Row>
        <Col className="testimonials-wrapper">
          <div className="testimonial-cards-container">
            {data.map((testimonial: TestimonialData, index: number) => {
              return (
                <Row
                  key={index}
                  className="testimonial-card-wrapper"
                  style={{
                    left: `${index * (cardWidth - overlap)}px`,
                    transform:
                      index < currentIndex
                        ? "translateX(0)"
                        : index === currentIndex
                        ? "translateX(0)"
                        : `translateX(${
                            cardWidth * 0.85 * (index - currentIndex)
                          }px)`,
                    zIndex: index === currentIndex ? 1 : 0,
                    width: `${cardWidth}px`,
                    transition: "transform 0.5s ease",
                  }}
                >
                  <TestimonialCard
                    name={testimonial.name}
                    occupation={testimonial.occupation}
                    testimonial={testimonial.testimonial}
                  />
                </Row>
              );
            })}
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <NextButton onClick={handleNext} />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
