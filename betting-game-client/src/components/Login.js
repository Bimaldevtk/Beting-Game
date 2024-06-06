import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword,doSignInWithGoogle } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const {userLoggedIn} =useAuth()
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [isSiginingIn, setisSiginingIn] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  // const handleSignUp =async (event)={
  //   event.preventDefault();
  //   try{
  //     const userCredential = await createUserWithEmailAndPassword(auth,email,password);
  //     const user =userCredential.user;
  //     console.log('User Signed up:', user);

  //   } catch(error){
  //     console.error('Error signing up:',error);
  //     seterrorMessage(error.message);
  //   }
  
  return (
    <div className='container-login'>
      <div className='login'>
        <h2>Welcome Back !</h2>
        {/* <p className='cred'>Enter Your Credentials to access your account</p> */}
        <form>
          <div className='form-parent'>
          <div className='form-group'>
            <label>Email address</label>
            <input type='email' placeholder='Enter your mail'/>
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type='password' placeholder='Enter your password'/>
          </div>
          <div className='form-group'>
          <button type='submit' className='signup-btn'>Log in</button>
          <p className='No-account'>Don't have an account? <Link to='/Signup'>Sign Up</Link></p>
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

export default Login
