var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  Button: () => Button_default,
  Card: () => Card_default
});
module.exports = __toCommonJS(index_exports);

// src/Components/Button/Button.jsx
var import_react = __toESM(require("react"));
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
  const [isHovered, setIsHovered] = (0, import_react.useState)(false);
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
  return /* @__PURE__ */ import_react.default.createElement(
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
var import_react2 = __toESM(require("react"));
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
  const [isHovered, setIsHovered] = (0, import_react2.useState)(false);
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
  return /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      style: cardStyle,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    /* @__PURE__ */ import_react2.default.createElement(
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
    /* @__PURE__ */ import_react2.default.createElement("div", { style: { padding: "20px" } }, /* @__PURE__ */ import_react2.default.createElement("h2", { style: { margin: "0 0 10px", fontSize: "22px" } }, title), /* @__PURE__ */ import_react2.default.createElement(
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
    ), /* @__PURE__ */ import_react2.default.createElement("button", { style: buttonStyle }, buttonText))
  );
};
var Card_default = Card;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card
});
