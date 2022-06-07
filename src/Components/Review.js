import React, { useEffect, useState } from 'react';
import useDone from '../hooks/useDone';
import useInProgress from '../hooks/useInProgress';
import { GridOne, GridTwo, ReviewContainer } from '../Style/Components/Review';

export default function Review() {
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [onGoing, setOnGoing] = useState(0);
  const [waitReview, setWaitReview] = useState(0);

 const docLength = useDone();
 const docInProgress = useInProgress();
 useEffect(() => {
   setDone(docLength)
   setInProgress(docInProgress)
 }, [docLength, docInProgress])
   
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
