import React from "react";
import "./common.css";
import nextArrow from "../../assets/next-arrow.png";

type ButtonProps = {
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="next-button" onClick={onClick}>
      <img src={nextArrow} className="next-arrow" />
    </button>
  );
};

export default Button;
