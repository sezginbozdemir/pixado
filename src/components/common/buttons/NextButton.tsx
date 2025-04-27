import "./buttons.css";
import nextArrow from "@/assets/next-arrow.png";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
};

const NextButton: React.FC<ButtonProps> = ({ onClick, className }) => {
  return (
    <button className={`next-button ${className}`} onClick={onClick}>
      <img src={nextArrow} />
    </button>
  );
};

export default NextButton;
