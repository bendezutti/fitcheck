import React, { useContext } from 'react'
import { AuthContext } from '../../shared/context/auth-context'
const LogoutButton = () => {
  const auth = useContext(AuthContext)
  return (
    <div>
       <button onClick={auth.logout}> Logout </button>
    </div>
  )
}
export default LogoutButton;