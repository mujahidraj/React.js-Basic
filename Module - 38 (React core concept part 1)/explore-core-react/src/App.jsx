
import './App.css'
import ToDo from './ToDo'

function App() {
  

  return (
    <>
      
      {/* <Student></Student>
      <Person name="Raj"></Person>
      <Person name="Mayad"></Person>
      <Person name="fidbi"></Person>
      <Dog></Dog>
      <Cat></Cat> */}

      {/* <Laptop brand = "HP"  model = "G7 845" price = "62000"></Laptop> */}

        <ToDo task = "Kapor Kacha" isDone={false} duration = "20 min" ></ToDo>
        <ToDo task = "Gosol" isDone={false} duration = "15 min" ></ToDo>
        <ToDo task = "Nasta" isDone={true} duration = "20 min" ></ToDo>
        <ToDo task = "Cha" isDone={true} duration = "10 min" ></ToDo>
        <ToDo task = "Ghumano" isDone={false} duration = "2 hr" ></ToDo>


     
    </>
  )
}

// const {brandName , modelName , priceNumber} = {brand : "HP" , model : "G7 845" ,price : 62000 }
 
// function Laptop (props){
//   return(
//     <div style={{
//       backgroundColor :"red",
//       padding: "20px",
//       borderRadius : "20px"

//     }}>
//       <h3>Brand : {props.brand}</h3>
//       <h4>Model : {props.model}</h4>
//       <p>Price : {props.price}</p>
//     </div>
//   )
// }





// const {name , grade} = {name :"Raina" , grade : 5}

// function Student (){
//   return (
//     <div>
//       <h3>Name : {name}</h3>
//       <p>Grade : {grade}</p>
//     </div>
//   )
// }





// function Person (props){
//   let name = "Moizuddin Mohammad Mujahid Rashid"
//   let age = 20;
//   let state = "newbie"
//   let isLearning = false
//   return (
//     <div>
//     <h3>Person name : {props.name}</h3>
//     <p>Age : {age}</p>
//     <p>State : {state}</p>
//     <p>Learning : {String(isLearning)}</p>
//     </div>
//   )
// }

// function Cat (){
//   return (
//     <div style={{
//       padding : "40px",
      
//       border : "2px solid  blue",
//       borderRadius : "20px"
//     }}>
//       <h3>name : Cat</h3>
//       <p>Age : 2 yrs</p>
//     </div>
//   )
// }

// function Dog(){
//   const dogTtext = {
//     fontSize : "40px",
//     fontColor : "blue"
//   }
//   return (
//     <div className='dog-div' style={dogTtext}>
//       <h3>Name : Puppy</h3>
//       <p>Age : 10yrs</p>
//     </div>
//   )
// }


export default App
