import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./reclam-animation.scss";
interface Props {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

const ReclamAnimation = ({ img1, img2, img3, img4 }: Props) => {
  const controls = useAnimation();

  useEffect(() => {
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
  }, [controls]);

  return (
    <div className="reclam-container">
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
          className="img"
          src={img1 || "/project-images/wallpaper-1.png"}
          alt="pixado"
        />
      </motion.div>
      <div className="flex-one">
        <div className="box-one" />
        <div className="box box-two">
          <img
            className="img"
            src={img2 || "/reclame-video/placeholder-2.png"}
            alt="pixado"
          />
        </div>
      </div>
      <div className="flex-two">
        <div className="box box-three">
          <img
            className="img"
            src={img3 || "/reclame-video/placeholder-2.png"}
            alt="pixado"
          />
        </div>
        <div className="box box-four">
          <img
            className="img"
            src={img4 || "/reclame-video/placeholder.png"}
            alt="pixado"
          />
        </div>
      </div>
    </div>
  );
};

export default ReclamAnimation;
