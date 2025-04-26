import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import "./scroll-animation.css";

const ScrollMask = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [15, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div ref={ref} className="scroll-mask-container">
      <div className="scroll-content">
        <motion.img
          style={{
            opacity: opacity,
            scale: scale,
          }}
          src={isSmallScreen ? `/pixado-mobile.png` : `/pixado.png`}
          className="text-mask"
        />
      </div>
    </div>
  );
};

export default ScrollMask;
