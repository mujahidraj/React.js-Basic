
// importing the built in useState from the react 
import { useState } from "react"

export default function SetCounter () {
    // to use the usestate .. we have to destructure first . for this we have to set a initial value of the useState . and two destructure value .  here first one is the value and second one is the function . so for this we have to use this function to initiate our works .
    const [count , setCount] = useState(0)


    const handleCount =()=>{
        // we cant add ++ to the setcount because this a function not the variable . so we need to pass the return value to the setcount  
        const newCount = count+1;
        return setCount(newCount)
    }
    // setting styling using object . we have to declare a object with the style and then we simple put the object name in the style tag using the curly bracket because we are gonna put this dynamically 
    const styling = {
        border : "solid 2px red"
    }
    return(
        <div style={styling}>
            <h3>counter :{count} </h3>
            <button onClick={handleCount}>Click to Increse</button>
        </div>
    )
};