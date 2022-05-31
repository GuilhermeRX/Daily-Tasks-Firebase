import React, { useContext, useState } from 'react';
import { BsFillPatchCheckFill } from "react-icons/bs";
import AppContext from '../context/AppContext';
import { Btn } from '../Style/Components/Btn';
import { Forms } from '../Style/Components/Forms';
import { Input } from '../Style/Components/Input';

export default function Form() {
  const {handleTask} = useContext(AppContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(0);
  
  const handleSave = () => {
    const newTask = {
      name,
      description,
      priority,
    }
    handleTask(prevTask => [...prevTask, newTask ])
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
