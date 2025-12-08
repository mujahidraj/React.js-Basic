import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { FaRegEyeSlash } from "react-icons/fa6";





const Register = () => {

  const [errorMsg, setErrorMsg] = useState(' ');
  const [passwordShow, setPasswordShow] = useState(false);

  const handleOnClick = () => {
    setPasswordShow(!passwordShow)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, "and", password , "and ", terms);

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,32}$/;

    if (passwordRegex.test(password) === false) {
      setErrorMsg('Password is not valid. It must be 8-32 characters long and include at least one uppercase letter, one number, and one special character.');
      return;
    }

    if(terms !== true){
      setErrorMsg('You must accept the terms and conditions to register.');
      return;
    }


    createUserWithEmailAndPassword(auth, email, password , terms)
      .then(result => {
        console.log(result);
        setErrorMsg(' ')

      })
      .catch(error => {
        console.log(error);
        setErrorMsg(error.code)

      })

  }
  return (
    <div className='border p-5 max-w-sm mx-auto'>
      <form onSubmit={handleSubmit}>
        {/* Email */}

        <label className="input validator join-item">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input type="email" name='email' placeholder="mail@site.com" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>


        <br />
        {/* Password */}
        <label className="input validator">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
              ></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <div>
            <input
              type={passwordShow ? "text" : "password"}
              name='password'
              required
              placeholder="Password"
              minlength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
            
            <button className='btn w-3 h-9 top-0 right-0 absolute' type='button' onClick={handleOnClick}>
              eye
            </button>
          </div>
        </label>
        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
        </p>
        <br />
        <br />
            <label className="label">
              <input type="checkbox" name='terms' className="checkbox" />
              Accept Terms and Conditions
            </label>
            <br />
        <input type="submit" value="Register" className='btn ' />
      </form>
      {
        errorMsg && <p className='text-red-700'>{errorMsg.split("/")}</p>
      }
    </div>
  );
};

export default Register;