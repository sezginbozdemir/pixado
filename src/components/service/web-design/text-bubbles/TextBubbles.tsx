import "./bubbles.scss";
import decor from "@/assets/line-group-2.png";

type Data = {
  textOne?: string;
  textTwo?: string;
};
interface Props {
  info: Data;
}

const TextBubbles = ({ info }: Props) => {
  return (
    <>
      {info.textTwo && info.textOne && (
        <div className="text-bubbles">
          <img src={decor} alt="pixado" className="bubble-decor" />
          <div className="body bubble bubble-one">{info.textOne}</div>
          <div className="title-3">&</div>
          <div className="body bubble bubble-two">{info.textTwo}</div>
        </div>
      )}
    </>
  );
};
export default TextBubbles;
