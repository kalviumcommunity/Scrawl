import React from 'react'
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className='login'>
      <Link to='/' style={{ color: 'black' }}>
        <div className='logo'>
          <img src='../../../assets/logo2-black.svg' alt='logo' />
        </div>
      </Link>

      <div className='login-container'>
        <h1>Log In</h1>
        <form action="http://localhost:4000/login" method='POST'>
            <p>Email*</p>
            <input placeholder='mail@website.com' name='email' />
            <p>Password*</p>
            <input placeholder='Password' type='password' name='password' />

            <button className='loginpage-btn' type='submit'>Log In</button>
            <div className='or-div'>
                <div className='line'></div>
                or Log In with Google
                <div className='line'></div>
            </div>
        </form>
        <form action="http://localhost:4000/auth/google">
            <button className='loginpage-btn google' type='submit'>
                <img src='../../../assets/googlelogo.svg' alt='google'/>
                Log In with Google
            </button>

            <p>Don't have an account? <Link to='/signup' style={{color: '#055FFC'}}>Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
