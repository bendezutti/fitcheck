import React from 'react'
import { Link } from 'react-router-dom'

const MakeFitButton = () => {
  return (
    <div>
      <Link to='/allfits'> 
      <button> All Fits </button>
      </Link>
    </div>
  )
}
export default MakeFitButton
