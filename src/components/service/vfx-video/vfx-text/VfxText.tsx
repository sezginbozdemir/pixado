import React from "react";
import "./vfx.scss";
import Button from "../../../common/buttons/Button";
interface Reclame {
  header: string;
  title: string;
  description: string;
}
interface Props {
  data: Reclame;
}

const VfxText = ({ data }: Props) => {
  return (
    <div className="vfx-text-container">
      <div className="vfx-header-container">
        <div className="eyebrow-body vfx-header">{data.header}</div>
        <div className="title-2">{data.title}</div>
      </div>
      <div className="vfx-flex-container">
        <div className="body vfx-text">{data.description}</div>
        <Button className="vfx-text-button" text="Contacteaza-ne" />
      </div>
    </div>
  );
};
export default VfxText;
