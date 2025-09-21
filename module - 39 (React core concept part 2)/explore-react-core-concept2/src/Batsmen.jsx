import { useState } from "react"

export default function Batsmen (){
    const [runs , setRuns] = useState(0)
    const [fours,setFours] =useState(0)
    const handleSingle =() =>{
        const newSingle = runs + 1;
        return setRuns(newSingle)
    }

    const handleDouble =() =>{
        const newDouble = runs + 2;
        return setRuns(newDouble)
    }
    const handleFour =() =>{
        const newFour = runs + 4;
        const fourCount = fours +1;
         setRuns(newFour)
         setFours(fourCount)
    }
    const handleSix =() =>{
        const newSix = runs + 6;
        return setRuns(newSix)
    }

    return (
        <div>
            <h1>Batsman : Tamim Iqbal</h1>
            
            {
                runs>50 && runs<100? <li>Congratulation you scored 50+ runs!</li> : runs>100 && <li>Congratulation you score 100+ runs!</li>
            }
            <h2>Run : {runs} </h2>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleFour}>Four <small>{fours}</small></button>
            <button onClick={handleSix}>Six</button>
        </div>
    )


}