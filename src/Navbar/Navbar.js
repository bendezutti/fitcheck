import React from 'react'
import HomeButton from './Buttons/HomeButton'
import LoginButton from './Buttons/LoginButton'
import RegisterButton from './Buttons/RegisterButton'

const Navbar = () => {
  return (
    <div>
        <HomeButton/>
        <LoginButton/>
        <RegisterButton/>
    </div>
  )
}

export default Navbar