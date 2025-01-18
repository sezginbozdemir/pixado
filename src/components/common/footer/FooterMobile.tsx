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
        <div className="footer">
          <div className="footer-row body">
            <Row>
              <Row className="footer-col">
                <Row>
                  <div>
                    <img className="logo-footer" src={logo} />
                  </div>
                </Row>
                <Row>
                  <p className="footer-text body">
                    Pixado este agenția ta de încredere pentru soluții creative
                    de web design, reclame video și efecte vizuale. Cu un ochi
                    atent pentru detalii și o echipă pasionată, transformăm
                    ideile în realitate, livrând mereu rezultate memorabile.
                  </p>
                </Row>
              </Row>
              <Row className="footer-col">
                <div className="footer-title title-4">Linkuri Utile</div>

                <Row>Home</Row>
                <Row>Servicii</Row>
                <Row>Portfoliu</Row>
                <Row>Contact</Row>
              </Row>
              <Row className="footer-col">
                <div className="footer-title title-4">Informatii Legale</div>
                <Row>Termeni si Conditii</Row>
                <Row>Politica de Cookieuri</Row>
                <Row>GDPR</Row>
                <Row>ANPC</Row>
              </Row>
              <Row className="footer-col">
                <div className="footer-title title-4">Contact</div>
                <Row>Str Franyo Zoltan, nr. 6, Timișoara</Row>
                <Row>0123123123</Row>
                <Row>email</Row>
              </Row>
              <Row>
                <div className="footer-row-center title-1">
                  <Row>AICI PENTRU TINE</Row>
                </div>
              </Row>
              <Row>
                <div className="footer-row-bottom body">
                  <Row>
                    <Col>
                      <Row>
                        <Col>Website exclusiv creat de Pixado</Col>
                        <Col>Toate drepturile sunt rezervate</Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col>Politica de confidențialitate</Col>
                        <Col>Termeni și condiții</Col>
                        <Col>Politica de Cookies</Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterMobile;
