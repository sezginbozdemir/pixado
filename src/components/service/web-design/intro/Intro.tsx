import React from "react";
import "./intro.css";
import { Row, Col } from "react-bootstrap";

const Intro = () => {
  return (
    <Row className="web-intro-row">
      <Col className="web-header-col" xs={12} lg={6}>
        <div className="web-design-header">
          <div className="eyebrow-body web-breadcrumb">Web Design</div>
          <div className="title-2">SERVICII DE WEB DESIGN PREMIUM</div>
        </div>
      </Col>
      <Col className="web-text-col" xs={12} lg={6}>
        <div className="body web-text">
          La Pixado, știm că un site bine realizat nu este doar despre aspect,
          ci despre experiența pe care o oferă utilizatorilor. Fie că ai nevoie
          de un design modern și elegant sau de un site complex, optimizat
          pentru performanță, suntem aici să-ți aducem viziunea la viață.
        </div>
      </Col>
    </Row>
  );
};
export default Intro;
