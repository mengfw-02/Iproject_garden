// white-diary-entry.js

import React from "react";
import ProgressBar1 from "../components/Progress-bar1";

const WhiteBar = ({ icon, title, date, progressMade, postGoal, bgColor }) => (
  <div
    className="rounded-lg p-4 mx-6 lg:mx-8 flex justify-start items-center overflow-x-auto mt-6"
    style={{ height: 145, backgroundColor: "white", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
  >
    {/* Icon */}

    <div
      className="flex-shrink-0 rounded-lg p-2 flex justify-center items-center mr-6"
      style={{ 
        backgroundColor: bgColor, 
        height: '100%', // Match the height of the white bar
        width: '100%',  // Make it square by matching width to height
        maxHeight: '110px', // Adjust the icon container's height to leave some padding 
        maxWidth: '110px'   // Make sure it remains square
      }}
    >
      <img src={icon} alt={title} className="w-16 h-16" />
    </div>

    {/* Text Content */}
    <div className="flex-grow">
      <div className="flex items-end justify-left">
        <div className="text-2xl font-semibold text-gray-800">{title}</div>
        <div className="text-sm text-gray-500 ml-4">{date}</div>  
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
      <ProgressBar1
            progress={progressMade}
            goal={postGoal}
          />
      </div>
    </div>
  </div>
);

export default WhiteBar;

