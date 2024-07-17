import React from 'react'
import { Link } from 'react-router-dom'

const AddShirtButton = () => {
  return (
    <div>
      <Link to='/uploadshirts'> 
      <button> Add Shirt </button>
      </Link>
    </div>
  )
}
export default AddShirtButton
