import { use } from "react";
import UserInfo from "./UserInfo";


export default function Users ({detailed}){
const details = use (detailed);
console.log(details);

    return (
        <div>
            {details.map(users => <UserInfo key={users.id} users={users}></UserInfo>)}
            
        </div>
    )
}