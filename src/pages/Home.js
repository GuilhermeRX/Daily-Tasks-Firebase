import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Review from '../Components/Review'
import AppContext from '../context/AppContext'
import { app } from '../service/firebase'
import { DivHome, Title } from '../Style/Pages/Home'

export default function Home() {
  const {handleUser} = useContext(AppContext);
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
      <Title>Monthly Review</Title>
      <Review />
      <Footer />
    </DivHome>
  )
}
