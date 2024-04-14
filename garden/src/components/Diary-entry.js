// white-diary-bar.js
import React from "react";

const DiaryBar = ( ) => (
  // grey background
  <div className="rounded-lg p-0 mx-6 lg:mx-8 overflow-y-auto" style={{width: '85%', height: '500px', backgroundColor: '#D3D3D3'}}>

    {/* Three white bars */}
    <div className="rounded-lg p-1 mx-6 lg:mx-8 flex justify-start items-center overflow-x-auto mt-6" style={{height: 145, backgroundColor: 'white' }}/>
    <div className="rounded-lg p-1 mx-6 lg:mx-8 flex justify-start items-center overflow-x-auto mt-6" style={{height: 145, backgroundColor: 'white' }}/>
    <div className="rounded-lg p-1 mx-6 lg:mx-8 flex justify-start items-center overflow-x-auto mt-6" style={{height: 145, backgroundColor: 'white' }}/>

  </div>
);
  
export default DiaryBar;