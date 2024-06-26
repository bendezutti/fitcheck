// Author: Benjamin DeZutti
// Web Programming - Summer 2024

import React from 'react'
import './Register.css'
const Register = () => {
  return (
    //<RegisterForm/>
    <div className='registerForm'>
      <div className='registerEmail'>
        <input type='email' placeholder='Email address' />
      </div>
      <div className='registerUsername'>  
        <input type='text' placeholder='Username' />
      </div>
      <div className='registerPassword'> 
        <input type='password' placeholder='Password' />
      </div>
    </div>
  )
}

export default Register