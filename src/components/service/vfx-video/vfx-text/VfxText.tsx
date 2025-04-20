import React from "react";
import "./vfx.scss";
import Button from "../../../common/buttons/Button";
import decorTwo from "../../../../assets/line-group-multi.png";
import decorThree from "../../../../assets/line-group-1.png";

import { useNavigate } from "react-router-dom";
interface Reclame {
  header: string;
  title: string;
  description: string;
}
interface Props {
  data: Reclame;
}

const VfxText = ({ data }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="vfx-text-container">
      <img src={decorThree} className="decor-one-vfx" alt="Pixado" />
      <img src={decorTwo} className="decor-two-vfx" alt="Pixado" />
      <img src={decorThree} className="decor-three-vfx" alt="Pixado" />
      <div className="vfx-header-container">
        <div className="eyebrow-body vfx-header">{data.header}</div>
        <div className="title-2">{data.title}</div>
      </div>
      <div className="vfx-flex-container">
        <div className="body vfx-text">{data.description}</div>
        <Button
          onClick={() => navigate("/contact")}
          className="vfx-text-button"
          text="Contacteaza-ne"
        />
      </div>
    </div>
  );
};
export default VfxText;
