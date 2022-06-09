import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContext from '../context/AppContext';
import { loginWithSocialMedia } from '../service/firebase';
import { notifyRedirect } from '../service/Notify';
import LoginBtn from '../Style/Components/LoginBtn';
import { Container, PageLogin } from '../Style/Pages/login';
export default function Login() {
  const {handleUser} = useContext(AppContext)
  const navigate = useNavigate()

  const handleGoogleLoginClick = async () => {
    const result = await loginWithSocialMedia('google')

      if(result.user) {
        const {email, displayName, photoURL, uid } = result.user
        const userInfo = {
          firstName: displayName.split(' ')[0],
          email,
          photoURL,
          uid,
        }

        handleUser(userInfo)
        notifyRedirect()
        setTimeout(() => {
          navigate('/home')
        }, 2000)
      }
    
  }
  return (
    <PageLogin>
      <Container>
        <div>
          <h1>Manager your daily tasks</h1>
          <p>
            Simple and intuitive application to manage your tasks quickly and easily.
          </p>
          <LoginBtn onClick={handleGoogleLoginClick}>
            <FcGoogle />Login with Google
          </LoginBtn>
        </div>
      </Container>
      <ToastContainer />
    </PageLogin>
    
  )
}