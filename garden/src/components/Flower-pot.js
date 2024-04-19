// flower-pot.js
import React from "react";

const FlowerPot = ( {path, altername} ) => (
    <img src={path} alt={altername} style={{ width: '100px', height: '100px' }}/> 
);
  
export default FlowerPot;