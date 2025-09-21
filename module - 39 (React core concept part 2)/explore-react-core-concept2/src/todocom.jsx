export default function DisplayTodo ({list}){
    console.log(list);

    const newStyle={
        color : "red",
    }
    
    return (
        
        <div>
            <h3>Todo Title : {list.title}</h3>
            {
                list.completed===true? <h4>Congratulation ! Task Completed...</h4> : <h4 style={newStyle}>Alas! Task not completed . </h4>
               
            }
            
        </div>
    )
}