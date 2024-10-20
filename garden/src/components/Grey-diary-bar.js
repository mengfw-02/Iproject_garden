// grey-diary-bar.js
import React from "react";

const GreyBar = ( {style, children} ) => {
    // this is our convention green
    const baseStyle = {
        backgroundColor: '#D3D3D3',
        paddingBottom: '25px'
    };

    const combinedStyle = { ...baseStyle, ...style };

    return (
        <div className="rounded-lg p-0 mx-6 lg:mx-8 overflow-y-auto" style={combinedStyle}>
            {children}
        </div>
    );  
};

export default GreyBar;