// Author: Benjamin DeZutti
// Web Programming - Summer 2024

import React from 'react'
import './RegisterForm.css'
const RegisterForm = () => {
  return (
    <div className='registerForm'>
        <div> 
        <input placeholder='Email address'/> 
        </div>
        <div>  <input placeholder='Username'/>
        </div>
        <div> <input placeholder='Password'/>
        </div>
    </div>
  )
}

export default RegisterForm