import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Utilities/firebase.init';

const AuthProvider = ({children}) => {

  const createUser = (email , password)=>{
    return createUserWithEmailAndPassword(auth , email , password)
  }

  const loginUser = (email , password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }

 onAuthStateChanged(auth ,(currentUser)=>{
    if(currentUser){
      console.log("Application has user :" , currentUser);
    }
    else{
      console.log("Application doesn't haev current user :" );
    }
  })

  const userInto = {
    createUser,
    loginUser

  }

 

  return(
  <AuthContext.Provider value={userInto}>
    {children}
  </AuthContext.Provider>

  );
};

export default AuthProvider;