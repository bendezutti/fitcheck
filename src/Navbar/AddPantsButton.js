import React from 'react'
import { Link } from 'react-router-dom'

const AddPantsButton = () => {
  return (
    <div>
      <Link to='/uploadpants'> 
      <button> Add Pants </button>
      </Link>
    </div>
  )
}
export default AddPantsButton
