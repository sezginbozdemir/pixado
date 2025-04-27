import React from "react";
import "./banner.scss";
interface Data {
  shortTextTwo: string;
  banner: string;
}
interface Props {
  data: Data;
}

const VisualBanner = ({ data }: Props) => {
  return (
    <div className="visual-banner">
      <div className="title-3 visual-banner-text">{data.shortTextTwo}</div>
      <div className="visual-banner-wrapper">
        <img src={data.banner} alt="Pixado" className="visual-banner-img" />
      </div>
    </div>
  );
};
export default VisualBanner;
