import React from 'react';
import { Link } from 'react-router';

const Login = () => {

  const handleOnSubmit = (e)=>{
    e.preventDefault();
    // handle login logic here
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-column-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <p className="py-6 text-center">Login to access your account and explore our services. Enter your credentials below to get started!</p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>Don't have an account? <Link className='text-blue-600 underline' to="/register">Register Here...</Link></p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;