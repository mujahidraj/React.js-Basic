import UseInputFieldHook from '../../Hooks/UseInputFieldHook';

const HookForm = () => {

  const [name , setName] = UseInputFieldHook('')
  const [email ,setEmail] = UseInputFieldHook('')
  const [password , setPassword] = UseInputFieldHook('')

  const handleOnSubmit =(e)=>{
    e.preventDefault()
    console.log("Name :", name , "Email :" , email , "Password" , password);
    

  }

  return (
    <div> 
      <form onSubmit={handleOnSubmit}>
        <input type="text" onChange={setName} defaultValue={name} name="name" placeholder='Your name' />
        <br />
        <input type="email" name="email" onChange={setEmail} defaultValue={email} placeholder='Your Email' />
        <br />
        <input type="password" name="password" onChange={setPassword} defaultValue={password} placeholder='Your Paassword' />
        <br />
        <input type="submit" value="Submit" />
      </form>
      
    </div>
  );
};

export default HookForm;