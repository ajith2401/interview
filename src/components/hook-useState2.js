import React,{useState} from "react";

function IncrementDec(){

    const initialCount = 0;
    const [count,setCount] = useState(initialCount)

   return(
    <div>
     <button onClick={()=>setCount(prevCount=> prevCount-1)}>dec</button>
    <p>count:{count}</p>
    <button onClick={()=>setCount(prevCount=> prevCount+1)}>inc</button>

    </div>
   )

}

export default IncrementDec;