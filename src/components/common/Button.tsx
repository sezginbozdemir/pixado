import React from "react";

type ButtonProps = {
  text: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {text}
    </button>
  );
};

export default Button;
