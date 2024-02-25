 import React from 'react'
 import './CSS/LoginSignup.css'
 
 const LoginSingup = () => {
   return (
     <div className='loginsiginup'>
       <div className="loginsignup-container">
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='password'/>
        </div>
        <button>continue</button>
        <p className="loginsignup-login">Already have an account ?
          <span>login here</span>
        </p>
        <div className="loginsignup-agree">
           <input type='checkbox' name='' id=''/>
           <p>By continuing i agree to the terms of use and privacy police</p>
        </div>
       </div>
     
     </div>
   )
 }
 
 export default LoginSingup
 