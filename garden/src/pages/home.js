/* 
* Home/Main page containing garden bar and diary entries container 
*/

import Navbar from "../components/Navbar"; // refer to navbar component
import GardenBar from "../components/Diary-green-garden"; 
import DiaryBar from "../components/Diary-entry"; 
import "../app/globals.css"; // refer to format file

export default function home() {

  return (
    <main>
        <div className="bg-white">
            <Navbar/>
        </div>

        <div className="bg-white" style={{ paddingTop: '15vh' }}>
            <h2 className="text-2xl font-bold text-gray-900 px-6 lg:px-8 py-4">
                Check Out Your Garden
            </h2>

            <div className="rounded-lg p-0 mx-6 lg:mx-8 overflow-y-auto">
                <GardenBar/>
            </div>
        </div>
   
        {/* The while recent diary collection */}
        <div className="bg-white">
            <h2 className="text-2xl font-bold text-gray-900 px-6 lg:px-8 py-4 ml-5 lg:ml-20">
                Recent Diary Entries
            </h2>
  
            <div className="flex justify-center">
                <DiaryBar/>
            </div>
        </div>

    </main>
  )
}