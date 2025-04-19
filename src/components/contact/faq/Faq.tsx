import React from "react";
import "./faq.css";
import "./accordion.scss";
import { Accordion, Col, Row } from "react-bootstrap";
import data from "../../../data/contact/faq.json";
const faqData: FAQItem[] = data;

type FAQItem = {
  question: string;
  answer: string;
};
const Faq = () => {
  return (
    <div className="faq-wrapper">
      <Row>
        <Col className="title-col-faq" xs={12} lg={6}>
          <Row className="faq-title title-2">AFLĂ MAI MULTE DESPRE NOI</Row>
        </Col>
        <Col xs={12} lg={6}>
          <Accordion>
            {faqData.map((item, index) => (
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
