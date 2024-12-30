import React from "react";
import "../../typography.css";
interface TextProps {
  variant: "body" | "details-regular" | "details-medium" | "button-body";
  children: React.ReactNode;
}

const Text = ({ variant, children }: TextProps) => {
  const className = variant;
  return <span className={className}>{children}</span>;
};

export default Text;
