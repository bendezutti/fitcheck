//Author: Benjamin Dezutti
//Web Programming - Summer 2024

import React, { useContext } from 'react'
import HomeButton from './Buttons/HomeButton'
import LoginButton from './Buttons/LoginButton'
import './Navbar.css'
import RegisterButton from './Buttons/RegisterButton'
import { AuthContext } from '../shared/context/auth-context'
import LogoutButton from './Buttons/LogoutButton'
import MakeFitButton from './Buttons/MakeFitButton'
import AddShirtButton from './Buttons/AddShirtButton'
import AddPantsButton from './AddPantsButton'
import AddShoesButton from './Buttons/AddShoesButton'

const Navbar = () => {
  const auth = useContext(AuthContext)

  return (
    <div className='navBar'>
      <div className='homeButton'>
        <HomeButton />
      </div>

      {!auth.isLoggedIn && (
        <div className='loginButton'>
          <LoginButton />
        </div>

      )}

      {!auth.isLoggedIn && (
        <div className='registerButton'>
          <RegisterButton />
        </div>
      )}


      {auth.isLoggedIn && (
        <div className='makeFitButton'>
          <MakeFitButton />
        </div>
      )}

      
{auth.isLoggedIn && (
        <div className='addShirt'>
          <AddShirtButton />
        </div>
      )}

{auth.isLoggedIn && (
        <div className='addPants'>
          <AddPantsButton />
        </div>
      )}

{auth.isLoggedIn && (
        <div className='addShoes'>
          <AddShoesButton />
        </div>
      )}

      {auth.isLoggedIn && (
        <div className='logoutButton'>
          <LogoutButton />
        </div>
      )}


    </div>
  )
}

export default Navbar