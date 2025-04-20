import React from "react";
import "./reclame-text.scss";
import Button from "../../../common/buttons/Button";
interface Reclame {
  title: string;
  description: string;
  belowSection: {
    line1: string;
    line2: string;
  };
}
interface Props {
  data: Reclame;
}

const ReclameText = ({ data }: Props) => {
  return (
    <div className="reclame-text-container">
      <div className="title-2">{data.title}</div>
      <div className="main-container">
        <div className="flex-container">
          <div className="body reclame-text">{data.description}</div>
          <Button className="reclame-text-button" text="Contacteaza-ne" />
        </div>
        <div className="see-below-flex">
          <div className="see-below">
            <div className="title-3">{data.belowSection.line1}</div>
            <div className="title-3 green">{data.belowSection.line2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReclameText;
