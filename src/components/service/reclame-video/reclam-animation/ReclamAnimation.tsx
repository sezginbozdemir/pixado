import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import "./reclam-animation.scss";
interface Animation {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}
interface Props {
  data: Animation;
}

const ReclamAnimation = ({ data }: Props) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1.0 });

  useEffect(() => {
    if (isInView) {
      const sequence = async () => {
        await controls.start({
          width: "calc(60% - 1rem)",
          height: "calc(50% - 1rem)",
          transition: { duration: 2, ease: "easeInOut" },
        });
        await controls.start({
          top: "0",
          left: "0",
          transform: "translate(0%, 0%)",
          transition: { duration: 0.5, ease: "easeInOut" },
        });
      };
      sequence();
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="reclam-container">
      <motion.div
        className="box box-one float"
        initial={{
          width: "100%",
          height: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={controls}
      >
        <img
          className="reclam-animation-img"
          src={data.img1 || "/project-images/wallpaper-1.png"}
          alt="pixado"
        />
      </motion.div>
      <div className="flex-one">
        <div className="box-one" />
        <div className="box box-two">
          <img
            className="reclam-animation-img"
            src={data.img2 || "/reclame-video/placeholder-2.png"}
            alt="pixado"
          />
        </div>
      </div>
      <div className="flex-two">
        <div className="box box-three">
          <img
            className="reclam-animation-img"
            src={data.img3 || "/reclame-video/placeholder-2.png"}
            alt="pixado"
          />
        </div>
        <div className="box box-four">
          <img
            className="reclam-animation-img"
            src={data.img4 || "/reclame-video/placeholder.png"}
            alt="pixado"
          />
        </div>
      </div>
    </div>
  );
};

export default ReclamAnimation;
