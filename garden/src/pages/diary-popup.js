// diary page
// please use all LOWERCASE letter for pages
import React, { useState } from 'react';
import { db } from '../config/firebase-config'; // refer to firebase-config.js
import { collection, addDoc } from 'firebase/firestore';
import Navbar from "../components/Navbar"; // refer to Navbar.js
import "../app/globals.css"; // refer to format file
import ProgressBar from "../components/Progress-bar";
import GreenBar from '@/components/Green-diary-bar';
import FlowerPot from "../components/Flower-pot";

//backend
async function addDataToFireStore(title, description) {
  try {
    const docRef = await addDoc(collection(db, "diary"), {
      title: title,
      description: description,
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document ", error);
    return false;
  }
}

export default function DiaryPopup() {
  //backend
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  //backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFireStore(title, message);
    if(added){
      setTitle("");
      setMessage("");
      alert("Data added to firestore DB!!");
    }
  };

  const [selectedTag, setSelectedTag] = useState('Heart-Leaved Aster');
  const tagOptions = ['Heart-Leaved Aster', 'Sunflower', 'Rose', 'Daisy'];
  const postsMade = 1;
  const goalPosts = 5;

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  return (
    <div>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <h1 className="text-5xl font-bold m-10 text-black">
          New Diary Entry
        </h1>
        <div className='container'>
        <div className='form-container'>
          {/* backend ⬇️ */}
          <form onSubmit={handleSubmit} className='max-w-xl mx-auto p-8 text-black bg-white shadow-md rounded-lg'>
            <div className='mb-4'>
              <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>
                Title
              </label>
              <input 
                type='text' 
                id='name' 
                className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
                How Is Your Plant Doing?
              </label>
              <textarea
                rows={5}
                id='message' 
                className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500' 
                value={message}
                onChange={(e) => setMessage(e.target.value)}>
              </textarea>
            </div>
            <div className='text-center'>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'>
                  Submit
              </button>
            </div>
          </form>
        </div>

        <div className="progress-container">
          <div className="rounded-lg p-0 mx-6 lg:mx-10 flex justify-start items-center overflow-x-auto" >
                <GreenBar style={ {display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 145, width: '50%'} }>
                    <FlowerPot path={'/plants/tall-flower.svg'} altername={'tall flower picture'}/>
                </GreenBar>
          </div>
          <ProgressBar
            tagOptions={tagOptions}
            selectedTag={selectedTag}
            onTagChange={handleTagChange}
            progress={postsMade}
            goal={goalPosts}
          />
        </div>

        </div>

        
      </main>
      <style jsx>{`
        .custom-form-width {
          max-width: 800px; /* Custom width or use a percentage like 80% */
        }
        .container {
          display: flex;
          justify-content: space-between; /* This will put some space between your two components */
          align-items: start; /* This aligns items to the start of the flex container */
          gap: 20px; /* Optional: defines a gap between the flex items */
        }
        
        .form-container,
        .progress-container {
          width: 50%; /* Adjust width as necessary, this gives half width to each */
        }
        
        /* Add a max-width or similar if you want to constrain the container's size */
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
      `}</style>
    </div>
  );
}