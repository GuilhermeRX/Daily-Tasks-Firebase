import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { BtnSelect, SelectContainer } from '../Style/Components/StyleSelect';

export default function Select() {
  const {select, setSelect} = useContext(AppContext)

  return (
    <SelectContainer>
      <BtnSelect onClick={() => setSelect('ongoing')} status={select === 'ongoing'}>To Do</BtnSelect>
      <BtnSelect onClick={() => setSelect('in progress')} status={select === 'in progress'}>In Progress</BtnSelect>
      <BtnSelect onClick={() => setSelect('review')} status={select === 'review'}>Review</BtnSelect>
      <BtnSelect onClick={() => setSelect('done')} status={select === 'done'}>Done</BtnSelect>
    </SelectContainer>
  )
}
