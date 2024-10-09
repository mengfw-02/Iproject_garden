/* 
* Home/Main page containing garden bar and diary entries container 
*/

import React, { useState } from 'react';
import Navbar from "../components/Navbar"; // refer to navbar component
import GreenBar from "../components/Green-diary-bar" // import green bar
import FlowerPot from "../components/Flower-pot" // import flower pot
import GreyBar from "../components/Grey-diary-bar"; // import grey bar
import WhiteBar from "../components/White-diary-entry"; // import white diary entry bar
import "../app/globals.css"; // refer to format file


export default function home() {

  return (
    <main>

        <Navbar/>
        
        {/* Garden bar */}
        <div className="bg-white" style={{ paddingTop: '15vh' }}>
            <h2 className="text-2xl font-bold text-gray-900 px-6 lg:px-8 py-4 ml-2">
                Check Out Your Garden
            </h2>

            {/* Populating Garden Bar */}
            <div className="rounded-lg p-0 mx-6 lg:mx-10 flex justify-start items-center overflow-x-auto" >
                <GreenBar style={ {display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 145, width: '100%'} }>
                    <FlowerPot path={'/plants/tall-flower.svg'} altername={'tall flower picture'}/>
                    <FlowerPot path={'/plants/tall-flower.svg'} altername={'tall flower picture'}/>
                    <FlowerPot path={'/plants/short-flower.svg'} altername={'short flower picture'}/>
                    <FlowerPot path={'/plants/short-flower.svg'} altername={'short flower picture'}/>
                    <FlowerPot path={'/plants/tall-flower.svg'} altername={'tall flower picture'}/>
                </GreenBar>
            </div>

        </div>
   
        {/* Diary Entries Container */}
        <div className="bg-white">
            <h2 className="text-2xl font-bold text-gray-900 px-6 lg:px-8 py-4 ml-5 lg:ml-20">
                Recent Diary Entries
            </h2>
  
            <div className="rounded-lg p-0 pb-4 mx-6 lg:mx-20 flex justify-start items-center overflow-y-auto">
                <GreyBar style={ {width: '100%', height: '300px'} }>

                {/* Populate diary entries using whitebar components*/}
                <WhiteBar
                    icon={'/plants/tall-flower.svg'}
                    title={"Planted Purple Lovergrass"}
                    date={"10/02/24"}
                    progressMade = {3}
                    postGoal = {5}
                    bgColor = "#D1C4E9"
                    
                />      
                <WhiteBar
                    icon={'/plants/short-flower.svg'}
                    title={"Planted Magnolia Tree"}
                    date={"09/20/24"}
                    progressMade = {4}
                    postGoal = {5}
                    bgColor = "#FFCDD2"
                    
                />
                <WhiteBar
                    icon={'/plants/tall-flower.svg'}
                    title={"Planted Butterfly Weed"}
                    date={"01/23/24"}
                    progressMade = {1}
                    postGoal = {5}
                    bgColor = "#D1C4E9"
                    
                />   

                </GreyBar>
            </div>          
        </div>

    </main>
  )
}