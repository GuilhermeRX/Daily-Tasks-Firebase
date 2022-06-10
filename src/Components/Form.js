import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from 'react';
import { BsFillPatchCheckFill } from "react-icons/bs";
import AppContext from '../context/AppContext';
import { db } from '../service/firebase';
import { notifyEdit, notifySuccess } from "../service/Notify";
import { Btn } from '../Style/Components/Btn';
import { ContainerBtns } from "../Style/Components/EditBtns";
import { Forms } from '../Style/Components/Forms';
import { Input } from '../Style/Components/Input';

export default function Form() {
  const {user: {uid}, taskInfo, setTaskInfo} = useContext(AppContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const verifyInputs = () => {
    const validName = name.length > 0;
    const validDescription = description.length > 0;
    const validPriority = priority > 0 && priority <= 3;

    if(validName && validDescription && validPriority) {
      handleSave()
    }
  }

  const handleSave = async () => {
    console.log('oi')
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
        await addDoc(collection(db, "tasks"), newTask)
        notifySuccess();
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
      notifyEdit()
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
        placeholder='Enter a value from 1 to 3' 
        value={priority}
        id='priority'
        onChange={({target}) => setPriority(target.value)}
        />
      </label>
        <ContainerBtns>
        <Btn type='button' onClick={verifyInputs}>
          Save {taskInfo ? 'Edit' : 'Task'} <BsFillPatchCheckFill />
        </Btn>
        </ContainerBtns>
    </Forms>
  )
}
