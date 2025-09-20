export default function ToDo ({task,isDone,duration}){
    if(isDone === true){
        return <li><b>{task}</b> Work Done successful within <b>{duration}</b></li>
    }
    else {
        return <li><b>{task}</b> Should be complete with in <b>{duration}</b></li>
    }
}