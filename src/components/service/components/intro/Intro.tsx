import "./intro.css";
import { Row, Col } from "react-bootstrap";
interface Intro {
  title: string;
  text: string;
  description: string;
  subDescription?: string;
  services?: {
    text: string;
    title: string;
    button: string;
  }[];
}

interface Props {
  data: Intro;
  branding?: boolean;
}

const Intro = ({ data, branding }: Props) => {
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
        {branding && (
          <div className="body web-text">
            {data.subDescription}
            <span className="title-3 branding-services">
              {data.services?.map((service) => service.title).join(", ")}
            </span>
          </div>
        )}
      </Col>
    </Row>
  );
};
export default Intro;
