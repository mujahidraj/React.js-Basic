import React, { useState } from 'react';

const ControlledForm = () => {

  const [password , setPassword] = useState("")

  const handleControlledForm = (e)=>{
    e.preventDefault()
    console.log("hello world");
    
  }

  const handlePasswordChange = (e) =>{
    console.log(e.target.value);
    
  }

  return (
    <div>
      <form onSubmit={handleControlledForm}>
        <input type="email" name="email" placeholder='Your Email' required /><br />
        <input type="password" name="password"  onChange={handlePasswordChange} defaultValue={password} placeholder='Your Password' required />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledForm;