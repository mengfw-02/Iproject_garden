/* 
* Home/Main page containing garden bar and diary entries container 
*/

import Navbar from "garden/src/components/Navbar"; // refer to navbar component
import GreenBar from "garden/src/components/Green-diary-bar" // import green bar
import FlowerPot from "garden/src/components/Flower-pot" // import flower pot
import GreyBar from ".garden/src/components/Grey-diary-bar"; // import grey bar
import WhiteBar from "garden/src/components/White-diary-entry"; // import white diary entry bar
import "garden/src/app/globals.css"; // refer to format file

export default function Home() {

  return (
    <main>
        
        <Navbar/>
        
        {/* Garden bar */}
        <div className="bg-white" style={{ paddingTop: '15vh' }}>
            <h2 className="text-2xl font-bold text-gray-900 px-6 lg:px-8 py-4 ml-2">
                Check Out Your Garden
            </h2>

            {/* Define style/sizes here */}
            <div className="rounded-lg p-0 mx-6 lg:mx-10 flex justify-start items-center overflow-x-auto" >
                <GreenBar style={ {display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 145, width: '100%'} }>
                    <FlowerPot path={'/tall-flower.svg'} altername={'tall flower picture'}/>
                    <FlowerPot path={'/tall-flower.svg'} altername={'tall flower picture'}/>
                    <FlowerPot path={'/short-flower.svg'} altername={'short flower picture'}/>
                    <FlowerPot path={'/short-flower.svg'} altername={'short flower picture'}/>
                    <FlowerPot path={'/tall-flower.svg'} altername={'tall flower picture'}/>
                </GreenBar>
            </div>

        </div>
   
        {/* The while recent diary collection */}
        <div className="bg-white">
            <h2 className="text-2xl font-bold text-gray-900 px-6 lg:px-8 py-4 ml-5 lg:ml-20">
                Recent Diary Entries
            </h2>
  
            <div className="rounded-lg p-0 mx-6 lg:mx-20 flex justify-start items-center overflow-y-auto">
                <GreyBar style={ {width: '100%', height: '300px'} }>
                    <WhiteBar/>
                    <WhiteBar/>
                    <WhiteBar/>
                </GreyBar>
            </div>          
        </div>

    </main>
  )
}