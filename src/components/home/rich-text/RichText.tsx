import React from "react";
import "./rich-text.css";
import Title from "../../common/Title";

const RichText = () => {
  return (
    <div className="rich-text">
      <div className="rows">
        <div className="first-row">
          <Title variant="h1">SERVICII CARE ITI PUN</Title>
        </div>
        <div className="second-row">
          <div className="first-col">
            <Title variant="h1">BRANDUL</Title>
          </div>
          <div className="second-col">
            <Title variant="h1">ÎN LUMINĂ</Title>{" "}
          </div>
        </div>
        <div className="third-row">
          <Title variant="h1">ÎN LUMINĂ</Title>
        </div>
      </div>
    </div>
  );
};

export default RichText;
