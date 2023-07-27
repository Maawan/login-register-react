import React from 'react'
import {Link} from 'react-router-dom'
const Signup = () => {
  console.log("okk")
  return (
  
    <div className="main-container glass">
        <div className="container glass2">
            <img id="logo" src="./movix-logo.png"/>
            <h5>Register with us and Enjoy :)</h5>
            <input placeholder="Enter your Full Name" type="text"  name="" id="" />
            <input placeholder="Enter your E-mail Address" type="email"  name="" id="" />
            <input placeholder="Create a Password" type="password"  name="" id="" />
            <input placeholder="Re- enter Password" type="password"  name="" id="" />
            <button>Signup</button>
            <p>Already have an Account ? <Link to="/signin" style={{textDecoration:"none"}}><span>Signin</span></Link></p>
        </div>
    </div>
  )
}

export default Signup