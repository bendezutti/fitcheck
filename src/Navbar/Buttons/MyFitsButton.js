import React from 'react'
import { Link } from 'react-router-dom'

const MyFitsButton = () => {
  return (
    <div>
      <Link to='/myfits'> 
      <button> My Fits </button>
      </Link>
    </div>
  )
}
export default MyFitsButton
