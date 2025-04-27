import "./benefits.scss";
import { Col, Row } from "react-bootstrap";
import Button from "@/components/common/buttons/Button";
interface Data {
  benefitsTitleTwo: string;
  benefitsTwo: {
    title: string;
    text: string;
  }[];
  button: string;
}
interface Props {
  data: Data;
  onClick: () => void;
}

const VisualBenefits = ({ data, onClick }: Props) => {
  return (
    <div className="visual-benefits">
      <Row className="title-2">
        <Col>{data.benefitsTitleTwo}</Col>
      </Row>
      <Row>
        {data.benefitsTwo.map((benefit, index) => (
          <Col xs={12} lg={6} className="visual-benefits-col" key={index}>
            <div className="title-4 visual-benefits-title">
              <img src="/tick.png" width={15} height={15} alt="Pixado" />
              {benefit.title}
            </div>
            <div className="body visual-benefits-text">{benefit.text}</div>
          </Col>
        ))}
      </Row>
      <Row className="title-2">
        <Col>
          <Button
            className="visual-benefits-button"
            text={data.button}
            onClick={onClick}
          />
        </Col>
      </Row>
    </div>
  );
};

export default VisualBenefits;
