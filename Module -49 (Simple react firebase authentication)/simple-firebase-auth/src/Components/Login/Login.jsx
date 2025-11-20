import React from 'react';

const Login = () => {

  const handleOnClick = () => {
    // Google sign-in logic will go here
    console.log("google sign in");
    
  }

  return (
    <div>
      I am login page
      <button onClick={handleOnClick}>Log in with Google</button>
    </div>
  );
};

export default Login;