import "./banner.css";
import ArrowButton from "@/components/common/buttons/ArrowButton";

interface Props {
  img: string;
  onClick: () => void;
}

const WebBanner = ({ img, onClick }: Props) => {
  return (
    <div className="web-banner-container">
      <div className="web-banner-wrapper">
        <img
          src={img || "/project-images/wallpaper-1.png"}
          className="web-banner-img"
          alt="Pixado"
        />
      </div>
      <ArrowButton onClick={onClick} className="web-decor" />
    </div>
  );
};

export default WebBanner;
