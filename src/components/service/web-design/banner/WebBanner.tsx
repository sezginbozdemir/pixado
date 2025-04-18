import React from "react";
import "./banner.css";
import decor from "../../../../assets/green-decor.png";

const WebBanner = () => {
  return (
    <div className="web-banner-container">
      <div className="web-banner-wrapper">
        <img
          src="/project-images/wallpaper-1.png"
          className="web-banner-img"
          alt="Pixado"
        />
      </div>
      <img src={decor} className="web-decor" alt="Pixado" />
    </div>
  );
};

export default WebBanner;
