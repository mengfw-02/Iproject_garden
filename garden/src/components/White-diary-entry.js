// white-diary-entry.js

import React from "react"; 
import SimpleProgressBar from "./Simple-progress-bar"; // Progress Bar 

/* Diary entry component 
*     Icon - Flower SVG 
*     Title - Flower title 
*     Date - Date of last entry 
*     Progress Made - Number of diary entries on plant
*     Post Goal - Number of diary entries until maturation
*     bgColor - Background color for plant image
*/
const WhiteBar = ({ icon, title, date, progressMade, postGoal, bgColor }) => (
  <div
    className="rounded-lg p-4 mx-6 lg:mx-8 flex justify-start items-center overflow-x-auto mt-6"
    style={{ height: 145, backgroundColor: "white", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
  >
    {/* Plant Image */}

    <div
      className="flex-shrink-0 rounded-lg p-2 flex justify-center items-center mr-6"
      style={{ 
        backgroundColor: bgColor, 
        height: '100%', 
        width: '100%', 
        maxHeight: '110px', 
        maxWidth: '110px'  
      }}
    >
      <img src={icon} alt={title} className="w-20 h-24" />
    </div>

    {/* Flower Name and Date */}
    <div className="flex-grow">
      <div className="flex items-end justify-left">
        <div className="text-2xl font-semibold text-gray-800">{title}</div>
        <div className="text-sm text-gray-500 ml-4">{date}</div>  
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
      <SimpleProgressBar
            progress={progressMade}
            goal={postGoal}
          />
      </div>
    </div>
  </div>
);

export default WhiteBar;

