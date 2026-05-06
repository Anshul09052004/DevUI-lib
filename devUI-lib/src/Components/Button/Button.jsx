import React, { useState } from "react";

const Button = ({
  text = "Click Me",
  bgColor = "#2563eb",
  textColor = "#ffffff",
  hoverColor = "#1d4ed8",
  padding = "12px 24px",
  borderRadius = "10px",
  fontSize = "16px",
  width = "auto",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? hoverColor : bgColor,
    color: textColor,
    padding,
    border: "none",
    borderRadius,
    fontSize,
    width,
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
    boxShadow: isHovered
      ? "0 6px 14px rgba(0,0,0,0.2)"
      : "0 4px 10px rgba(0,0,0,0.1)",
    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

export default Button;