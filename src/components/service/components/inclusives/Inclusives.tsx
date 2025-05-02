import Spacing from "@/components/common/Spacing";
import "./inclusives.scss";
import { Col, Container, Row } from "react-bootstrap";
import decor from "@/assets/line-group-2.png";
interface Data {
  inclusiveTitle: string;
  inclusives: string[];
}

interface Props {
  data: Data;
  hideDecor?: boolean;
}

const Inclusives = ({ data, hideDecor }: Props) => {
  return (
    <div className="inclusives-container">
      {!hideDecor && (
        <img src={decor} alt="pixado" className="inclusives-decor" />
      )}
      <Container>
        <Spacing size={3} />
        <div className="inclusives">
          <div className="title-2 inclusiveTitle">{data.inclusiveTitle}</div>
          <Row>
            {data.inclusives.map((item, index) => (
              <Col className="title-4" key={index} xs={12} lg={6}>
                <div className="col-item">{item}</div>
              </Col>
            ))}
          </Row>
        </div>
        <Spacing size={3} />
      </Container>
    </div>
  );
};

export default Inclusives;
