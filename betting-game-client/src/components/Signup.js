import React from 'react';
import './SignUp.css';
import Login from './Login';
import { Link } from 'react-router-dom';

const Signup = () => {
  const handleGoogleSignUp = () => {
    // Handle Google sign-up logic here
    console.log("Sign up with Google clicked");
  };
  return (
    <div className='container'>
 
      <div className='signup'>
        <h2>Get Started Now</h2>
        <form>
          <div className='form-parent'>
          <div className='form-group1'>
            <label>Name</label>
            <input type='name' placeholder='Enter  your name'/>
          </div>
          <div className='form-group1'>
            <label>Email address</label>
            <input type='email' placeholder='Enter  your email'/>
            </div>
            <div className='form-group1'>
              <label>Password</label>
            <input type='password' placeholder='Password'/>
          </div>
          <div className='button-grp'>
          <button className='signup-btn'  type='submit'>Sign Up</button>
          <button className='google-btn' type="button" onClick={handleGoogleSignUp}>Sign Up with Google</button>
          <p className='already-account'>Already have an account? <Link to="/Login" className='link-color'>Sign In</Link></p>
          </div>
          </div>
          
        </form>
      </div>
      <div className='picture'>
        <img className='bet-image' src='bet game image.jpeg' alt='Pic'/>
      </div>
      

    </div>
  )
}

export default Signup
