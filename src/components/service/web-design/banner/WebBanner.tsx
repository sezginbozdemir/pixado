import React from "react";
import "./banner.css";
import decor from "../../../../assets/green-decor.png";
interface Props {
  img: string;
}

const WebBanner = ({ img }: Props) => {
  return (
    <div className="web-banner-container">
      <div className="web-banner-wrapper">
        <img
          src={img || "/project-images/wallpaper-1.png"}
          className="web-banner-img"
          alt="Pixado"
        />
      </div>
      <img src={decor} className="web-decor" alt="Pixado" />
    </div>
  );
};

export default WebBanner;
