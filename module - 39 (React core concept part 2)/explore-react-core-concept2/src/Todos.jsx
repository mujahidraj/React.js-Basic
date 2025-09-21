import { use } from "react"
import DisplayTodo from "./todocom"

export default function Todos ({list}){
    // use keyword is a function of react that brings the data from the app.jsx
    const newList = use (list);
    return (
        <div>
            {
                // passing key is for the unique id
                newList.map(lists=><DisplayTodo key={lists.id} list ={lists}></DisplayTodo>)
            }
        </div>
    )
}