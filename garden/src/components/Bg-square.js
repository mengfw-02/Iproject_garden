// Square to be used in background, accepts size, color, position, rotation, opacity, and 
// styling parameters 

import React from 'react';


function Square({ 
  size = 100, 
  color = '#A2E7C2', 
  position = { top: 0, left: 0 }, 
  rotation = 0, 
  opacity = 0.5,
  style = {} 
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity: opacity,
        position: 'absolute',
        transform: `rotate(${rotation}deg)`,
        zIndex: '0',
        borderRadius: '20px',
        ...position,
        ...style,
      }}
    />
  );
}

export default Square;
