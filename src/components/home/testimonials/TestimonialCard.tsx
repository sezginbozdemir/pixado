import React from "react";
import "./testimonials.css";
import { Container, Row } from "react-bootstrap";
import quote from "../../../assets/quote.png";

interface TestimonialCardProps {
  name: string;
  occupation: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  occupation,
  testimonial,
}) => {
  return (
    <Container>
      <div className="testimonial-base">
        <img
          className="testimonial-base-img"
          src="/testimonials/testimonials-card.png"
        />

        <div className="testimonial-card">
          <img className="quote-img" src={quote} />
          <Row>
            <Row>
              <div className="testimonial-name title-3">{name}</div>
            </Row>
            <Row>
              <div className="testimonial-function body">{occupation}</div>
            </Row>
          </Row>
          <Row>
            <p className="testimonial-paragraph body">{testimonial}</p>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialCard;
