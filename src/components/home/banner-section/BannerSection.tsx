import React from "react";
import Header from "../../common/Header";
import substract from "../../../assets/subtract.png";
import lineGroup1 from "../../../assets/line-group-1.png";
import lineGroup2 from "../../../assets/line-group-2.png";
import lineGroupMulti from "../../../assets/line-group-multi.png";
import RotatingLabel from "../../common/RotatingLabel";
import "./banner-section.css";
import Title from "../../common/Title";

const BannerSection = () => {
  return (
    <div className="banner-section">
      <Header />
      <div className="banner-content">
        <div className="banner-services">
          <div className="banner-text">
            <Title variant="h1">
              SERVICII DE <br />
              CREARE <br />
              PREMIUM
            </Title>
          </div>
          <div className="banner-labels">
            <div className="banner-label">
              <Title variant="h3">WEBSITURI</Title>
            </div>
            <div className="banner-label">
              <Title variant="h3">RECLAME VIDEO</Title>
            </div>
            <div className="banner-label">
              <Title variant="h3">VFX</Title>
            </div>
          </div>
        </div>

        <div className="banner-image">
          <img className="substract" src={substract} alt="substract" />
          <div className="rotating-label-container">
            <RotatingLabel />
          </div>
          <div className="projects-count-container">
            <div className="projects-count">
              <Title variant="menu-body-bold">50+</Title>
            </div>
            <div className="projects-text">
              Proiecte finalizate cu succes alaturi de Pixado
            </div>
          </div>
        </div>
        <img className="line-group-1" src={lineGroup1} />
        <img className="line-group-2" src={lineGroup2} />
        <img className="line-group-multi" src={lineGroupMulti} />
      </div>
    </div>
  );
};

export default BannerSection;
