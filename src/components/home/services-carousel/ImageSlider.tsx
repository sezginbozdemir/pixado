import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/home/services-carousel.json";
import RotatingLabel from "@/components/common/RotatingLabel";

interface ImageSliderProps {
  currentIndex: number;
  direction: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  currentIndex,
  direction,
}) => {
  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
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
        className="image-slider"
      >
        <div className="image-slider-container">
          <img className="visual-img" src={data[currentIndex].imgUrl} />
          <div className="visual-label-container">
            <RotatingLabel />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageSlider;
