// flower-pot.js
import React from "react";

const FlowerPot = ( {path, altername} ) => (
    <img src={path} alt={altername} style={{ width: '130px', height: '130px' }}/> 
);
  
export default FlowerPot;