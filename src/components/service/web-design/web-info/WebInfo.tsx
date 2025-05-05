import "./web-info.scss";

type Data = {
  infoOne: string;
  infoTwo: string;
};
interface Props {
  info: Data;
}

const WebInfo = ({ info }: Props) => {
  return (
    <div className="web-info">
      <div className="body">{info.infoOne}</div>
      <div className="body">{info.infoTwo}</div>
    </div>
  );
};
export default WebInfo;
