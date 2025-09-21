    export default function UserInfo({users}){
        console.log(users);
        
    return(
        <div>
            <h2>User Name : {users.name} </h2>
            <h4>User Email : {users.email}</h4>
        </div>
    )
}