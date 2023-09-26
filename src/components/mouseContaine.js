import React, { useState } from 'react'
import HookUseEffectMouse from './hook-useEffect-mouse'

function MouseContaine() {
    const [display , setDisplay] =useState(true)
  return (
    <div>
     <button onClick={()=> setDisplay(!display)}>toggle display</button>
     {display&& <HookUseEffectMouse/>}
    </div>
  )
}

export default MouseContaine
