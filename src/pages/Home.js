import React from 'react'
import Form from '../Components/Form'
import Header from '../Components/Header'
import { Main } from '../Style/Components/Main'
import { DivHome } from '../Style/Pages/Home'

export default function Home() {
  return (
    <DivHome>
      <Header />
      <Main>
        <h4>Add New Task</h4>
        <Form />
      </Main>
    </DivHome>
  )
}
