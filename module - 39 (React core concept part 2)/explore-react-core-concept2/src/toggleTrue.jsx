import { useState } from "react";

export default function ToggleMessage (){
    const [toggle , settoggle] = useState("");
    
    const handleVisible =()=>{
        const newMessage = "hello ! React Learner..." ;
        settoggle(newMessage)
    }

    const handleHidden =()=>{
        const noMessage = "";
        settoggle(noMessage)
    }
    return(
        <div>
            <h3>{toggle}</h3>
            <button onClick={handleVisible}>Visible</button>
            <button onClick={handleHidden}>Hidden</button>
        </div>
    )
}