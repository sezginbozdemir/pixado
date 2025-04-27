import "./testimonials.css";
import { Row, Col } from "react-bootstrap";
import TestimonialCard from "./TestimonialCard";

interface TestimonialData {
  name: string;
  occupation: string;
  testimonial: string;
}

interface TestimonialSliderProps {
  currentIndex: number;

  data: TestimonialData[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  currentIndex,
  data,
}) => {
  const cardWidth = 450;
  const overlap = cardWidth * 0.8;

  return (
    <Row className="testimonial-slider-row">
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
  );
};

export default TestimonialSlider;
