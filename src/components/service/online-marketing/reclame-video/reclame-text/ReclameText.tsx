import "./reclame-text.scss";
import Button from "@/components/common/buttons/Button";
import decorOne from "@/assets/line-group-2.png";
import decorTwo from "@/assets/line-group-multi.png";
import { useNavigate } from "react-router-dom";
interface Reclame {
  title: string;
  description: string;
  belowSection: {
    line1: string;
    line2: string;
  };
}
interface Props {
  data: Reclame;
}

const ReclameText = ({ data }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="reclame-text-container">
      <img src={decorOne} className="decor-one" alt="Pixado" />
      <img src={decorTwo} className="decor-two" alt="Pixado" />
      <div className="title-2">{data.title}</div>
      <div className="main-container">
        <div className="flex-container">
          <div className="body reclame-text">{data.description}</div>
          <Button
            onClick={() => navigate("/contact")}
            className="reclame-text-button"
            text="Contacteaza-ne"
          />
        </div>
        <div className="see-below-flex">
          <div className="see-below">
            <div className="title-3">{data.belowSection.line1}</div>
            <div className="title-3 green">{data.belowSection.line2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReclameText;
