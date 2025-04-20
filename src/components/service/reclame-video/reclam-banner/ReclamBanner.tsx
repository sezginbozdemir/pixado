import React from "react";
import "./reclam-banner.scss";
import ArrowButton from "../../../common/buttons/ArrowButton";
interface Banner {
  banner: string;
  details: {
    line1: string;
    line2: string;
  };
}
interface Props {
  data: Banner;
  onClick: () => void;
}
const ReclamBanner = ({ data, onClick }: Props) => {
  return (
    <div className="reclame-banner-container">
      <div className="float-flex">
        <ArrowButton onClick={onClick} className="arrow" />
        <div className="details-flex">
          <div className="eyebrow-body reclame-header">
            {data.details.line1}
          </div>
          <div className="title-2">{data.details.line2}</div>
        </div>
      </div>
      <div className="reclame-banner-wrapper">
        <img
          src={data.banner || "/project-images/wallpaper-1.png"}
          className="banner-img"
          alt="Pixado"
        />
      </div>
    </div>
  );
};
export default ReclamBanner;
