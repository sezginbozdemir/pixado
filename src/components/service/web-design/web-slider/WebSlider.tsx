import { useRef } from "react";
import "./slider.css";
import tick from "@/assets/blue-tick.png";
import NextButton from "@/components/common/buttons/NextButton";
import { Container } from "react-bootstrap";
import { useScroll, motion, useTransform } from "framer-motion";
import decor from "@/assets/line-group-multi.png";

type Data = {
  header: string;
  title: string;
  text: string;
  list: string[];
};
interface Props {
  info: Data;
}

const WebSlider = ({ info }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const top = useTransform(scrollYProgress, [0, 1], ["-20%", "50%"]);
  return (
    <div ref={ref} className="web-wrapper">
      <div className="web-container">
        <img src={decor} className="web-slider-decor" alt="pixado" />
        <motion.div
          style={{ scale, top, x: "-50%", left: "50%", y: "-50%" }}
          className="web-motion"
        />
        <Container>
          <div className="web-flex">
            <div className="first-slide-web">
              <div>
                <div className="eyebrow-body first-web-head">{info.header}</div>
                <div className="title-2">{info.title}</div>
              </div>
              <NextButton className="next-web" />
              <div className="body first-text">{info.text}</div>
            </div>
            <ul className="web-col-two">
              {info.list.map((item, idx) => (
                <li key={idx}>
                  <img src={tick} alt="pixado" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default WebSlider;
