import React from "react";
import "../../typography.css";
interface TitleProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "menu-body"
    | "menu-body-bold"
    | "eyebrow-body";
  children: React.ReactNode;
}

const Title = ({ variant, children }: TitleProps) => {
  const className = variant;
  return <span className={className}>{children}</span>;
};

export default Title;
