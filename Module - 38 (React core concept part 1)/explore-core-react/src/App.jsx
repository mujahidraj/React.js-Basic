
import './App.css'

function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      
     
    </>
  )
}

function Person (){
  let name = "Moizuddin Mohammad Mujahid Rashid"
  let age = 20;
  let state = "newbie"
  let isLearning = false
  return (
    <div>
    <h3>Person name : {name}</h3>
    <p>Age : {age}</p>
    <p>State : {state}</p>
    <p>Learning : {String(isLearning)}</p>
    </div>
  )
}

export default App
