//Author: Benjamin Dezutti
//Web Programming - Summer 2024

import React from 'react'
import HomeButton from './Buttons/HomeButton'
import LoginButton from './Buttons/LoginButton'
import './Navbar.css'
import RegisterButton from './Buttons/RegisterButton'

const Navbar = () => {
  return (
    <div className='navBar'>
      <div className='homeButton'>
        <HomeButton/>
      </div>
      <div className='loginButton'>
        <LoginButton/>
      </div>
      <div className='registerButton'>
        <RegisterButton/>
      </div>
    </div>
  )
}

export default Navbar