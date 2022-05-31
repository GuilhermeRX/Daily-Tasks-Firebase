import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { GiNotebook } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import todolist from '../images/todolist.svg';
import { loginWithSocialMedia } from '../service/firebase';
import LoginBtn from '../Style/Components/LoginBtn';
import { Container } from '../Style/Pages/login';
export default function Login() {
  const {handleUser} = useContext(AppContext)
  const navigate = useNavigate()

  const handleGoogleLoginClick = async () => {
    const result = await loginWithSocialMedia('google')
  
    if(result.user) {
      const {email, displayName, photoURL } = result.user
      const userInfo = {
        firstName: displayName.split(' ')[0],
        email,
        photoURL,
      }
      handleUser(userInfo)
      navigate('/home')
    }
  }
  return (
    <Container>
      <img src={todolist} alt='todolist'/>
      <div>
        <span>Daily Tasks <GiNotebook /></span>
        <h1>Welcome!</h1>
        <LoginBtn onClick={handleGoogleLoginClick}>
          <FcGoogle />Login with Google
        </LoginBtn>
      </div>
    </Container>
  )
}