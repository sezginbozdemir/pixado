import React from "react";
import "./intro.css";
import { Row, Col } from "react-bootstrap";
interface Intro {
  title: string;
  text: string;
  description: string;
}

interface Props {
  data: Intro;
}

const Intro = ({ data }: Props) => {
  return (
    <Row className="web-intro-row">
      <Col className="web-header-col" xs={12} lg={6}>
        <div className="web-design-header">
          <div className="eyebrow-body web-breadcrumb">{data.title}</div>
          <div className="title-2">{data.text}</div>
        </div>
      </Col>
      <Col className="web-text-col" xs={12} lg={6}>
        <div className="body web-text">{data.description}</div>
      </Col>
    </Row>
  );
};
export default Intro;
