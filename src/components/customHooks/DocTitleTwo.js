import React, { useState } from 'react'
import useDocTitle from "./useDocTitle"

function DocTitleTwo() {
    const [count,setCount] = useState(0)
    useDocTitle(count)
  return (
    <div>
    <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>inc custom hook</button>
    </div>
  )
}

export default DocTitleTwo
