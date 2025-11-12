import { useState } from "react";


const ControlledForm = () => {

  const [formData , setFormData] = useState({
    "email" : "",
    "password" : ""
  })
  const [error , setError] = useState("")


  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!formData.toLocaleUpperCase){
      setError("Fuck man ! why no upper case.")
    }
    else {
      setError("perfect")
    }
    
  }

  const handleFormOnChange =(e)=>{
    console.log(e.target.value);
    setFormData(e.target.value)
    if(formData.length <=8){
      setError("Who the hell are you? write the 8 length password.")
    }
    else{
      setError("good job! go ahead.")
    }
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Your Email" required />
        <br />
        <input type="password" name="password" onChange={handleFormOnChange} defaultValue={formData.password} placeholder="Your Password" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p><small>{error}</small></p>
    </div>
  );
};

export default ControlledForm;