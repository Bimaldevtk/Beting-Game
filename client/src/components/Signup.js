import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase/firebase'; // Importing auth and provider from the firebase configuration file
import { createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User signed up!');
      navigate('/home');
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
    <div className='container'>
      <div className='signup'>
        <h2>Get Started Now</h2>
        <form onSubmit={handleSignUp}>
          <div className='form-parent'>
            <div className='form-group1'>
              <label>Name</label>
              <input type='text' placeholder='Enter your name' />
            </div>
            <div className='form-group1'>
              <label>Email address</label>
              <input type='email' value={email} onChange={handleEmailChange} placeholder='Enter your email' />
            </div>
            <div className='form-group1'>
              <label>Password</label>
              <input type='password' value={password} onChange={handlePasswordChange} placeholder='Password' />
            </div>
            <div className='button-grp'>
              <button className='signup-btn' type='submit'>Sign Up</button>
              {error && <label className='error-message'>{error}</label>}
              <button className='google-btn' type='button' onClick={handleGoogleSignIn}>Sign Up with Google</button>
              <p className='already-account'>Already have an account? <Link to="/Login" className='link-color'>Sign In</Link></p>
            </div>
          </div>
        </form>
      </div>
      <div className='picture'>
        <img className='bet-image' src='bet game image.jpeg' alt='Pic' />
      </div>
    </div>
  );
};

export default Signup;
