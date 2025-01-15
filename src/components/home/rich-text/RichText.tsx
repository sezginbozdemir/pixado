import React from "react";
import "./rich-text.css";
import { Container } from "react-bootstrap";

const RichText = () => {
  return (
    <Container className="rich-text">
      <div className="title-1 first-row">SERVICII CARE ITI PUN</div>
      <div className="second-row">
        <div className="title-1 first-col">BRANDUL</div>
        <div className="title-1 second-col">ÎN LUMINĂ</div>
      </div>
      <div className="title-1 third-row">ÎN LUMINĂ</div>
    </Container>
  );
};

export default RichText;
