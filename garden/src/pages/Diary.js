// diary page
// please use ALL Lowercase letter for pages
import React, { useState } from 'react';
import { db } from '../app/firebase-config'; // refer to firebase-config.js
import { collection, addDoc } from 'firebase/firestore';
import Navbar from "../components/Navbar"; // refer to Navbar.js
import "../app/globals.css"; // refer to format file

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

export default function Home() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFireStore(title, message);
    if(added){
      setTitle("");
      setMessage("");
      alert("Data added to firestore DB!!");
    }
  };

  return (
    <div>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-5xl font-bold m-10">
          New Diary Entry
        </h1>
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
      </main>
      <style jsx>{`
        .custom-form-width {
          max-width: 800px; /* Custom width or use a percentage like 80% */
        }
      `}</style>
    </div>
  );
}