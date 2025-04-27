import "./intro.scss";
import { Col, Row } from "react-bootstrap";
interface Data {
  shortTextOne: string;
  shortTextTwo: string;
  words: string[];
  banner: string;
}

interface Props {
  data: Data;
}

const LogoDesignIntro = ({ data }: Props) => {
  return (
    <div className="logo-design-intro">
      <Row className="intro-row-one">
        <Col xs={12} lg={6} className=" intro-col-one body">
          <div className="shortTextOne">{data.shortTextOne}</div>
        </Col>
        <Col xs={12} lg={6} className="words">
          {data.words.map((word) => (
            <span className="title-2 word">{word}</span>
          ))}
        </Col>
      </Row>
      <div className="intro-row-two title-2">
        <div>{data.shortTextTwo}</div>
      </div>
      <div className="intro-row-three">
        <img className="intro-row-banner" src={data.banner} alt="Pixado" />
      </div>
    </div>
  );
};

export default LogoDesignIntro;
