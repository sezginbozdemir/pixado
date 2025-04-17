import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import bannerWallpaper from "../../../assets/wallpaper-2.png";
import lineGroup1 from "../../../assets/line-group-1.png";
import lineGroup2 from "../../../assets/line-group-2.png";
import lineGroupMulti from "../../../assets/line-group-multi.png";
import RotatingLabel from "../../common/RotatingLabel";
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
    <Container className="banner-container">
      <Row className="banner-content">
        <Col xs={12} lg={6} className="banner-services">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideFromLeft}
          >
            <div className="title-1">TESTING....</div>

            <div className="title-1 banner-text">
              SERVICII DE <br />
              CREARE <br />
              PREMIUM
            </div>
            <div className="banner-labels">
              <div className="title-3 banner-label">WEBSITURI</div>
              <div className="title-3 banner-label">RECLAME VIDEO</div>
              <div className="title-3 banner-label">VFX</div>
            </div>
          </motion.div>
        </Col>

        <Col xs={12} lg={6} className="banner-image">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideFromRight}
            className="banner-motion"
          >
            <div className="banner-wallpaper-wrapper">
              <img className="banner-wallpaper" src={bannerWallpaper} />
            </div>

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
              <div className="menu-body-bold projects-count">50+</div>
              <div className="projects-text body">
                Proiecte finalizate cu succes{" "}
                <span className="alaturi">alaturi de Pixado</span>
              </div>
            </motion.div>
          </motion.div>
          <img className="line-group-multi" src={lineGroupMulti} />
          <img className="line-group-2" src={lineGroup2} />
          <img className="line-group-1" src={lineGroup1} />
        </Col>
      </Row>
    </Container>
  );
};

export default BannerSection;
