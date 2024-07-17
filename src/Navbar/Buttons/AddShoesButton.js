import React from 'react'
import { Link } from 'react-router-dom'

const AddShoesButton = () => {
  return (
    <div>
      <Link to='/uploadshoes'> 
      <button> Add Shoes </button>
      </Link>
    </div>
  )
}
export default AddShoesButton
