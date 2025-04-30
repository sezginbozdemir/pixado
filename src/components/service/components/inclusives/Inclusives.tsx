import Spacing from "@/components/common/Spacing";
import "./inclusives.scss";
import { Col, Row } from "react-bootstrap";
interface Data {
  inclusiveTitle: string;
  inclusives: string[];
}

interface Props {
  data: Data;
}

const Inclusives = ({ data }: Props) => {
  return (
    <>
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
    </>
  );
};

export default Inclusives;
