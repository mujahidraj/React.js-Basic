import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Utilities/firebase.init';

const AuthProvider = ({children}) => {

  const [user , setUser] = useState(null)

  const createUser = (email , password)=>{
    return createUserWithEmailAndPassword(auth , email , password)
  }

  const loginUser = (email , password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , currentUser =>{
      setUser(currentUser)
      
    })
    return ()=>{
      unSubscribe();
    }
  },[])

  const signOutUser =()=>{
    return signOut(auth)
  }


  const userInto = {
    user,
    createUser,
    loginUser,
    signOutUser

  }

 

  return(
  <AuthContext.Provider value={userInto}>
    {children}
  </AuthContext.Provider>

  );
};

export default AuthProvider;