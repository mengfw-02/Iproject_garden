import React from 'react';
import './Progress-bar.css'; // Ensure you have this CSS file in your project

// Simple Progress Bar Component, accepts progress (entries) and goal (# of entries for full growth)
const SimpleProgressBar = ({ progress }) => {
  // Calculate the width of each rectangle as a percentage

  return (
    <div className="progress-bar-container">
      {Array.from({ length: 5 }, (v, i) => (
        <div
          key={i}
          className={`progress-bar-rect ${i < progress ? 'filled' : ''}`}
          style={{ width: '20%' }} // Apply calculated width to each rectangle
        />
      ))}
    </div>
  );
}

export default SimpleProgressBar;



/*
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
*/
