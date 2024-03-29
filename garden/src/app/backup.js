'use client'
import { db, auth, storage } from './firebaseConfig'
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Auth } from "./auth.js"
import { ref, uploadBytes } from 'firebase/storage';


async function addDataToFireStore(name, email, message) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
      userId: auth?.currentUser?.uid  // ? marks is for in case the user is not logged in or does not exist
      // auth?.currentUser?.uid
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document ", error)
    return false;
  }
}

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // update message state
  const [updatedMessage, setUpdatedMessage] = useState("")
  // file upload state
  const [fileUpload, setFileUpload] = useState(null)


  const CollectionRed = collection(db, "messages")

  //  get the data from firestore
  const getAll = async () => {
    try {
      //read the data and set email
      const data = await getDocs(CollectionRed);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setMessages(filteredData)
    } catch (err) {
      console.error(err)
    }
  };

  const deleteMessage = async (id) => {
    //  "messages" is the name of the collection
    const messagesDoc = doc(db, "messages", id)

    await deleteDoc(messagesDoc)
    getAll();
  }

  const UpdateMessage = async (id) => {
    //  "messages" is the name of the collection
    const messagesDoc = doc(db, "messages", id)
    await updateDoc(messagesDoc, { message: updatedMessage })
    getAll();
  }

  const uploadFile = async () => {
    if (!fileUpload) return;
    const fileFolderRed = ref(storage, `excel/${fileUpload.name}`)
    try {
      await uploadBytes(fileFolderRed, fileUpload)
    } catch (e) {
      console.log(e);
    }
  }
  // when render the page, automatically call the function 
  useEffect(() => {
    getAll();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const added = await addDataToFireStore(name, email, message);
      if (added) {
        setName("");
        setEmail("");
        setMessage("");
        getAll();
        alert("Data added to firestore DB!!")
      }
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="text-5xl font-bold m-10">
        Diary Page
      </h1>
      {/* authentication */}
      <h2> <Auth /></h2>

      <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-lg'>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
            Name
          </label>
          <input type='text' id='name' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={name}
            onChange={(e) => setName(e.target.value)} />

          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input type='text' id='email' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />


          <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
            Message
          </label>
          <textarea
            row={5}
            id='message' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={message}
            onChange={(e) => setMessage(e.target.value)}> </textarea>
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'>
            Submit
          </button>
        </div>
      </form>

      {/* display the data at the database */}
      <div>
        <div>
          <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
          <button className="bg-green-800 hover:bg-green-900 text-white  py-1 px-1 rounded text-sm"
            onClick={uploadFile}> Upload File</button>
        </div>
        {messages.map((mes) => (
          <div key={mes.id}>
            <h2 style={{ color: "green" }} >
              Name: {mes.name}
              <button className="bg-green-800 hover:bg-green-900 text-white  py-1 px-1 rounded text-sm"
                onClick={() => deleteMessage(mes.id)}> Delete</button>

              <input className='ml-5' placeholder='new message' onChange={(e) => setUpdatedMessage(e.target.value)} />
              <button onClick={() => UpdateMessage(mes.id)}>Update Message</button>
            </h2>
            <p>
              Email: {mes.email}  Message: {mes.message}
            </p>

          </div>
        ))}
      </div>
    </main>
  );
}
