import React from "react";
import "../styles/loader.css";

const FodvegLoader = () => {
  const circleRef = React.useRef(null);

  return (
    <div className="loader-container">
      <svg className="loader-circle" viewBox="0 0 100 100">
        <circle
          ref={circleRef}
          className="circle-path"
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
      <div className="loader-logo">F</div>
    </div>
  );
};

export default FodvegLoader;
