import React from 'react'

import logo1 from './logoGoogle.jpeg'
import logo2 from './logoFB.jpeg'
import logo3 from './logoTwitter.jpeg'
import './Login.css'

const Login = () => {
  return (
    <div className="border">
        <div className="box">
            <h2>Login</h2>
            <form>
                <input type="email" id="email" placeholder="username or email"/>
                <br/>
                <input type="password" id="password" placeholder="password"/>
                <br/>
            </form>
            <div className="FG">
                <p><a href="#Link">Forgot password?</a></p>
            </div>
            <button type="button" style={{backgroundColor:"Darksalmon"}}> Login</button>
            <p>Or Sign Up Using</p>
            <div className="logo">
            <img src={logo1}  height={40} width={40} alt={'link'}/>
            <img src={logo2}  height={40} width={40} alt={'link'}/>
            <img src={logo3}  height={40} width={40} alt={'link'}/>


            </div>
            <h4><a href="#signup link">SIGNUP</a></h4>
            
                   
            

        </div>
      
    </div>
  )
}

export default Login
