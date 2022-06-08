import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import Select from '../Components/Select'
import AppContext from '../context/AppContext'
import { app } from '../service/firebase'
import { Main } from '../Style/Components/Main'
import { PageTask } from '../Style/Pages/Tasks'

export default function Tasks() {
  const {taskInfo, handleUser} = useContext(AppContext);
  const navigate = useNavigate()

  useEffect(() => {
    const auth = getAuth(app);

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
    <PageTask>
      <Main>
        <h4>{taskInfo ? 'Edit Your Task ' : 'Add New Task'}</h4>
        <Form />
      </Main>
      <Select />
      <Card />
      <Footer />
    </PageTask>
  )
}
