import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./common.css";
const MarqueeText: React.FC = () => {
  return (
    <Container>
      <div className="marquee-container">
        <Row>
          <div className="marquee">
            <Col className="marquee-item title-1">
              <span className="marquee-contact">Contactează-ne</span> să lucrăm
              împreună
            </Col>
            <Col className="marquee-item title-1">
              <span className="marquee-contact">Contactează-ne</span> să lucrăm
              împreună
            </Col>
          </div>
        </Row>
        <Row>
          <div className="marquee-reverse">
            <Col className="marquee-item title-1">
              <span className="marquee-contact">Contactează-ne</span> să lucrăm
              împreună
            </Col>
            <Col className="marquee-item title-1">
              <span className="marquee-contact">Contactează-ne</span> să lucrăm
              împreună
            </Col>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default MarqueeText;
