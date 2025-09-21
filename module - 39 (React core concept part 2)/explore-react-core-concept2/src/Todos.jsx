import { use } from "react"
import DisplayTodo from "./todocom"

export default function Todos ({list}){
    const newList = use (list);
    return (
        <div>
            {
                newList.map(lists=><DisplayTodo key={lists.id} list ={lists}></DisplayTodo>)
            }
        </div>
    )
}