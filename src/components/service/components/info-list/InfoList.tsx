import Spacing from "@/components/common/Spacing";
import "./info-list.scss";
import { Col, Row } from "react-bootstrap";

interface InfoList {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  data: InfoList[];
}

const InfoList = ({ data }: Props) => {
  return (
    <Row>
      <Spacing size={3} />
      {data.map((item, index) => (
        <Col className="info-col-wrapper" key={index} xs={12} lg={6}>
          <div className="info-col">
            <div className="header">
              <img src={item.icon} className="info-icon" />
              <div className="info-title title-2">{item.title}</div>
            </div>
            <div className="body">{item.description}</div>
          </div>
        </Col>
      ))}
      <Spacing size={3} />
    </Row>
  );
};

export default InfoList;
