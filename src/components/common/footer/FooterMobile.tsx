import React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface FooterProps {
  logo: string;
  greenDot: string;
  NextButton: React.FC<any>;
  handleScrollToTop: () => void;
}

const FooterMobile: React.FC<FooterProps> = ({
  logo,
  greenDot,
  NextButton,
  handleScrollToTop,
}) => {
  return (
    <Container className="footer-container-mobile">
      <div className="footer-base">
        <img className="footer-base-img" src="/footer/footer-base-mobile.png" />
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
        <NextButton
          onClick={handleScrollToTop}
          className="footer-next"
        ></NextButton>
        <Row className="footer footer-row body">
          <Row className="footer-col logo-row">
            <Row>
              <div>
                <img className="logo-footer" src={logo} />
              </div>
            </Row>
            <Row>
              <p className="footer-text body">
                Pixado este agenția ta de încredere pentru soluții creative de
                web design, reclame video și efecte vizuale. Cu un ochi atent
                pentru detalii și o echipă pasionată, transformăm ideile în
                realitate, livrând mereu rezultate memorabile.
              </p>
            </Row>
          </Row>
          <Row>
            <Col className="footer-col">
              <div className="footer-title title-4">Linkuri Utile</div>

              <Row>Home</Row>
              <Row>Servicii</Row>
              <Row>Portfoliu</Row>
              <Row>Contact</Row>
            </Col>
          </Row>
          <Row>
            <Col className="footer-col">
              <div className="footer-title title-4">Informatii Legale</div>
              <Row>Termeni si Conditii</Row>
              <Row>Politica de Cookieuri</Row>
              <Row>GDPR</Row>
              <Row>ANPC</Row>
            </Col>
          </Row>
          <Row>
            <Col className="footer-col">
              <div className="footer-title title-4">Contact</div>
              <Row>Str Franyo Zoltan, nr. 6, Timișoara</Row>
              <Row>0123123123</Row>
              <Row>email</Row>
            </Col>
          </Row>
          <Row>
            <Row className="footer-row-center title-1">AICI </Row>
            <Row className="footer-row-center title-1">PENTRU</Row>
            <Row className="footer-row-center title-1">TINE</Row>
          </Row>
          <Row className="footer-row-bottom body">
            <Col className="bottom-row-options-1" xs={6}>
              <Row>Website exclusiv creat de Pixado</Row>
              <Row>Toate drepturile sunt rezervate</Row>
            </Col>
            <Col className="bottom-row-options-2" xs={6}>
              <Row>Politica de confidențialitate</Row>
              <Row>Termeni și condiții</Row>
              <Row>Politica de Cookies</Row>
            </Col>
          </Row>
        </Row>
      </div>
    </Container>
  );
};

export default FooterMobile;
