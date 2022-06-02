import { getAuth } from "firebase/auth";
import React from 'react';
import Footer from '../Components/Footer';
import { MyProfile } from "../Style/Components/Profile";
import { MyProfContainer } from "../Style/Pages/Profile";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;
  const {displayName, email, photoURL, } = user
  return (
    <MyProfContainer>
      <MyProfile>
        <h1>My Profile</h1>
        <img src={photoURL} alt='UserName'/>
        <p>Nome: {displayName}</p>
        <p>Email: {email}</p>
      </MyProfile>
      <Footer />
    </MyProfContainer>
  )
}
