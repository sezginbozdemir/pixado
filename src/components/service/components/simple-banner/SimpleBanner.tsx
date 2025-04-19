import React from "react";
import "./simple-banner.scss";
interface Props {
  img: string;
}

const SimpleBanner = ({ img }: Props) => {
  return (
    <div className="img-wrapper">
      <img
        className="img"
        src={img || "/project-images/wallpaper-1.png"}
        alt="Pixado"
      />
    </div>
  );
};
export default SimpleBanner;
