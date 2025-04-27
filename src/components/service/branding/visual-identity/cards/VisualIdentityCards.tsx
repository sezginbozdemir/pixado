import React from "react";
import "./cards.scss";
import { Col, Row } from "react-bootstrap";
import Card from "./Card";
interface Data {
  shortTextOne: string;
  cards: {
    img: string;
    text: string;
  }[];
}

interface Props {
  data: Data;
}

const VisualIdentityCards = ({ data }: Props) => {
  return (
    <div className="visual-identity-cards">
      <div className="title-2">{data.shortTextOne}</div>
      <Row>
        {data.cards.map((card, index) => (
          <Col className="visual-identity-col" key={index} xs={12} lg={6}>
            <Card img={card.img} text={card.text} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default VisualIdentityCards;
