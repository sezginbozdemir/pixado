import React, { useState } from "react";
import "./services-carousel.css";
import Title from "../../common/Title";
import Text from "../../common/Text";
import GreenLine from "../../../assets/green-line.png";
import lineGroup1 from "../../../assets/line-group-1.png";
import lineGroup2 from "../../../assets/line-group-2.png";
import lineGroupMulti from "../../../assets/line-group-multi.png";
import ProgressSlider from "./ProgressSlider";
import ImageSlider from "./ImageSlider";
import data from "./data.json";

interface ServiceData {
  title: string;
  imgUrl: string;
  stats: { label: string; value: number }[];
}

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); //

  const handleClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  return (
    <div className="services-container">
      <div className="services-carousel">
        <div className="info">
          <div className="info-details">
            <div className="service-options">
              {data.map((data: ServiceData, index: number) => (
                <div
                  key={index}
                  className={`service-option ${
                    currentIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {currentIndex === index && (
                    <img
                      width={35}
                      height={5}
                      className="green-line"
                      src={GreenLine}
                    />
                  )}
                  <Title variant="h2">{data.title}</Title>
                </div>
              ))}
            </div>
            <div className="service-text">
              <p>
                <Text variant="body">
                  Primul impact contează – iar noi știm cum să-l transformăm
                  într-o conexiune. Creăm website-uri care nu doar arată bine,
                  ci și funcționează impecabil, oferind utilizatorilor o
                  experiență fluidă și memorabilă. Fie că ai nevoie de un design
                  modern și minimalist sau de ceva plin de personalitate, noi
                  aducem viziunea ta la viață.
                </Text>
              </p>
              <p>
                <Text variant="body">
                  La intersecția dintre creativitate și funcționalitate,
                  proiectele noastre sunt optimizate pentru toate dispozitivele
                  și construite să atragă atenția.Un site care nu doar arată
                  bine, ci transmite esența brandului tău cu fiecare detaliu.{" "}
                </Text>
              </p>
            </div>
          </div>

          <div className="info-progress">
            <ProgressSlider currentIndex={currentIndex} direction={direction} />
          </div>
        </div>
        <div className="visual">
          <ImageSlider currentIndex={currentIndex} direction={direction} />
        </div>
        <img className="line-service-1" src={lineGroup1} />
        <img className="line-service-2" src={lineGroup2} />
        <img className="line-service-multi" src={lineGroupMulti} />
      </div>
      <div className="info-progress-mobil">
        <ProgressSlider currentIndex={currentIndex} direction={direction} />
      </div>
    </div>
  );
};

export default ServicesCarousel;
