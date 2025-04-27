import React from "react";
import "./cards.scss";
import placeholder from "../../../../../assets/placeholder.png";
interface Props {
  img: string;
  text: string;
}
const Card = ({ img, text }: Props) => {
  return (
    <div className="visual-card-container">
      <div className="visual-card-text title-4">{text}</div>
      <div className="visual-card-wrapper">
        <img
          src={img ? img : placeholder}
          alt="Pixado"
          className="visual-card-img"
        />
      </div>
    </div>
  );
};
export default Card;
