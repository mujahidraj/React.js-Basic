import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../firebase.init';
import { Link } from 'react-router';

const Login = () => {

  const [errorMessage , setErrorMessage] = useState("");

  const handleLogin =e=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email , "and" , password)

    setErrorMessage("");

    signInWithEmailAndPassword(auth , email, password).then(result =>{
      console.log(result.user);
    }).catch(error=>{
      console.log(error);
      setErrorMessage(error.code)
      
    })

  }


  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-column-reverse text-center">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <p className="py-6">Login to access your account and explore our services. We're excited to have you back!</p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4" type='submit'>Login</button>
        </form>
        {
          errorMessage && <p className='text-red-700'>{errorMessage.split("/")}</p>
        }
      </div>
    </div>
      <p>New here ? please <Link className='text-blue-700' to="/register">Register</Link></p>

  </div>
</div>
  );
};

export default Login;