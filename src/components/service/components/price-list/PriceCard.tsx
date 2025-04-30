import "./price-card.scss";
import Button from "@/components/common/buttons/Button";
import pixado from "@/assets/pixado.png";
import fire from "@/assets/fire.png";
import { PriceList } from "./PriceList";

const PriceCard = ({ title, text, price, links, pack }: PriceList) => {
  return (
    <>
      {pack && (
        <div className="pack-wrapper">
          <div className="pack">
            <div className="title-3">Alege pachetul </div>
            <div className="title-4">*rezultate garantate</div>
          </div>
        </div>
      )}

      <div className="price-card-container">
        <Button text="Cumpara" className="price-card-button" />

        <div className="price-card-wrapper">
          <img
            className={`price-card-icon ${pack ? `` : `price-card-pixado`}`}
            src={pack ? fire : pixado}
            alt="pixado"
          />
          <div
            className={`price-card ${
              pack ? "price-card-pack" : "price-card-normal"
            }`}
          >
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
    </>
  );
};
export default PriceCard;
