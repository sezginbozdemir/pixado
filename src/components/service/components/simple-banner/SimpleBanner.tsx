import "./simple-banner.scss";
interface Props {
  img: string;
}

const SimpleBanner = ({ img }: Props) => {
  return (
    <div className="simple-banner-img-wrapper">
      <img
        className="simple-banner-img"
        src={img || "/project-images/wallpaper-1.png"}
        alt="Pixado"
      />
    </div>
  );
};
export default SimpleBanner;
