import React from 'react'
import { Link } from 'react-router-dom'

const AllItemsButton = () => {
  return (
    <div>
      <Link to='/allitems'> 
      <button> All Clothes </button>
      </Link>
    </div>
  )
}
export default AllItemsButton
