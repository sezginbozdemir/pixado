import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./scroll-animation.css";

const ScrollMask = () => {
  const ref = useRef(null);
  const { scrollYProgress: divScrollProgress } = useScroll({ target: ref });
  const { scrollYProgress: windowScrollProgress } = useScroll();
  const scale = useTransform(windowScrollProgress, [0.2, 0.4], [20, 1]);
  const yText = useTransform(windowScrollProgress, [0.4, 1], [0, -500]);
  const yPos = useTransform(divScrollProgress, [0.3, 1], [0, 100]);
  const opacity = useTransform(windowScrollProgress, [0.3, 0.4], [0, 1]);

  return (
    <motion.div ref={ref} style={{}} className="scroll-mask-container">
      <motion.div className="scroll-content" style={{ opacity }}>
        <div className="mask-container">
          <svg
            className="text-mask"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
          >
            <defs>
              <mask id="textMask">
                <rect width="100%" height="100%" fill="white" />
                <motion.text
                  style={{ scale: scale, y: yText }}
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#091100"
                  fontSize="15"
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
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollMask;
