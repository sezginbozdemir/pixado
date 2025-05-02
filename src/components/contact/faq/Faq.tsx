import "./faq.css";
import "./accordion.scss";
import { Accordion, Col, Row } from "react-bootstrap";
import Spacing from "@/components/common/Spacing";
import { useLocation } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}
interface Props {
  data: FAQItem[];
}
const Faq = ({ data }: Props) => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const title = isContactPage
    ? "AFLĂ MAI MULTE DESPRE NOI"
    : "NOI AVEM RĂSPUNSURILE";
  return (
    <>
      <Spacing size={5} />
      <Row>
        <Col className="title-col-faq" xs={12} lg={6}>
          <Row className="faq-title title-2">{title}</Row>
        </Col>
        <Col xs={12} lg={6}>
          <Accordion>
            {data.map((item, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body className="body">{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
      <Spacing size={5} />
    </>
  );
};
export default Faq;
