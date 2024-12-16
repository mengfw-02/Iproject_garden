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


export default function DiaryPage() {

    return (
        <main className="flex h-dvh w-dvw relative overflow-hidden">
            <div className="z-10"> 
                <Navbar/>
            </div>

            {/* Garden bar */}
            <div className="bg-white h-full w-full pb-10" style={{ paddingTop: '15vh' }}>

                {/*Background Squares */ }
                <Square size={400} color="#89CFF0" position={{ top: 120, left: 1100 }} rotation={15} />
                <Square size={400} color="#89CFF0" position={{ top: 500, left: -50 }} rotation={150} />

                <div className="w-full h-full flex relative z-1">

                    {/* Populating Garden Bar */}
                    <div className="rounded-lg h-full w-2/3 flex justify-center items-center overflow-x-hidden" >
                        <GreenBar 
                            style={{ 
                                display: 'grid', 
                                flexDirection: 'row', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))', 
                                gap: '10px', 
                                alignItems: 'center',
                                justifyItems: 'center',
                                borderRadius: '16px',
                                height: '80%', 
                                width: '80%',
                                overflow: 'scroll',
                                padding: '30px'
                            }}>
                            <FlowerPot path={'/plants/Orchid.svg'} altername={'tall flower picture'} />
                            <FlowerPot path={'/plants/Lavendar.svg'} altername={'tall flower picture'} />
                            <FlowerPot path={'/plants/California-sunset.svg'} altername={'short flower picture'} />
                            <FlowerPot path={'/plants/Birds-of-paradise.svg'} altername={'short flower picture'} />
                        </GreenBar>
                    </div>

                    {/* Diary Entries Container */}
                        <div className="overflow-y-hidden rounded-lg flex h-full w-full justify-start items-center">
                            <GreyBar className="overflow-y-auto" style={{ width: '100%', height: '100%'}}>

                                {/* Populate diary entries using whitebar components*/}
                                <WhiteBar
                                    icon={'/plants/Venus-fly-trap.svg'}
                                    title={"Planted Venus Fly Trap"}
                                    date={"10/02/24"}
                                    progressMade={3}
                                    postGoal={5}
                                    bgColor="#D1C4E9"

                                />
                                <WhiteBar
                                    icon={'/plants/Snake-plant.svg'}
                                    title={"Planted Snake Plant"}
                                    date={"09/20/24"}
                                    progressMade={4}
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

        </main>
    )
}