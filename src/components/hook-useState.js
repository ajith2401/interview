import React,{useState} from "react";

function CounterByUseState(){
    const [count, setCount] = useState(0)
    return(
        <div>
        <p>useState counter : {count}</p>
        <button onClick={()=>setCount(count+1)}> click me</button>
        </div>
    )
}

export default CounterByUseState;