// import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
// import { auth } from '../../Utilities/firebase.init';
import { AuthContext } from '../../Context/AuthContext';

const Register = () => {
  
  const {createUser} = use (AuthContext)

  const handleOnSubmit =(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name , "--" , email , "--" , password);

    // createUserWithEmailAndPassword (auth, email, password)
    // .then(result=>{
    //   console.log(result);
    //   sendEmailVerification(result.user).then(()=>{
    //     alert('Verification email sent. Please check your inbox.');
    //   })
      
    // }).catch(error=>{
    //   console.log(error);
      
    // })
    
    createUser(email , password)
    .then((result) => { 
      console.log(result.user);
      
    }).catch((err) => {
        console.log(err);
        
    });
  }

  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-column-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Sign Up </h1>
      <p className="py-6 text-center">Create your account to get started with our services. Fill in the details below to register!</p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
          <label className="label">Name</label>
          <input type="text" className="input" name='name' placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>Already have an account? <Link className='text-blue-600 underline' to="/login">login Here...</Link></p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;