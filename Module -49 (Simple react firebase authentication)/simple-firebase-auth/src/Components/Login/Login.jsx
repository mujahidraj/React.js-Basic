import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.init';


const Login = () => {

  const [user , setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider()


  const handleOnClick = () => {

    signInWithPopup(auth,provider).then(result =>{
      const user = result.user;
      setUser(user)
    })
    .catch(error =>{
      console.error("error:", error);
    })
    // Google sign-in logic will go here
    console.log("google sign in");

  }

  const handleSignOut =()=>{

      signOut(auth).then(()=>{
        setUser(null)
      }).catch((error=>console.log(error)
      ))
    }

  const handleGithubLogin =()=>{
    signInWithPopup (auth , githubProvider).then ( result =>{
      const user = result.user;
      setUser (user)
    })
    .catch ( error =>{
      console.error ("error:", error);
    })
  }  

  return (
    <div>
      I am login page
      <button onClick={handleOnClick}>Log in with Google</button>
      <button onClick={handleGithubLogin}>Log in with GitHub</button>
      <button onClick={handleSignOut}>Sign Out</button>
      {
        user && <div>
          <h2>User Name: {user.displayName}</h2>
          <p>User Email: {user.email}</p>
          <img src={user.photoURL} alt="User Profile" />
        </div>
      }
    </div>
  );
};

export default Login;