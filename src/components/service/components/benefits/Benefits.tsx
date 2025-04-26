import React from "react";
import "./benefits.scss";
import { Col, Row } from "react-bootstrap";
import Button from "../../../common/buttons/Button";
interface Data {
  benefitsTitle: string;
  benefits: string[];
  benefitsImg: string;
  button: string;
}

interface Props {
  data: Data;
  button?: boolean;
}

const Benefits = ({ data, button }: Props) => {
  return (
    <div className="benefits">
      <Row>
        <Col xs={12} lg={6}>
          <div className="benefits-col-one">
            <div className="title-2"> {data.benefitsTitle}</div>
            <div className="benefits-list">
              {data.benefits.map((item, index) => (
                <span key={index} className="title-4">
                  <img src="/blue-tick.png" alt="Pixado" /> {item}
                </span>
              ))}
            </div>
            {button && (
              <Button className="benefits-button" text={data.button} />
            )}
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <img className="benefits-img" src={data.benefitsImg} alt="Pixado" />
        </Col>
      </Row>
    </div>
  );
};
export default Benefits;
