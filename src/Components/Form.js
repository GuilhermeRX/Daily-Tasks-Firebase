import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from 'react';
import { BsFillPatchCheckFill } from "react-icons/bs";
import AppContext from '../context/AppContext';
import { db } from '../service/firebase';
import { Btn } from '../Style/Components/Btn';
import { ContainerBtns } from "../Style/Components/EditBtns";
import { Forms } from '../Style/Components/Forms';
import { Input } from '../Style/Components/Input';

export default function Form() {
  const {user: {uid}, taskInfo, setTaskInfo} = useContext(AppContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const handleSave = async () => {
    const newTask = {
      uid,
      name,
      description,
      priority: Number(priority),
      dateStart: Date.now(),
      duration: null,
      status: 'ongoing',
    }
    if (!taskInfo){
      try {
        const docRef = await addDoc(collection(db, "tasks"), newTask)
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setName('')
      setDescription('')
      setPriority('')

    } else {
      const docRef = doc(db, 'tasks', taskInfo.doc)
      await updateDoc(docRef, {
        uid,
        name,
        description,
        priority: Number(priority),
      })
      setName('')
      setDescription('')
      setPriority('')
      setTaskInfo()
    }
  }

  useEffect(() => {
    if(taskInfo) {
      const {name, description, priority} = taskInfo
      setName(name)
      setDescription(description)
      setPriority(priority)
    }
  }, [taskInfo])

  return (
    <Forms>
      <label htmlFor="name"> Name
        <Input 
        type='text'
        placeholder='Name' 
        value={name}
        id='name'
        onChange={({target}) => setName(target.value)}
        />
      </label>

      <label htmlFor="description"> Description
        <Input 
        type='text' 
        placeholder='Description' 
        value={description} 
        id='description'
        onChange={({target}) => setDescription(target.value)} 
        />
      </label>

      <label htmlFor="priority"> Priority
        <Input 
        type='number'
        placeholder='Priority' 
        value={priority}
        id='priority'
        onChange={({target}) => setPriority(target.value)}
        />
      </label>
        <ContainerBtns>
        <Btn type='button' onClick={handleSave}>
          Save {taskInfo ? 'Edit' : 'Task'} <BsFillPatchCheckFill />
        </Btn>
        </ContainerBtns>
    </Forms>
  )
}
