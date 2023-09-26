import React from 'react'
import HookUseContextB from './hook-useContextB.js'


export  const userContext = React.createContext()
export const channelContext = React.createContext()
function HookUseContextA() {
  return (
    <div>
    <userContext.Provider value={'ajithkumar'}>
    <channelContext.Provider value={'ajithchannel'}>
      <HookUseContextB/>
    </channelContext.Provider>
    </userContext.Provider>
    </div>
  )
}

export default HookUseContextA;
