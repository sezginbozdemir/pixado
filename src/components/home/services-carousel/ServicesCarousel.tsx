import React, { useEffect } from "react";
import "./services-carousel.css";
import Title from "../../common/Title";
import Text from "../../common/Text";
import Button from "../../common/Button";
import ProgressBase from "../../../assets/progress-base.png";
import RotatingLabel from "../../common/RotatingLabel";
import ServicesVisual from "../../../assets/services-visual-1.png";
import GreenLine from "../../../assets/green-line.png";
import lineGroup1 from "../../../assets/line-group-1.png";
import lineGroup2 from "../../../assets/line-group-2.png";
import lineGroupMulti from "../../../assets/line-group-multi.png";

const ServicesCarousel = () => {
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
  return (
    <>
      <div className="services-carousel">
        <div className="info">
          <div className="info-details">
            <div className="service-options">
              <div className="service-option">
                <img
                  width={35}
                  height={5}
                  className="green-line"
                  src={GreenLine}
                />
                <Title variant="h2">Web Design</Title>
              </div>
              <div className="service-option">
                <img
                  width={35}
                  height={5}
                  className="green-line"
                  src={GreenLine}
                />
                <Title variant="h2">Reclame Video</Title>
              </div>
              <div className="service-option">
                <img
                  width={35}
                  height={5}
                  className="green-line"
                  src={GreenLine}
                />
                <Title variant="h2">VFX</Title>
              </div>
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
            <img className="progress-base" src={ProgressBase}></img>
            <Button
              className="progress-button"
              text=<Text variant="button-body">Afla mai multe</Text>
            ></Button>
            <div className="progress-element">
              <div className="progress-container">
                <span className="progress-label">
                  <Title variant="h3">Responsive și accesibilitate</Title>
                </span>
                <div className="progress-row">
                  <div className="progress-bar" data-value="100">
                    <div className="progress-fill"></div>
                  </div>
                  <span className="progress-percentage">
                    <Title variant="h3">100%</Title>
                  </span>
                </div>
              </div>
              <div className="progress-container">
                <span className="progress-label">
                  <Title variant="h3">Viteză și performanță</Title>
                </span>
                <div className="progress-row">
                  <div className="progress-bar" data-value="51">
                    <div className="progress-fill"></div>
                  </div>
                  <span className="progress-percentage">
                    <Title variant="h3">51%</Title>
                  </span>
                </div>
              </div>
              <div className="progress-container">
                <span className="progress-label">
                  <Title variant="h3">Implementare rapidă și flexibilă</Title>
                </span>
                <div className="progress-row">
                  <div className="progress-bar" data-value="80">
                    <div className="progress-fill"></div>
                  </div>
                  <span className="progress-percentage">
                    <Title variant="h3">80%</Title>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="visual">
          <img className="visual-img" src={ServicesVisual}></img>
          <div className="visual-label-container">
            <RotatingLabel />
          </div>
        </div>
        <img className="line-service-1" src={lineGroup1} />
        <img className="line-service-2" src={lineGroup2} />
        <img className="line-service-multi" src={lineGroupMulti} />
      </div>
      <div className="info-progress-mobil">
        <img className="progress-base" src={ProgressBase}></img>
        <Button
          className="progress-button"
          text=<Text variant="button-body">Afla mai multe</Text>
        ></Button>
        <div className="progress-element">
          <div className="progress-container">
            <span className="progress-label">
              <Title variant="h3">Responsive și accesibilitate</Title>
            </span>
            <div className="progress-row">
              <div className="progress-bar" data-value="100">
                <div className="progress-fill"></div>
              </div>
              <span className="progress-percentage">
                <Title variant="h3">100%</Title>
              </span>
            </div>
          </div>
          <div className="progress-container">
            <span className="progress-label">
              <Title variant="h3">Viteză și performanță</Title>
            </span>
            <div className="progress-row">
              <div className="progress-bar" data-value="51">
                <div className="progress-fill"></div>
              </div>
              <span className="progress-percentage">
                <Title variant="h3">51%</Title>
              </span>
            </div>
          </div>
          <div className="progress-container">
            <span className="progress-label">
              <Title variant="h3">Implementare rapidă și flexibilă</Title>
            </span>
            <div className="progress-row">
              <div className="progress-bar" data-value="80">
                <div className="progress-fill"></div>
              </div>
              <span className="progress-percentage">
                <Title variant="h3">80%</Title>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCarousel;
