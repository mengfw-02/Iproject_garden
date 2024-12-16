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
import Square from '@/components/Bg-square';


export default function Home() {

    return (
        <main className="flex flex-col h-screen relative overflow-hidden pb-5">
            <div className="z-10"> 
                <Navbar/>
            </div>

            {/* Garden bar */}
            <div className="bg-white" style={{ paddingTop: '15vh' }}>

                {/*Background Squares */ }
                <Square size={400} color="#8FBC8F" position={{ top: 120, left: 1100 }} rotation={15} />
                <Square size={400} color="#8FBC8F" position={{ top: 500, left: -50 }} rotation={150} />


                <div className="relative z-1 pt-15">
                    <h2 className="text-2xl font-bold text-gray-900 px-6 lg:px-8 py-4 ml-2">
                        Check Out Your Garden
                    </h2>

                    {/* Populating Garden Bar */}
                    <div className="rounded-lg p-0 mx-6 lg:mx-10 flex justify-start items- overflow-x-auto" >
                        <GreenBar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: '', height: 145, width: '100%' }}>
                            <FlowerPot path={'/plants/Orchid.svg'} altername={'tall flower picture'} />
                            <FlowerPot path={'/plants/Lavendar.svg'} altername={'tall flower picture'} />
                            <FlowerPot path={'/plants/California-sunset.svg'} altername={'short flower picture'} />
                            <FlowerPot path={'/plants/Birds-of-paradise.svg'} altername={'short flower picture'} />
                            <FlowerPot path={'/plants/Snake-plant.svg'} altername={'tall flower picture'} />
                            <FlowerPot path={'/plants/Hibiscus.svg'} altername={'tall flower picture'} />
                            <FlowerPot path={'/plants/Japanese-maple-bonsai.svg'} altername={'tall flower picture'} />
                            <FlowerPot path={'/plants/Creeping-jenny.svg'} altername={'tall flower picture'} />
                        </GreenBar>
                    </div>

                    {/* Diary Entries Container */}
                    <div className="h-[50vh] overflow-y-hidden">
                        <h2 className="text-2xl font-bold text-gray-900 px-6 lg:px-8 py-4 ml-5 lg:ml-20">
                            Recent Diary Entries
                        </h2>

                        <div className="rounded-lg p-0 pb-4 mx-6 lg:mx-20 flex justify-start items-center h-[43vh]">
                            <GreyBar className="overflow-y-auto" style={{ width: '100%', height: '100%'}}>

                                {/* Populate diary entries using whitebar components*/}
                                <WhiteBar
                                    icon={'/plants/Venus-fly-trap.svg'}
                                    title={"Planted Venus Fly Trap"}
                                    date={"10/02/24"}
                                    progressMade={4}
                                    postGoal={5}
                                    bgColor="#D1C4E9"

                                />
                                <WhiteBar
                                    icon={'/plants/Snake-plant.svg'}
                                    title={"Planted Snake Plant"}
                                    date={"09/20/24"}
                                    progressMade={1}
                                    postGoal={8}
                                    bgColor="#FFCDD2"

                                />
                                
                                <WhiteBar
                                    icon={'/plants/Orchid.svg'}
                                    title={"Planted Orchid"}
                                    date={"01/23/24"}
                                    progressMade={1}
                                    postGoal={6}
                                    bgColor="#D1C4E9"

                                />

                            </GreyBar>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}