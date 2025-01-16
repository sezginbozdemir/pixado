import React from "react";
import "./common.css";
import { Col, Container, Row } from "react-bootstrap";
import greenDot from "../../assets/green-dot.png";
const Footer: React.FC = () => {
  return (
    <Container className="footer-container">
      <div className="footer-base">
        <img className="footer-base-img" src="/footer/footer-base.png" />
        <Col className="green-dots">
          <Row>
            <img className="green-dot" src={greenDot} />
          </Row>
          <Row>
            <img className="green-dot" src={greenDot} />
          </Row>
          <Row>
            <img className="green-dot" src={greenDot} />
          </Row>
        </Col>

        <div className="footer">
          <div className="footer-row">
            <Row>
              <Col>
                <Row>PIXADO</Row>
                <Row>
                  <p>
                    Pixado este agenția ta de încredere pentru soluții creative
                    de web design, reclame video și efecte vizuale. Cu un ochi
                    atent pentru detalii și o echipă pasionată, transformăm
                    ideile în realitate, livrând mereu rezultate memorabile.
                  </p>
                </Row>
              </Col>
              <Col>
                <Row>Linkuri Utile</Row>
                <Row>Home</Row>
                <Row>Servicii</Row>
                <Row>Portfoliu</Row>
                <Row>Contact</Row>
              </Col>
              <Col>
                <Row>Informatii Legale</Row>
                <Row>Termeni si Conditii</Row>
                <Row>Politica de Cookieuri</Row>
                <Row>GDPR</Row>
                <Row>ANPC</Row>
              </Col>
              <Col>
                <Row>Contact</Row>
                <Row>Str Franyo Zoltan, nr. 6, Timișoara</Row>
                <Row>0123123123</Row>
                <Row>email</Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
