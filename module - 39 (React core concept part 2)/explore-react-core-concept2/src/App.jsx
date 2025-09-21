import './App.css'
import Batsmen from './Batsmen'
// we simply import the exported function from the counter.jsx file . and set a name called setCounter 
import SetCounter from './counter'

function App() {

  function handleClick (){
    alert("Moizuddin Mohammad Mujahid Rashid")
  }

  const handleClick2 =()=> {
    alert("status " + "true")
  }

  const handleWater = (num) => {
    alert("Water level is " + num)
  }

  return (

    <>
    <Batsmen></Batsmen>
      <SetCounter></SetCounter>
      <h1>Vite + React</h1>
      {/* creating button  */}
    <button onClick={handleClick}>
      My Name
    </button>

    {/* creating fucntional button rules two */}
    <button onClick={function handleAge(){
      alert("25 yrs")
    }}>My age</button>

    {/* button using arrow function */}
    <button onClick={handleClick2}> My status</button>

    {/* arrow function inside the onclick */}
    <button onClick={()=>alert("15k BDT")}>
      My pocket Money
    </button>

    {/* calling function with a parameter  */}

    <button onClick={()=>{handleWater(70)}}>
      My Water level
    </button>
        
    </>
  )
}

export default App
