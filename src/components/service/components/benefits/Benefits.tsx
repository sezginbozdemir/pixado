import "./benefits.scss";
import decor from "@/assets/line-group-multi.png";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@/components/common/buttons/Button";
interface Data {
  benefitsTitle: string;
  benefits: string[];
  benefitsImg: string;
  button: string;
}

interface Props {
  data: Data;
  button?: boolean;
  onClick?: () => void;
}

const Benefits = ({ data, button, onClick }: Props) => {
  return (
    <div className="benefits-container">
      <img src={decor} alt="pixado" className="benefits-decor" />
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <div className="benefits-col-one">
              <div className="title-2"> {data.benefitsTitle}</div>
              <div className="benefits-list">
                {data.benefits.map((item, index) => (
                  <span key={index} className="title-4">
                    <img src="/icons/blue-tick.png" alt="Pixado" /> {item}
                  </span>
                ))}
              </div>
              {button && (
                <Button
                  onClick={onClick}
                  className="benefits-button"
                  text={data.button}
                />
              )}
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <img className="benefits-img" src={data.benefitsImg} alt="Pixado" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Benefits;
