import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInFormHandler = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  const registerhandle = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        {' '}
        <img
          className='login__logo'
          src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png'
          alt=''
        />
      </Link>

      <div className='login__container'>
        <h1>Sign In</h1>
        <form onSubmit={signInFormHandler}>
          <h5>E-mail</h5>
          <input
            type='text'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            name='pass'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='login__signupbtn'>Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className='login__registerbtn' onClick={registerhandle}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
