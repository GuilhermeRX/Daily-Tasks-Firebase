import React from 'react'
import { GridOne, GridTwo, ReviewContainer } from '../Style/Components/Review'

export default function Review() {
  return (
    <ReviewContainer>
      <GridOne>
        <div>
          <h1>22</h1>
          <p>Done</p>
        </div>
        
        <div>
          <h1>8</h1>
          <p>In Progress</p>
        </div>
      </GridOne>

      <GridTwo>
      <div>
          <h1>4</h1>
          <p>Ongoing</p>
        </div>
        
        <div>
          <h1>3</h1>
          <p>Waiting for Review</p>
        </div>
      </GridTwo>
    </ReviewContainer>
  )
}
