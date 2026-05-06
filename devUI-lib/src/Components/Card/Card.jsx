import React, { useState } from "react";

const Card = ({
    title = "Card Title",
    description = "This is a reusable React card component with customizable props.",
    image = "https://via.placeholder.com/300x180",
    bgColor = "#ffffff",
    textColor = "#111827",
    buttonText = "Learn More",
    buttonColor = "#2563eb",
    width = "320px",
    borderRadius = "16px",
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        width,
        backgroundColor: bgColor,
        color: textColor,
        borderRadius,
        overflow: "hidden",
        boxShadow: isHovered
            ? "0 10px 25px rgba(0,0,0,0.2)"
            : "0 4px 12px rgba(0,0,0,0.1)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s ease",
        fontFamily: "Arial, sans-serif",
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
        transition: "0.3s",
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={image}
                alt="card"
                style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                }}
            />

            <div style={{ padding: "20px" }}>
                <h2 style={{ margin: "0 0 10px", fontSize: "22px" }}>
                    {title}
                </h2>

                <p
                    style={{
                        margin: 0,
                        fontSize: "15px",
                        lineHeight: "1.6",
                        opacity: 0.8,
                    }}
                >
                    {description}
                </p>

                <button style={buttonStyle}>{buttonText}</button>
            </div>
        </div>
    );
};

export default Card;