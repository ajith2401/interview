import React, { useEffect, useRef } from 'react'

function UseRefHook() {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
    <label>enter your name</label>
      <input ref = {inputRef} type='text'/>
    </div>
  )
}

export default UseRefHook
