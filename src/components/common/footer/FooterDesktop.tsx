import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface FooterProps {
  logo: string;
  greenDot: string;
  NextButton: React.FC<any>;
  handleScrollToTop: () => void;
}

const FooterDesktop: React.FC<FooterProps> = ({
  logo,
  greenDot,
  NextButton,
  handleScrollToTop,
}) => {
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
        <NextButton
          onClick={handleScrollToTop}
          className="footer-next"
        ></NextButton>
        <div className="footer">
          <div className="footer-row body">
            <Row>
              <Col lg={6} className="footer-col">
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
              </Col>
              <Col lg={2} className="footer-col">
                <div className="footer-title title-4">Linkuri Utile</div>

                <Row className="footer-option">
                  <Link className="back-link" to="/">
                    Home
                  </Link>
                </Row>

                <Row className="footer-option">
                  <Link className="back-link" to="/servicii">
                    Servicii
                  </Link>
                </Row>
                <Row className="footer-option">
                  <Link className="back-link" to="/portfoliu">
                    Portofoliu
                  </Link>
                </Row>
                <Row className="footer-option">
                  <Link className="back-link" to="/contact">
                    Contact
                  </Link>
                </Row>
              </Col>
              <Col lg={2} className="footer-col">
                <div className="footer-title title-4">Informatii Legale</div>
                <Row className="footer-option">Termeni si Conditii</Row>
                <Row className="footer-option">Politica de Cookieuri</Row>
                <Row className="footer-option">GDPR</Row>
                <Row className="footer-option">ANPC</Row>
              </Col>
              <Col lg={2} className="footer-col">
                <div className="footer-title title-4">Contact</div>
                <Row>Str Franyo Zoltan, nr. 6, Timișoara</Row>
                <Row>0123123123</Row>
                <Row>email</Row>
              </Col>
            </Row>
          </div>
          <div className="footer-row-center title-1">
            <Row>AICI PENTRU TINE</Row>
          </div>
          <div className="footer-row-bottom body">
            <Row>
              <Col lg={7}>
                <Row>
                  <Col lg={6}>Website exclusiv creat de Pixado</Col>
                  <Col lg={6}>Toate drepturile sunt rezervate</Col>
                </Row>
              </Col>
              <Col lg={5}>
                <Row>
                  <Col className="footer-option">
                    Politica de confidențialitate
                  </Col>
                  <Col className="footer-option">Termeni și condiții</Col>
                  <Col className="footer-option">Politica de Cookies</Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterDesktop;
