import React from "react";
import "./LoadingOverlay.css";

const LoadingOverlay = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="loading-overlay">
      <div className="loader">
        <div className="spinner"></div>
        <p>Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
