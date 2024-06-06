import React, { useState } from 'react';
import './Login.css'
import { Link,useNavigate } from 'react-router-dom';

import { auth, provider } from '../firebase/firebase'; // Importing auth and provider from the firebase configuration file
import {  signInWithPopup,signInWithEmailAndPassword,getAuth} from 'firebase/auth';




const Login = () => {
  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate();

  

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
    const handleSignIn = async () => {
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/home")
      } catch (error) {
        setError(error.message);
      }
    };
    const handleGoogleSignIn = async () => {
      try {
        await signInWithPopup(auth, provider);
        navigate('/home');
      } catch (error) {
        setError(error.message);
      }
    };
    

  return (
    <div className='container-login'>
      <div className='login'>
        <h2>Welcome Back !</h2>
   
       
          <div className='form-parent'>
          <div className='form-group'>
            <label>Email address</label>
            <input type='email' value={email} onChange={handleEmailChange} placeholder='Enter your email' />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type='password' value={password} onChange={handlePasswordChange} placeholder='Password' />
          </div>
          <div className='form-group'>
          <button type='submit' className='signup-btn' onClick={handleSignIn}>Log in</button>
          <button className='google-btn' type='button' onClick={handleGoogleSignIn}>Log in with Google</button>
          {error && <label className='error-message'>{error}</label>}
          <p className='No-account'>Don't have an account? <Link to='/Signup'>Sign Up</Link></p>
          </div>
          </div>


      

      </div>
      <div className='picture'>
        <img className='bet-image' src='bet game image.jpeg' alt='Pic'/>
      </div>


      
    </div>
  )
}



export default Login