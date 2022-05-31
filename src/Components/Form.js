import React from 'react';
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Btn } from '../Style/Components/Btn';
import { Forms } from '../Style/Components/Forms';
import { Input } from '../Style/Components/Input';
export default function Form() {
  return (
    <Forms>
        <Input type='text' placeholder='Name' />
        <Input type='text' placeholder='Description' />
        <Input type='text' placeholder='Priority'/>
        <Btn type='button'>Save Task <BsFillPatchCheckFill /></Btn>
    </Forms>
  )
}
