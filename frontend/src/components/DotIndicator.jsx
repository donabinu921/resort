import React, { useState } from "react";
import "../styles/DotIndicator.css";

const DotIndicator = ({ totalDots = 4 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="dot-container">
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          className={`dot ${index === activeIndex ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default DotIndicator;
