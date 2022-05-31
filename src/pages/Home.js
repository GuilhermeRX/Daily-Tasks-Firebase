import React from 'react'
import { BsListTask } from "react-icons/bs"
import Form from '../Components/Form'
import Header from '../Components/Header'
import Table from '../Components/Table'
import { Main } from '../Style/Components/Main'
import { DivHome } from '../Style/Pages/Home'
export default function Home() {
  return (
    <DivHome>
      <Header />
      <Main>
        <h4>Add New Task</h4>
        <Form />
        <span>Your Tasks <BsListTask /></span>
        <Table />
      </Main>
    </DivHome>
  )
}
