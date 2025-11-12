import React, { useRef } from 'react';

const UncontrolledForm = () => {

  const emailRef = useRef("")

  const passwordRef = useRef("")

  const handleSubmit =(event)=>{
    event.preventDefault()
    console.log(emailRef.current.value);
  console.log(passwordRef.current.value);
  
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" ref={emailRef} />
        <br />
        <input type="password" ref={passwordRef}  />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default UncontrolledForm;