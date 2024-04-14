// green-diary-bar.js
import React from "react";

// style is a parameter, the size is defined in usage (page)
// children means there's gonna be other components on the green bar
const GreenBar = ( {style, children} ) => {
    // this is our convention green
    const baseStyle = {
        backgroundColor: '#8FBC8F'
    };

    const combinedStyle = { ...baseStyle, ...style };

    return (
        <div style={combinedStyle}>
            {children}
        </div>
    );  
};

export default GreenBar;