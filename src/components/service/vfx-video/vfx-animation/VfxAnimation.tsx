import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./vfx-animation.scss";
import { useMediaQuery } from "react-responsive";

const VfxAnimation = () => {
  const [active, setActive] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 991 });
  const isLaptop = useMediaQuery({ maxWidth: 1199 });
  const isLargeDesktop = useMediaQuery({ maxWidth: 1399 });
  const getResponsiveAnimate = () => {
    if (isMobile) {
      return {
        topLeft: { top: "0", left: "-250%" },
        bottomRight: { top: "0", left: "10%" },
        center: { top: "0", left: "-125%" },
      };
    } else if (isTablet) {
      return {
        topLeft: { top: "0", left: "-170%" },
        bottomRight: { top: "0", left: "15%" },
        center: { top: "0", left: "-80%" },
      };
    } else if (isLaptop) {
      return {
        topLeft: { top: "0", left: "-95%" },
        bottomRight: { top: "0", left: "25%" },
        center: { top: "0", left: "-45%" },
      };
    } else if (isLargeDesktop) {
      return {
        topLeft: { top: "0", left: "-80%" },
        bottomRight: { top: "0", left: "36%" },
        center: { top: "0", left: "-30%" },
      };
    } else {
      // XL+
      return {
        topLeft: { top: "0", left: "-71%" },
        bottomRight: { top: "0", left: "36%" },
        center: { top: "0", left: "-18%" },
      };
    }
  };
  const [animateTargets, setAnimateTargets] = useState(getResponsiveAnimate());

  useEffect(() => {
    setAnimateTargets(getResponsiveAnimate());
  }, [isMobile, isTablet, isLaptop, isLargeDesktop]);

  const handleClick = () => {
    setActive(true);
  };

  return (
    <div className="vfx-ani-container" onClick={handleClick}>
      <div className="title-2 vfx-ani-text">
        Gata să îți vezi ideea pe ecran, exact cum ți-ai imaginat?
      </div>

      <>
        <motion.div
          className="vfx-line vfx-green topLeft"
          animate={active ? animateTargets.topLeft : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        <motion.div
          className="vfx-line vfx-green bottomRight"
          animate={active ? animateTargets.bottomRight : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
        />

        <motion.div
          className="vfx-line vfx-purple center"
          animate={active ? animateTargets.center : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        />
      </>
    </div>
  );
};

export default VfxAnimation;
