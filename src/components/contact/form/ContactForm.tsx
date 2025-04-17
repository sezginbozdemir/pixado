import React from "react";
import { useState } from "react";
import "./form.css";
import { Col, Form, Row } from "react-bootstrap";
import Button from "../../common/buttons/Button";
import dot from "../../../assets/green-dot.png";

const ContactForm = () => {
  return (
    <>
      <Form className="contact-form">
        <Row className="contact-row">
          <Col xs={12} lg={6}>
            <Form.Group className="input-wrapper-left">
              <Form.Control
                type="text"
                className="body contact-input"
                placeholder="Nume Prenume"
              />
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group className="input-wrapper-right">
              <Form.Control
                type="email"
                className="body contact-input"
                placeholder="Adresa de email"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="contact-row">
          <Col xs={12} lg={6}>
            <Form.Group className="input-wrapper-left">
              <Form.Control
                type="number"
                className="body contact-input"
                placeholder="Numar de telefon"
              />
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group className="input-wrapper-right">
              <Form.Control
                type="text"
                className="body contact-input"
                placeholder="Serviciul"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="contact-row">
          <Col xs={12}>
            <Form.Group>
              <Form.Control
                as="textarea"
                className="contact-textarea body contact-input"
                placeholder="Nume Prenume"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row className="contact-submit-row">
        <Col xs={12} lg={6}>
          <Row className="body">
            Trimițând cererea sunteți de acord cu Politica de Confidențialitate
          </Row>
          <Button className="contact-button" text="Trimite cererea" />
        </Col>
        <Col className="submit-second-col" xs={12} lg={{ span: 4, offset: 2 }}>
          <Row className="body">Urmăriține pe paginile de social media</Row>

          <Row>
            <Col xs={4}>
              <img src={dot} className="contact-dot" alt="Pixado" />
            </Col>
            <Col xs={4}>
              <img src={dot} className="contact-dot" alt="Pixado" />
            </Col>
            <Col xs={4}>
              <img src={dot} className="contact-dot" alt="Pixado" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default ContactForm;
