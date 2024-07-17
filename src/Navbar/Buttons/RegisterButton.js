import React from 'react'
import { Link } from 'react-router-dom'
const RegisterButton = () => {
  return (
    <div>
      <Link to='/signup'>
        <button> Register </button>
      </Link>
    </div>
  )
}

export default RegisterButton