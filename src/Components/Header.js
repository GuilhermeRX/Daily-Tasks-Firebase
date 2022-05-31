import React, { useContext } from 'react';
import { GiNotebook } from "react-icons/gi";
import { MdWavingHand } from "react-icons/md";
import AppContext from '../context/AppContext';
import { Container } from '../Style/Components/Header';
import { DivUser } from '../Style/Components/UserInfo';

export default function Header() {
  const {user} = useContext(AppContext)
  return (
    <Container>
      <span>Daily Tasks <GiNotebook /></span>
      <DivUser>
        <p>Hello {user.firstName}! <MdWavingHand /></p>
        <img src={user.photoURL} alt={user.firstName}/>
      </DivUser>
    </Container>
  )
}
