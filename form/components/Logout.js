import React from 'react'
import { Link } from 'react-router-dom';
import Auth from "./Auth"
const Logout = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h3>You have been Logged out</h3>
        <Link to="/" onClick={()=>Auth.signout()}>Login again</Link>
    </div>
  )
}

export default Logout;
