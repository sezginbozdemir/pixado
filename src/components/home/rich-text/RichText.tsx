import React from "react";
import "./rich-text.css";
import { Container, Col, Row } from "react-bootstrap";

const RichText = () => {
  return (
    <Container className="rich-text">
      <div className="title-1 mobile-text">
        <Row>SERVICII</Row>
        <Row>CARE ITI PUN</Row>
        <Row>BRANDUL</Row>
        <Row className="lumina">ÎN LUMINĂ</Row>
      </div>

      {/* Tablet */}
      <div className="title-1 tablet-text">
        <Row>SERVICII CARE</Row>
        <Row>ITI PUN BRANDUL</Row>
        <Row className="lumina">ÎN LUMINĂ</Row>
      </div>

      {/* Desktop */}
      <div className="title-1 desktop-text">
        <Row>SERVICII CARE ITI PUN</Row>
        <Row className="desktop-row">
          BRANDUL{" "}
          <Col>
            <div className="lumina">ÎN LUMINĂ</div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default RichText;
