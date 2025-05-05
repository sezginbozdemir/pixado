import "./icons.scss";

type Data = {
  iconsTitle: string;
  icons: {
    icon: string;
    text?: string;
  }[];
};
interface Props {
  info: Data;
}

const WebDesignIcons = ({ info }: Props) => {
  return (
    <div className="web-design-icons-container">
      <div className="title-2">{info.iconsTitle}</div>
      <div className="web-design-icons">
        {info.icons.map((item, index) => (
          <div className="web-design-icon-wrapper" key={index}>
            <img className={!item.text ? "bigger-icon" : ""} src={item.icon} />
            <div className="body">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WebDesignIcons;
