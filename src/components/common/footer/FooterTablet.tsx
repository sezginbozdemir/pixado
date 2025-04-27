import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface FooterProps {
  logo: string;
  greenDot: string;
  NextButton: React.FC<any>;
  handleScrollToTop: () => void;
}

const FooterTablet: React.FC<FooterProps> = ({
  logo,
  greenDot,
  NextButton,
  handleScrollToTop,
}) => {
  return (
    <Container className="footer-container-tablet">
      <div className="footer-base">
        <img className="footer-base-img" src="/footer/footer-base-tablet.png" />
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
          <Row className="footer-col">
            <Row>
              <div className="logo-row">
                <img className="logo-footer" src={logo} />
              </div>
            </Row>
            <Row>
              <p className="footer-text body logo-row">
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

              <Row className="footer-option">
                <Link className="back-link" to="/">
                  Home
                </Link>
              </Row>

              <Row className="footer-option">
                {" "}
                <Link className="back-link" to="/servicii">
                  Servicii
                </Link>
              </Row>
              <Row className="footer-option">
                {" "}
                <Link className="back-link" to="/portfoliu">
                  Portofoliu
                </Link>
              </Row>
              <Row className="footer-option">
                {" "}
                <Link className="back-link" to="/contact">
                  Contact
                </Link>
              </Row>
            </Col>
            <Col className="footer-col">
              <div className="footer-title title-4">Informatii Legale</div>
              <Row className="footer-option">Termeni si Conditii</Row>
              <Row className="footer-option">Politica de Cookieuri</Row>
              <Row className="footer-option">GDPR</Row>
              <Row className="footer-option">ANPC</Row>
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
            <div className="footer-row-center title-1">
              <Row>AICI PENTRU TINE</Row>
            </div>
          </Row>
          <Row className="footer-row-bottom body">
            <Col className="bottom-row-options-1" md={8}>
              <Row>Website exclusiv creat de Pixado</Row>
              <Row>Toate drepturile sunt rezervate</Row>
            </Col>
            <Col className="bottom-row-options-2" md={4}>
              <Row className="footer-option">Politica de confidențialitate</Row>
              <Row className="footer-option">Termeni și condiții</Row>
              <Row className="footer-option">Politica de Cookies</Row>
            </Col>
          </Row>
        </Row>
      </div>
    </Container>
  );
};

export default FooterTablet;
