// src/Components/Button/Button.jsx
import React, { useState } from "react";
var Button = ({
  text = "Click Me",
  bgColor = "#2563eb",
  textColor = "#ffffff",
  hoverColor = "#1d4ed8",
  padding = "12px 24px",
  borderRadius = "10px",
  fontSize = "16px",
  width = "auto"
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
    boxShadow: isHovered ? "0 6px 14px rgba(0,0,0,0.2)" : "0 4px 10px rgba(0,0,0,0.1)",
    transform: isHovered ? "translateY(-2px)" : "translateY(0)"
  };
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      style: buttonStyle,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    text
  );
};
var Button_default = Button;

// src/Components/Card/Card.jsx
import React2, { useState as useState2 } from "react";
var Card = ({
  title = "Card Title",
  description = "This is a reusable React card component with customizable props.",
  image = "https://via.placeholder.com/300x180",
  bgColor = "#ffffff",
  textColor = "#111827",
  buttonText = "Learn More",
  buttonColor = "#2563eb",
  width = "320px",
  borderRadius = "16px"
}) => {
  const [isHovered, setIsHovered] = useState2(false);
  const cardStyle = {
    width,
    backgroundColor: bgColor,
    color: textColor,
    borderRadius,
    overflow: "hidden",
    boxShadow: isHovered ? "0 10px 25px rgba(0,0,0,0.2)" : "0 4px 12px rgba(0,0,0,0.1)",
    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
    transition: "all 0.3s ease",
    fontFamily: "Arial, sans-serif"
  };
  const buttonStyle = {
    backgroundColor: buttonColor,
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "12px",
    transition: "0.3s"
  };
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      style: cardStyle,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    /* @__PURE__ */ React2.createElement(
      "img",
      {
        src: image,
        alt: "card",
        style: {
          width: "100%",
          height: "180px",
          objectFit: "cover"
        }
      }
    ),
    /* @__PURE__ */ React2.createElement("div", { style: { padding: "20px" } }, /* @__PURE__ */ React2.createElement("h2", { style: { margin: "0 0 10px", fontSize: "22px" } }, title), /* @__PURE__ */ React2.createElement(
      "p",
      {
        style: {
          margin: 0,
          fontSize: "15px",
          lineHeight: "1.6",
          opacity: 0.8
        }
      },
      description
    ), /* @__PURE__ */ React2.createElement("button", { style: buttonStyle }, buttonText))
  );
};
var Card_default = Card;
export {
  Button_default as Button,
  Card_default as Card
};
