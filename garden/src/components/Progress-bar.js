import React from 'react';
import './Progress-bar.css'; // Ensure you have this CSS file in your project

const ProgressBar = ({ tagOptions, selectedTag, onTagChange, progress, goal }) => {
  const filledWidth = `${(progress / goal) * 100}%`;

  return (
    <div className="progress-bar-container">
      <label className="tag-label text-black font-bold">Tag:
        <select value={selectedTag} onChange={onTagChange} className="tag-dropdown">
          {tagOptions.map(tagOption => (
            <option key={tagOption} value={tagOption}>{tagOption}</option>
          ))}
        </select>
      </label>
      <div className="progress-bar">
        <div className="progress-bar-filled" style={{ width: filledWidth }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
