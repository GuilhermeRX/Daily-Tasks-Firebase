import React, { useContext } from 'react';
import { MdWavingHand } from "react-icons/md";
import AppContext from '../context/AppContext';
import { Container } from '../Style/Components/Header';
import { DivUser } from '../Style/Components/UserInfo';

export default function Header() {
  const {user} = useContext(AppContext)
  return (
    <Container>
      <DivUser>
        <img src={user.photoURL} alt={user.firstName}/>
      </DivUser>
    
        <h1>Hi {user.firstName} <MdWavingHand /></h1>
        <p>6 Tasks are pending</p>
    </Container>
  )
}
