import React from "react";
import { motion } from "framer-motion";
import Header from "../../common/Header";
import substract from "../../../assets/subtract.png";
import lineGroup1 from "../../../assets/line-group-1.png";
import lineGroup2 from "../../../assets/line-group-2.png";
import lineGroupMulti from "../../../assets/line-group-multi.png";
import RotatingLabel from "../../common/RotatingLabel";
import Title from "../../common/Title";
import "./banner-section.css";

const BannerSection = () => {
  const slideFromLeft = {
    hidden: { x: "-100%" },
    visible: { x: "0%", transition: { duration: 0.9, ease: "easeOut" } },
  };

  const slideFromRight = {
    hidden: { x: "100%" },
    visible: { x: "0%", transition: { duration: 0.9, ease: "easeOut" } },
  };

  const visibleNow = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut", delay: 1.5 },
    },
  };

  return (
    <div className="banner-section">
      <Header />
      <div className="banner-content">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideFromLeft}
          className="banner-services"
        >
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
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideFromRight}
          className="banner-image"
        >
          <img className="substract" src={substract} alt="substract" />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={visibleNow}
            className="rotating-label-container"
          >
            <RotatingLabel />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={visibleNow}
            className="projects-count-container"
          >
            <div className="projects-count">
              <Title variant="menu-body-bold">50+</Title>
            </div>
            <div className="projects-text">
              Proiecte finalizate cu succes alaturi de Pixado
            </div>
          </motion.div>
        </motion.div>
        <img className="line-group-1" src={lineGroup1} />
        <img className="line-group-2" src={lineGroup2} />
        <img className="line-group-multi" src={lineGroupMulti} />
      </div>
    </div>
  );
};

export default BannerSection;
