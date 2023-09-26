import React, { useState, useEffect } from "react";

function CounterByUseEffect(){
    const [count , setCount] = useState(0)
    const [name,setName] = useState('')
    useEffect(()=>{
  
        console.log(`use effrct updationg doc titile`)
        document.title = `you clicked ${count} times`
 
        
    },[count])
    return(
        <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=> setCount(count+1)}>use Effect {count}</button>
        </div>
    )
}

export default CounterByUseEffect;