import { getAuth, signOut } from "firebase/auth";
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IoDocumentText, IoHome } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { DivFooter } from '../Style/Components/Footer';
import { colors } from '../Style/global';

export default function Footer() {
  let activeStyle = {
    color: colors.highlight,
    fontSize: '18px',
    textDecoration: "underline",
  };
  
  let noActiveStyle = {
    fontSize: '18px',
    color: '#646464',
  }

  const handleGoogleSignout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('Signout Sucess')
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <DivFooter>
      <NavLink 
      to='/home' 
      style={({ isActive }) =>
        isActive ? activeStyle : noActiveStyle
      }>
        <IoHome />
      </NavLink>

      <NavLink 
      to='/statistics'
      style={({ isActive }) =>
        isActive ? activeStyle : noActiveStyle
      }
      >
        <IoDocumentText />
      </NavLink>

      <NavLink 
      to='/profile'
      style={({ isActive }) =>
        isActive ? activeStyle : noActiveStyle
      }
      >
        <FaUser />
      </NavLink>

      <NavLink 
      to='/'
      style={({ isActive }) =>
        isActive ? activeStyle : noActiveStyle
      }
      onClick={handleGoogleSignout}
      >
        <MdLogout/>
      </NavLink>
    </DivFooter>
  )
}