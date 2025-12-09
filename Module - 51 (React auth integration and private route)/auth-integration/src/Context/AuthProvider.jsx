import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Utilities/firebase.init';

const AuthProvider = ({children}) => {

  const createUser = (email , password)=>{
    return createUserWithEmailAndPassword(auth , email , password)
  }

  const userInto = {
    createUser
  }

  return(
  <AuthContext.Provider value={userInto}>
    {children}
  </AuthContext.Provider>

  );
};

export default AuthProvider;