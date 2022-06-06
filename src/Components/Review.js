import React from 'react'
import { GridOne, GridTwo, ReviewContainer } from '../Style/Components/Review'

export default function Review() {
  return (
    <ReviewContainer>
      <GridOne>
        <div>Done</div>
        <div>In Progress</div>
      </GridOne>

      <GridTwo>
        <div>Ongoing</div>
        <div>Waiting for Review</div>
      </GridTwo>
    </ReviewContainer>
  )
}
