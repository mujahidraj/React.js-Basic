
import './App.css'

function App() {
  

  return (
    <>
      
      
      <Person name="Raj"></Person>
      <Person name="Mayad"></Person>
      <Person name="fidbi"></Person>
      <Dog></Dog>
      <Cat></Cat>
     
    </>
  )
}

function Person (props){
  let name = "Moizuddin Mohammad Mujahid Rashid"
  let age = 20;
  let state = "newbie"
  let isLearning = false
  return (
    <div>
    <h3>Person name : {props.name}</h3>
    <p>Age : {age}</p>
    <p>State : {state}</p>
    <p>Learning : {String(isLearning)}</p>
    </div>
  )
}

function Cat (){
  return (
    <div style={{
      padding : "40px",
      
      border : "2px solid  blue",
      borderRadius : "20px"
    }}>
      <h3>name : Cat</h3>
      <p>Age : 2 yrs</p>
    </div>
  )
}

function Dog(){
  const dogTtext = {
    fontSize : "40px",
    fontColor : "blue"
  }
  return (
    <div className='dog-div' style={dogTtext}>
      <h3>Name : Puppy</h3>
      <p>Age : 10yrs</p>
    </div>
  )
}


export default App
