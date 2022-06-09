import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import useDone from '../hooks/useDone';
import useInProgress from '../hooks/useInProgress';
import useOnGoing from '../hooks/useOnGoing';
import useReview from '../hooks/useReview';
import { GridOne, GridTwo, ReviewContainer } from '../Style/Components/Review';

export default function Review() {
  const {
    done,
    setDone,
    inProgress,
    setInProgress,
    review,
    setReview,
    onGoing,
    setOnGoing
  } = useContext(AppContext)

 const docLength = useDone();
 const docInProgress = useInProgress();
 const docOnGoing = useOnGoing();
 const docReview = useReview();
 
 useEffect(() => {
   setOnGoing(docOnGoing)
   setInProgress(docInProgress)
   setDone(docLength)
   setReview(docReview)
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [docLength, docInProgress, docOnGoing, docReview])
   
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
          <p>To Do</p>
        </div>
        
        <div>
          <h1>{review}</h1>
          <p>Waiting for Review</p>
        </div>
      </GridTwo>
    </ReviewContainer>
  )
}
