import { Spinner } from "react-bootstrap";
import "./common.css";

const Loading = () => {
  return (
    <div className="loading-screen">
      <Spinner animation="border" variant="success" />
    </div>
  );
};

export default Loading;
