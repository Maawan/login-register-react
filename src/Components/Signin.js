import React from 'react'
import {Link} from 'react-router-dom'
const Signin = () => {
  return (
    <div className="main-container glass">
        <div className="container glass2">
            <img id="logo" src="./movix-logo.png"/>
            <h5>Login to Continue :)</h5>
            <input placeholder="Enter your E-mail Address" type="email"  name="" id="" />
            <input placeholder="Create a Password" type="password"  name="" id="" />
            <button>Signin</button>
            <p>Don't have an Account ? <Link to="/signup" style={{textDecoration:"none"}}><span>Register</span></Link></p>
        </div>
    </div>
  )
}

export default Signin