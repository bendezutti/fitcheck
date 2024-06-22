import React from 'react'
import {Link } from 'react-router-dom'
const HomeButton = () => {
  return (
    <div>
        <button> <Link to='/home'/> Home </button>
    </div>
  )
}

export default HomeButton