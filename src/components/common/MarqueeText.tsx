import { Container, Col, Row } from "react-bootstrap";
import "./common.css";
const MarqueeText: React.FC = () => {
  return (
    <Container>
      <div className="marquee-container">
        <Row>
          <div className="marquee">
            {[1, 2, 3, 4].map((index) => (
              <Col key={index} className="marquee-item title-1">
                <span className="marquee-contact">Contactează-ne</span> să
                lucrăm împreună
              </Col>
            ))}
          </div>
        </Row>
        <Row>
          <div className="marquee-reverse">
            {[1, 2, 3, 4].map((index) => (
              <Col key={index} className="marquee-item title-1">
                <span className="marquee-contact">Contactează-ne</span> să
                lucrăm împreună
              </Col>
            ))}
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default MarqueeText;
