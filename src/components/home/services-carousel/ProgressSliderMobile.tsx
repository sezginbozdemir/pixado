import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../common/buttons/Button";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
interface ServiceData {
  title: string;
  imgUrl: string;
  stats: { label: string; value: number }[];
}

interface ProgressSliderProps {
  currentIndex: number;
  direction: number;
  data: ServiceData[];
}

const ProgressSliderMobile: React.FC<ProgressSliderProps> = ({
  currentIndex,
  direction,
  data,
}) => {
  useEffect(() => {
    const bars = document.querySelectorAll<HTMLDivElement>(".progress-bar");

    bars.forEach((bar) => {
      const value = bar.getAttribute("data-value");
      const fill = bar.querySelector<HTMLDivElement>(".progress-fill");
      if (fill && value) {
        fill.style.width = value + "%";
      }
    });
  }, []);
  const navigate = useNavigate();

  const handleMoreClick = () => {
    const title = data[currentIndex].title;
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/servicii/${slug}`);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence custom={direction}>
      <img
        className="progress-base"
        src="/service-images/progress-base-mobile.png"
      />
      <motion.div
        key={currentIndex}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          y: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.5 },
        }}
        className="progress-slider"
      >
        <Row className="progress-element">
          <Row className="progress-button-row">
            <Button
              onClick={handleMoreClick}
              className="button-body progress-button"
              text="Afla mai multe"
            />
          </Row>

          {data[currentIndex].stats.map((stat, index) => (
            <div key={index} className="progress-container">
              <Row className="title-3 progress-label">{stat.label}</Row>
              <Row className="progress-row">
                <Col xs={10} className="progress-bar" data-value={stat.value}>
                  <div
                    className="progress-fill"
                    style={{ width: `${stat.value}%` }}
                  />
                </Col>
                <Col xs={2} className="title-3 progress-percentage">
                  {stat.value}%
                </Col>
              </Row>
            </div>
          ))}
        </Row>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProgressSliderMobile;
