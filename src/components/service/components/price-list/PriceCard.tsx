import React from "react";
import "./price-card.scss";
import Button from "../../../common/buttons/Button";
import { PriceList } from "./PriceList";

const PriceCard = ({ title, text, price, links }: PriceList) => {
  return (
    <div className="price-card-container">
      <Button text="Cumpara" className="price-card-button" />
      <div className="price-card-wrapper">
        <div className="price-card">
          <div className="price-card-text">
            <div className="title-3">{title}</div>
            <div className="body card-text">{text}</div>
          </div>
          <div className="price">{price}</div>
          <div className="price-card-links">
            {links.map((link, index) => (
              <div key={index} className="body link">
                {link}
              </div>
            ))}
          </div>
          <div className="empty-space" />
        </div>
      </div>
    </div>
  );
};
export default PriceCard;
