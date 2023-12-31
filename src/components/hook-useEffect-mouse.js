import React, { useEffect, useState } from 'react'

function HookUseEffectMouse() {
    const [x,setX] =useState(0)
    const [y,setY] =useState(0)
    const logMousePosition = e =>{
       console.log('mouse event') 
       setX(e.clientX)
       setY(e.clientY)
    }
    useEffect(()=>{
        console.log(`use effect called`)
        window.addEventListener(`mousemove`,logMousePosition)
        return () =>{
          console.log("unmounting code")
          window.removeEventListener(`mousemove`,logMousePosition)
        }
    },[])
  return (
    <div>
     hooks X = {x} Y = {y}
    </div>
  )
}

export default HookUseEffectMouse;
