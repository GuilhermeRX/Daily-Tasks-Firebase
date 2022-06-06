import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import { GridOne, GridTwo, ReviewContainer } from '../Style/Components/Review'

export default function Review() {
  const {taskInfo} = useContext(AppContext)

  const [done, setDone] = useState(0)
  const [inProgress, setInProgress] = useState(0)
  const [onGoing, setOnGoing] = useState(0)
  const [waitReview, setWaitReview] = useState(0)

  if(taskInfo) {

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
