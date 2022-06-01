import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useContext, useEffect } from 'react'
import { BsListTask } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import Form from '../Components/Form'
import Header from '../Components/Header'
import Table from '../Components/Table'
import AppContext from '../context/AppContext'
import { app } from '../service/firebase'
import { Main } from '../Style/Components/Main'
import { DivHome } from '../Style/Pages/Home'

export default function Home() {
  const {taskInfo, handleUser} = useContext(AppContext);
  const navigate = useNavigate()
  
  useEffect(() => {
    const auth = getAuth(app)
    const getUser = async () => {

    onAuthStateChanged(auth, (userAuth) => {
      if(userAuth) {
        const {email, displayName, photoURL, uid } = userAuth
        const userInfo = {
          firstName: displayName.split(' ')[0],
          email,
          photoURL,
          uid,
        }
        handleUser(userInfo)
      } else {
        console.log('Unauthorized User!')
        navigate('/')
      }
    })
  }
  getUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <DivHome>
      <Header />
      <Main>
        <h4>{taskInfo ? 'Edit Your Task ' : 'Add New Task'}</h4>
        <Form />
        <span>Your Tasks <BsListTask /></span>
        <Table />
      </Main>
    </DivHome>
  )
}
