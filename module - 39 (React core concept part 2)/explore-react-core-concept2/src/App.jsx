import { Suspense } from 'react'
import './App.css'
import Batsmen from './Batsmen'
// we simply import the exported function from the counter.jsx file . and set a name called setCounter 
import SetCounter from './counter'
import Users from './User'
import Todos from './Todos'
import Special from './useState'
import ToggleMessage from './toggleTrue'
import CompanyDetails from './company'



// getting the data from the api 
// const userDetails = async() =>
// {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// const TodoList = async () =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   return res.json();
// }

const company=async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  // callign the function where the api is called 
  // const detailed = userDetails();
  // const todo = TodoList();
  const companyDetails = company();



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
    <Suspense fallback={"Loading..."}>
      <CompanyDetails companyDetail={companyDetails}></CompanyDetails>
    </Suspense>
    {/* <ToggleMessage></ToggleMessage> */}

    {/* <Special></Special> */}
  {/* the component is placed inside the suspense because there would be loading period since this data will come from a server side . for this loading period we are going to put a message toward the client side. the message should be written inside the fullback function */}
    {/* <Suspense fallback={<h1>Users are loading please wait for a while .....</h1>}> */}
      {/* user will get the data from the called variable . which is declared first with the detailed function which hold the api  */}
      {/* <Users detailed = {detailed}></Users> */}
    {/* </Suspense> */}


    {/* <Suspense fallback={<h2>Todo List is wating ....</h2>}>
    <Todos list={todo}></Todos>
    </Suspense> */}


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
