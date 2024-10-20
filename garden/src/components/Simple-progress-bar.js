import React from 'react';
import './Progress-bar.css'; // Ensure you have this CSS file in your project

// Simple Progress Bar Component, accepts progress (entries) and goal (# of entries for full growth)
const SimpleProgressBar= ({progress, goal }) => {
  const filledWidth = `${(progress / goal) * 100}%`;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress-bar-filled" style={{ width: filledWidth }}></div>
      </div>
    </div>
  );
}

export default SimpleProgressBar;
