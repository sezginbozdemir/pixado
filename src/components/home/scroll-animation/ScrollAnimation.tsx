import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import "./scroll-animation.css";

const ScrollMask = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [90, 5]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  const scaleSmallScreen = useTransform(scrollYProgress, [0, 1], [5, 90]);
  const opacitySmallScreen = useTransform(scrollYProgress, [0.2, 0.45], [1, 0]);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div ref={ref} className="scroll-mask-container">
      <div className="scroll-content">
        <motion.div
          style={{ scale: isSmallScreen ? scaleSmallScreen : scale }}
          className="mask-container"
        >
          <svg className="text-mask" width="100%" height="100%">
            <defs>
              <mask id="textMask">
                <motion.rect
                  style={{
                    opacity: isSmallScreen ? opacitySmallScreen : opacity,
                  }}
                  width="100%"
                  height="100%"
                  fill="white"
                />
                <motion.text
                  style={{
                    opacity: isSmallScreen ? opacitySmallScreen : opacity,
                  }}
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#091100"
                >
                  PIXADO
                </motion.text>
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="#091100"
              mask="url(#textMask)"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollMask;
