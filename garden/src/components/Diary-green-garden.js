// diary-green-garden.js
import React from "react";

const GardenBar = ( ) => (
  <div className="rounded-lg p-1 mx-6 lg:mx-8 flex justify-start items-center overflow-x-auto" style={{height: 145, backgroundColor: '#8FBC8F' }}>
    <div style={{ margin: '20px', width: '100px', height: '100px' }}>
      <img src="/tall-flower.svg" alt="tall flower"/> 
    </div>
    <div style={{ margin: '20px', width: '100px', height: '100px' }}>
      <img src="/tall-flower.svg" alt="tall flower"/> 
    </div>
  </div>
);
  
export default GardenBar;