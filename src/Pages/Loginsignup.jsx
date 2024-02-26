import React from 'react'
import './Css/Loginsignup.css'

function Loginsignup() {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
      <h1>Sign Up</h1>
      <div className='loginsignup-fields'>
        <input type='text' placeholder='Your Name'/>
        <input type='Email' placeholder='Email '/>
        <input type='password' placeholder='Password'/>
        <button>Continue</button>
        </div>
         <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
         <div className='loginsignup-agree'>
         <input type='checkbox' name='' id='' />
         <p>by Continuing i agree to term of use & privacy policy.</p>
         
        </div>
      </div>
      
    </div>
  )
}

export default Loginsignup
