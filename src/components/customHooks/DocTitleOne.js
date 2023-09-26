import React, { useEffect, useState } from 'react'

function DocTitleOne() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
    document.title = `count ${count}`
    },[count])
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>inc</button>
    </div>
  )
}

export default DocTitleOne
