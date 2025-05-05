import "./benefits.scss";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@/components/common/buttons/Button";
import Spacing from "@/components/common/Spacing";
import decor from "@/assets/line-group-multi.png";
interface Data {
  benefitsTitleTwo: string;
  benefitsTwo: {
    title: string;
    highlighted?: boolean;
    text?: string;
    list?: string[];
  }[];
  button?: string;
}
interface Props {
  data: Data;
  onClick?: () => void;
  icon?: "number" | "bullet";
}

const VisualBenefits = ({ data, onClick, icon }: Props) => {
  return (
    <div className="visual-benefits-container">
      <img src={decor} alt="pixado" className="visual-decor" />
      <Container>
        <Spacing size={3} />

        <div className="visual-benefits">
          <Row className="title-2">
            <Col>{data.benefitsTitleTwo}</Col>
          </Row>
          <Row>
            {data.benefitsTwo.map((benefit, index) => (
              <Col className="visual-benefits-col" xs={12} lg={6} key={index}>
                <div className="title-4 visual-benefits-title">
                  {icon === "number" ? (
                    <span>{index + 1}.</span>
                  ) : icon === "bullet" ? (
                    <div className="benefits-bullet" />
                  ) : (
                    <img
                      src="/icons/tick.png"
                      width={15}
                      height={15}
                      alt="Pixado"
                    />
                  )}
                  <span className={benefit.highlighted ? `green-title` : ""}>
                    {benefit.title}
                  </span>
                </div>
                {benefit.text && (
                  <div className="body visual-benefits-text">
                    {benefit.text}
                  </div>
                )}
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
          <Row className="title-2">
            <Col>
              {data.button && (
                <Button
                  className="visual-benefits-button"
                  text={data.button}
                  onClick={onClick}
                />
              )}
            </Col>
          </Row>
        </div>
        <Spacing size={3} />
      </Container>
    </div>
  );
};

export default VisualBenefits;
