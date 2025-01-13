import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../common/Button";
import Text from "../../common/Text";
import Title from "../../common/Title";
import ProgressBase from "../../../assets/progress-base.png";
import data from "./data.json";
import { ServiceData } from "./type";

interface ProgressSliderProps {
  currentIndex: number;
  direction: number;
}

const ProgressSlider: React.FC<ProgressSliderProps> = ({
  currentIndex,
  direction,
}) => {
  const typedData = data as ServiceData[];

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
    <>
      <AnimatePresence custom={direction}>
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
          <img
            className="progress-base"
            src={ProgressBase}
            alt="Progress Base"
          />
          <Button
            className="progress-button"
            text={<Text variant="button-body">Afla mai multe</Text>}
          />
          <div className="progress-element">
            {typedData[currentIndex].stats.map((stat, index) => (
              <div key={index} className="progress-container">
                <span className="progress-label">
                  <Title variant="h3">{stat.label}</Title>
                </span>
                <div className="progress-row">
                  <div className="progress-bar" data-value={stat.value}>
                    <div
                      className="progress-fill"
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                  <span className="progress-percentage">
                    <Title variant="h3">{stat.value}%</Title>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProgressSlider;
