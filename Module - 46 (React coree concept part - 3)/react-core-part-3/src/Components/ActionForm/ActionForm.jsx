import React from 'react';

const ActionForm = () => {

  const handleFormAction =(formData)=>{
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    
  }

  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" name="name" placeholder='Your Name' /><br />
        <input type="email" name="email" placeholder='you email' /><br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ActionForm;