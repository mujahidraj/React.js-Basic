export default function DisplayCompany ({list}){
    return (
        <div>
            <h1>Name :{list.name} </h1>
            <h2>City : {list.address.city}</h2>
            <h3>Company : {list.company.name}</h3>
        </div>
    )
}