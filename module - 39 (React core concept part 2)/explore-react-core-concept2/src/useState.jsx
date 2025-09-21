import { useState } from "react"

export default function Special (){

    const [count , setCount] = useState(0);

    const handleIncrease = ()=>{
        const increaseCount = count + 1;
        setCount(increaseCount)
    }
    const handleDecrease = ()=>{
        const decreaseCount = count - 1;
        setCount(decreaseCount)
    }
    const handleReset = ()=>{
        const reset = 0;
        setCount(reset)
    }

    return (
        <div>
            <h2>Count : {count} </h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleReset}>Zero</button>
        </div>
    )
}