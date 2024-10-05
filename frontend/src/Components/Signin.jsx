import React from 'react'

import './signin.css'

const Signin = () => {
  return (
    <div className="border">
    <div className="box">
        <div className="heading">
        <h2>Sign up</h2>
        <br></br>
        <h4><a href="#login page link">Login &#8594;</a></h4>


        </div>
        <div className="form">
            <form>
                <input type="text" id="Full Name" name="Full name" placeholder='Full name'/>
                <br/>
                <input type="email" id="Email id" name="Email id" placeholder='Email id' />
                <br/>
                <input type="text" id="username" name="Username" placeholder='Username'/>
                <br/>
                <input type="password" id="Password" name="Password" placeholder='Password'/>
                <br/>
                <input type="password" id="Re-enter Password" name="Re-enter Password"  placeholder='Re-enter Password'/>
                <br/>
                <div className="TC">
                <input type="checkbox" id="c&T" name="password" /><h6>I accept all <a href="T&C">term & condition</a></h6>
                </div>
                
                <input type="button" value="SIGN UP" style={{backgroundColor:"Darksalmon"}}/>
            </form>



        </div>

        

        
      
    </div>
    </div>
  )
}

export default Signin
