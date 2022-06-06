import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineFileDone } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaTrash } from 'react-icons/fa';
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
      done: false,
      dateStart: Date.now(),
      dateDone: null,
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
        done: false,
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

  const handleDel = async () => {
    await deleteDoc(doc(db, 'tasks', taskInfo.doc)).then(() => console.log('Task Removed'))
    setName('')
    setDescription('')
    setPriority('')
    setTaskInfo()
   }

  const handleDone = async () => {
    const docRef = doc(db, 'tasks', taskInfo.doc)
    await updateDoc(docRef, {
      uid,
      name,
      description,
      priority: Number(priority),
      done: true,
    })
    setName('')
    setDescription('')
    setPriority('')
    setTaskInfo()
  }

  const optionsEdit = (
    <div style={{display:'flex'}}>
      <Btn type='button' onClick={handleDel}>
        Trash <FaTrash />
      </Btn>
      <Btn type='button' onClick={handleDone}>
        Done <AiOutlineFileDone />
      </Btn>
    </div>
  )

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
        {taskInfo && optionsEdit}
        </ContainerBtns>
    </Forms>
  )
}
