import React from "react";
import "./testimonials.css";
import { Container, Row, Col } from "react-bootstrap";
import data from "./data.json";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <Container>
      <Row>
        <Row>
          <div className="testimonials-header body">Testimoniale</div>
        </Row>
        <Row>
          <Row>
            <div className="testimonials-title title-2">
              CE SPUN CLIENȚII NOȘTRI DESPRE NOI
            </div>
          </Row>
        </Row>
      </Row>
      <Row>
        {data.map((testimonial, index) => (
          <Col lg={6}>
            <TestimonialCard
              key={index}
              name={testimonial.name}
              occupation={testimonial.occupation}
              testimonial={testimonial.testimonial}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
