import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import bannerWallpaper from "@/assets/wallpaper-2.png";
import lineGroup1 from "@/assets/line-group-1.png";
import lineGroup2 from "@/assets/line-group-2.png";
import lineGroupMulti from "@/assets/line-group-multi.png";
import RotatingLabel from "@//components/common/RotatingLabel";
import "./banner-section.css";

const BannerSection = () => {
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setHasRendered(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);
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
        <img className="line-group-multi" src={lineGroupMulti} />
        <img className="line-group-1" src={lineGroup1} />

        <Col xs={12} lg={6} className="banner-services">
          <motion.div
            initial="hidden"
            animate={hasRendered ? "visible" : "hidden"}
            variants={slideFromLeft}
          >
            <div className="title-1 banner-text">
              SERVICII
              <br />
              ONLINE
              <br />
              PREMIUM
            </div>
            <div className="banner-labels">
              <div className="title-3 banner-label">BRANDING</div>

              <div className="title-3 banner-label">WEBSITURI</div>
              <div className="title-3 banner-label">ONLINE MARKETING</div>
            </div>
          </motion.div>
        </Col>

        <Col xs={12} lg={6} className="banner-image">
          <motion.div
            initial="hidden"
            animate={hasRendered ? "visible" : "hidden"}
            variants={slideFromRight}
            className="banner-motion"
          >
            <div className="banner-wallpaper-wrapper">
              <img className="banner-wallpaper" src={bannerWallpaper} />
            </div>

            <motion.div
              initial="hidden"
              animate={hasRendered ? "visible" : "hidden"}
              variants={visibleNow}
              className="rotating-label-container"
            >
              <RotatingLabel />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={hasRendered ? "visible" : "hidden"}
              variants={visibleNow}
              className="projects-count-container"
            >
              <div className="menu-body-bold projects-count">50+</div>
              <div className="projects-text">
                Proiecte finalizate cu succes{" "}
                <span className="alaturi">alaturi de pixado</span>
              </div>
            </motion.div>
          </motion.div>
          <img className="line-group-2" src={lineGroup2} />
        </Col>
      </Row>
    </Container>
  );
};

export default BannerSection;
