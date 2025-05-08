import "./contact.css";
import Button from "@/components/common/buttons/Button";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
interface Props {
  head: string;
  title: string;
  text: string;
}

const Contact = ({ head, title, text }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="first-container">
        <Col xs={12} lg={6} className="first-col-contact">
          <div className="body who">{head}</div>
          <div
            className="title-2 partner"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Col>
        <Col xs={12} lg={5} className="second-col-contact">
          <div
            className="contact-text body"
            dangerouslySetInnerHTML={{ __html: text }}
          />
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
