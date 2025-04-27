import rotatingLabel from "@/assets/rotating-label.png";
import vector from "@/assets/vector.png";
import "./common.css";
const RotatingLabel = () => {
  return (
    <>
      <div className="rotating-label-element">
        <img className="rotating-label" src={rotatingLabel}></img>
        <img className="vector" src={vector}></img>
      </div>
    </>
  );
};

export default RotatingLabel;
