import React, { useContext } from 'react'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import AppContext from '../context/AppContext'
import { Main } from '../Style/Components/Main'
import { PageTask } from '../Style/Pages/Tasks'

export default function Tasks() {
  const {taskInfo} = useContext(AppContext);
  return (
    <PageTask>
      <Main>
        <h4>{taskInfo ? 'Edit Your Task ' : 'Add New Task'}</h4>
        <Form />
      </Main>
      <Card />
      <Footer />
    </PageTask>
  )
}
