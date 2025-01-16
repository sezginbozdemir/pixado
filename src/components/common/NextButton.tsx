import React from "react";
import "./common.css";
import nextArrow from "../../assets/next-arrow.png";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, className }) => {
  return (
    <button className={`next-button ${className}`} onClick={onClick}>
      <img src={nextArrow} className="next-arrow" />
    </button>
  );
};

export default Button;
