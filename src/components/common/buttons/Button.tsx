import "./buttons.css";

type ButtonProps = {
  text: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`button body ${className}`}>
      <span>{text}</span>{" "}
    </button>
  );
};

export default Button;
