import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { db } from '../service/firebase';
import { GridOne, GridTwo, ReviewContainer } from '../Style/Components/Review';

export default function Review() {
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [onGoing, setOnGoing] = useState(0);
  const [waitReview, setWaitReview] = useState(0);

  const {user} = useContext(AppContext)
  

  if (user.uid) {
    const collectionRef = collection(db, 'tasks');

    const searchQuery =  query(
      collectionRef,
      where('uid', '==', user.uid),
      where('done', '==', true),
    );
  
    onSnapshot(searchQuery, (querySnapshot) => {
      const docs = [];
      if(querySnapshot.docs.length === 0) {
        return setDone(0)
      }
      querySnapshot.forEach((doc) => {
        docs.push(doc.data())
      })
      setDone(docs.length)
    })
  }
   
  return (
    <ReviewContainer>
      <GridOne>
        <div>
          <h1>{done}</h1>
          <p>Done</p>
        </div>
        
        <div>
          <h1>{inProgress}</h1>
          <p>In Progress</p>
        </div>
      </GridOne>

      <GridTwo>
      <div>
          <h1>{onGoing}</h1>
          <p>Ongoing</p>
        </div>
        
        <div>
          <h1>{waitReview}</h1>
          <p>Waiting for Review</p>
        </div>
      </GridTwo>
    </ReviewContainer>
  )
}
