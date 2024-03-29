'use client'
import { db, auth, storage } from './firebaseConfig'
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Auth } from "./auth.js"
import { ref, uploadBytes } from 'firebase/storage';


async function addDataToFireStore(commonName, scientificName, description, sunExposure, soil, watering, humidity, fertilizer, floriography) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      commonName: commonName,
      scientificName: scientificName,
      description: description,
      sunExposure: sunExposure,
      soil: soil,
      watering: watering,
      humidity: humidity,
      fertilizer: fertilizer,
      floriography: floriography,
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
  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [description, setDescription] = useState("");
  const [sunExposure, setSunExposure] = useState("");
  const [soil, setSoil] = useState("");
  const [watering, setWatering] = useState("");
  const [humidity, setHumidity] = useState("");
  const [fertilizer, setFertilizer] = useState("");
  const [floriography, setFloriography] = useState("");


  const [messages, setMessages] = useState([]);
  // update message state
  const [updatedDescription, setUpdatedDescription] = useState("")
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

  const UpdateDescription = async (id) => {
    //  "messages" is the name of the collection
    const descriptionDoc = doc(db, "messages", id)
    await updateDoc(descriptionDoc, { description: updatedDescription })
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
      const added = await addDataToFireStore(commonName, scientificName, description, sunExposure, soil, watering, humidity, fertilizer, floriography);
      if (added) {
        setCommonName("");
        setScientificName("");
        setDescription("");
        setSunExposure("");
        setSoil("");
        setWatering("");
        setHumidity("");
        setFertilizer("");
        setFloriography("");
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
          <label htmlFor='commonName' className='block text-gray-700 font-bold mb-2'>
            Common Name
          </label>
          <input type='text' id='commonName' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={commonName}
            onChange={(e) => setCommonName(e.target.value)} />

          <label htmlFor='scientificName' className='block text-gray-700 font-bold mb-2'>
            Scientific Name
          </label>
          <input type='text' id='scientificName' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={scientificName}
            onChange={(e) => setScientificName(e.target.value)} />

          <label htmlFor='description' className='block text-gray-700 font-bold mb-2'>
            Description
          </label>
          <textarea
            row={5}
            id='description' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={description}
            onChange={(e) => setDescription(e.target.value)}> </textarea>

          <label htmlFor='sunExposure' className='block text-gray-700 font-bold mb-2'>
            Sun Exposure
          </label>
          <input type='text' id='sunExposure' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={sunExposure}
            onChange={(e) => setSunExposure(e.target.value)} />

          <label htmlFor='soil' className='block text-gray-700 font-bold mb-2'>
            Soil
          </label>
          <input type='text' id='soil' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={soil}
            onChange={(e) => setSoil(e.target.value)} />

          <label htmlFor='watering' className='block text-gray-700 font-bold mb-2'>
            Watering
          </label>
          <input type='text' id='watering' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={watering}
            onChange={(e) => setWatering(e.target.value)} />

          <label htmlFor='humidity' className='block text-gray-700 font-bold mb-2'>
            Humidity
          </label>
          <input type='text' id='humidity' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)} />

          <label htmlFor='fertilizer' className='block text-gray-700 font-bold mb-2'>
            Fertilizer
          </label>
          <input type='text' id='fertilizer' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={fertilizer}
            onChange={(e) => setFertilizer(e.target.value)} />

          <label htmlFor='floriography' className='block text-gray-700 font-bold mb-2'>
            Floriography
          </label>
          <input type='text' id='floriography' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={floriography}
            onChange={(e) => setFloriography(e.target.value)} />

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
              <span>Common Name: {mes.commonName}</span> 
              <span style={{ marginLeft: "20px" }}>Scientific Name: {mes.scientificName}</span> 
              <button className="bg-green-800 hover:bg-green-900 text-white ml-5  py-1 px-1 rounded text-sm"
                onClick={() => deleteMessage(mes.id)}> Delete</button>


            </h2>
            <p>

            </p>
            <p>Description: {mes.description}
              <input className='ml-5' placeholder='new message' onChange={(e) => setUpdatedDescription(e.target.value)} />
              <button onClick={() => UpdateDescription(mes.id)}>Update Description</button>
            </p>

          </div>
        ))}
      </div>
    </main>
  );
}
