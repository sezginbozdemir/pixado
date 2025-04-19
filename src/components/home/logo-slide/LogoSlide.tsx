import React from "react";
import "./logo-slide.css";
import data from "../../../data/home/logo-slide.json";
import twoLines from "../../../assets/two-lines.png";
import { Container, Col, Row } from "react-bootstrap";

interface Logo {
  url: string;
  alt: string;
}

const LogoSlide: React.FC = () => {
  return (
    <Container>
      <div className="carousel-container">
        <img className="two-lines" src={twoLines} />
        <Row>
          <div className="carousel">
            {data.map((logo: Logo, index: number) => (
              <Col xs={6} lg={3} key={index} className="carousel-item">
                <img src={logo.url} alt={logo.alt} className="carousel-image" />
              </Col>
            ))}
            {data.map((logo: Logo, index: number) => (
              <Col xs={6} lg={3} key={index} className="carousel-item">
                <img src={logo.url} alt={logo.alt} className="carousel-image" />
              </Col>
            ))}
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default LogoSlide;
