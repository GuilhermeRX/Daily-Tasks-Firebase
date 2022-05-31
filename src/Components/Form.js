import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from 'react';
import { BsFillPatchCheckFill } from "react-icons/bs";
import AppContext from '../context/AppContext';
import { db } from '../service/firebase';
import { Btn } from '../Style/Components/Btn';
import { Forms } from '../Style/Components/Forms';
import { Input } from '../Style/Components/Input';

export default function Form() {
  const {handleTask, user: {uid}} = useContext(AppContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(0);
  
  const handleSave = async () => {
    const newTask = {
      uid,
      name,
      description,
      priority,
    }
  
    try {
      const docRef = await addDoc(collection(db, "tasks"), newTask)
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <Forms>
        <Input type='text' placeholder='Name' value={name} onChange={({target}) => setName(target.value)}/>
        <Input type='text' placeholder='Description' value={description} onChange={({target}) => setDescription(target.value)} />
        <Input type='number' placeholder='Priority' value={priority} onChange={({target}) => setPriority(target.value)}/>
        <Btn type='button' onClick={handleSave}>Save Task <BsFillPatchCheckFill /></Btn>
    </Forms>
  )
}
