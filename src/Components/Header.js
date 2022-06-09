import React, { useContext, useEffect, useState } from 'react';
import { MdWavingHand } from "react-icons/md";
import AppContext from '../context/AppContext';
import useDone from '../hooks/useDone';
import useInProgress from '../hooks/useInProgress';
import useOnGoing from '../hooks/useOnGoing';
import useReview from '../hooks/useReview';
import { Container } from '../Style/Components/Header';
import { DivUser } from '../Style/Components/UserInfo';

export default function Header() {
  const {user} = useContext(AppContext)
  const [pending, setPending] = useState(0);

  const docLength = useDone();
  const docInProgress = useInProgress();
  const docOnGoing = useOnGoing();
  const docReview = useReview();

  useEffect(() => {
    setPending(docOnGoing + docInProgress + docReview)
  }, [docLength, docInProgress, docOnGoing, docReview])

  return (
    <Container>
      <DivUser>
        <img src={user.photoURL} alt={user.firstName}/>
      </DivUser>
    
        <h1>Hi, {user.firstName} <MdWavingHand /></h1>
        <p>{`${pending} Tasks are pending`} </p>
    </Container>
  )
}
