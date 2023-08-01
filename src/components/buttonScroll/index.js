
import React from "react";
import { Link } from "react-scroll";

const ScrollToTopButton = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#fff",
        borderRadius: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        ↑
      </Link>
    </div>
  );
};

export default ScrollToTopButton;
