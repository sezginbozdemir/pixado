import React from "react";
import "./faq.css";
import "./accordion.scss";
import { Accordion, Col, Row } from "react-bootstrap";

interface FAQItem {
  question: string;
  answer: string;
}
interface Props {
  data: FAQItem[];
}
const Faq = ({ data }: Props) => {
  return (
    <div className="faq-wrapper">
      <Row>
        <Col className="title-col-faq" xs={12} lg={6}>
          <Row className="faq-title title-2">AFLĂ MAI MULTE DESPRE NOI</Row>
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
    </div>
  );
};
export default Faq;
