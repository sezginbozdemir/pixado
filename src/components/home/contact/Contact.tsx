import "./contact.css";
import Button from "@/components/common/buttons/Button";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <Container className="contact">
      <Row className="first-container">
        <Col xs={12} lg={6} className="first-col-contact">
          <div className="body who">Cine suntem noi</div>
          <div className="title-2 partner">
            PARTENERUL TĂU ÎN <br /> DEZVOLTARE DIGITALĂ
          </div>
        </Col>
        <Col xs={12} lg={5} className="second-col-contact">
          <div className="contact-text body">
            Lorem ipsum dolor sit amet consectetur. Vel ut aliquet feugiat
            consectetur felis nunc nunc amet vitae. Mi sit aliquet mauris
            graseda ut. Lorem ipsum dolor sit amet consectetur. Vel ut aliquet
            feugiat consectetur felis nunc nunc amet vitae. Mi sit aliquet
            mauris graseda ut.
          </div>
          <div className="body links-container">
            <Button
              onClick={() => {
                navigate("contact");
              }}
              className="contact-button"
              text="Contacteaza-ne"
            ></Button>
            <div className="afla">Afla mai multe</div>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
