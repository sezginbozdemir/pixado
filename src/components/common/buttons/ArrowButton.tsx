import React from "react";
import "./buttons.css";
import nextArrow from "../../../assets/arrow.png";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
};

const ArrowButton: React.FC<ButtonProps> = ({ onClick, className }) => {
  return (
    <button className={`arrow-button ${className}`} onClick={onClick}>
      <img src={nextArrow} className="next-arrow" />
    </button>
  );
};

export default ArrowButton;
