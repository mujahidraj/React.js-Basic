import { use } from "react";


export default function Users ({detailed}){
const details = use (detailed);
console.log(details);

    return (
        <div>
            <h2>User Name: {details[1].name} </h2>
            <h3>User Email : {details[1].email}</h3>
        </div>
    )
}