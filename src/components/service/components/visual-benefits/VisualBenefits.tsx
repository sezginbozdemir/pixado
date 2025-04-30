import "./benefits.scss";
import { Col, Row } from "react-bootstrap";
import Button from "@/components/common/buttons/Button";
interface Data {
  benefitsTitleTwo: string;
  benefitsTwo: {
    title: string;
    text: string;
    list?: string[];
  }[];
  button?: string;
}
interface Props {
  data: Data;
  onClick?: () => void;
  num?: boolean;
}

const VisualBenefits = ({ data, onClick, num }: Props) => {
  return (
    <div className="visual-benefits">
      <Row className="title-2">
        <Col>{data.benefitsTitleTwo}</Col>
      </Row>
      <Row>
        {data.benefitsTwo.map((benefit, index) => (
          <Col xs={12} lg={6} className="visual-benefits-col" key={index}>
            <div className="title-4 visual-benefits-title">
              {num ? (
                <span>{index + 1}.</span>
              ) : (
                <img
                  src="/icons/tick.png"
                  width={15}
                  height={15}
                  alt="Pixado"
                />
              )}
              {benefit.title}
            </div>
            <div className="body visual-benefits-text">{benefit.text}</div>
            {benefit.list && (
              <ul className="body">
                {benefit.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </Col>
        ))}
      </Row>
      {data.button && (
        <Row className="title-2">
          <Col>
            <Button
              className="visual-benefits-button"
              text={data.button}
              onClick={onClick}
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default VisualBenefits;
