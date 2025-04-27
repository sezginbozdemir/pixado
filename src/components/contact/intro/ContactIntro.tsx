import { Col, Row } from "react-bootstrap";
import "./intro.css";
import placeholder from "@/assets/placeholder.png";
import ArrowButton from "@/components/common/buttons/ArrowButton";

interface Props {
  onClick: () => void;
}

const ContactIntro = ({ onClick }: Props) => {
  return (
    <div className="intro-row">
      <Row className="body-row">
        <Col xs={12} lg={6} className="contact-info">
          <Row className="stack-one">
            <Row className="contact-head eyebrow-body">Contact</Row>
            <Row className="title-2">
              Contactează-ne să discutăm mai multe despre viitorul proiect
            </Row>
          </Row>
          <Row className="body contact-text">
            Lorem ipsum dolor sit amet consectetur. Vel ut aliquet feugiat
            consectetur felis nunc nunc amet vitae. Mi sit aliquet mauris
            graseda ut. Lorem ipsum dolor sit amet consectetur. Vel ut aliquet
            feugiat consectetur felis nunc nunc amet vitae. Mi sit aliquet
            mauris graseda ut.
          </Row>
        </Col>
        <Col className="img-col" xs={12} lg={6}>
          <div className="contact-img-wrapper">
            <img src={placeholder} className="contact-img" alt="Pixado" />
          </div>
          <ArrowButton onClick={onClick} className="contact-decor" />
        </Col>
      </Row>
    </div>
  );
};

export default ContactIntro;
