import React from 'react'
import { userContext, channelContext } from './hook-useContextA'
export default function HookUseContextC() {

    return (
        <div>

        <userContext.Consumer>
        {
            user =>{
                return (
                    <channelContext.Consumer>
                    {
                        channel =>{
                            return <div>hello {user} from {channel}</div>
                        }
                    }
                    </channelContext.Consumer>
                )
            }
        }
        </userContext.Consumer>
        
        </div>

    )
 
}

// please refer the below code
// import React,{useContext} from 'react'
// import { userContext, channelContext } from './hook-useContextA'
// export default function HookUseContextC() {

//     const user =  useContext(userContext)
//     const channel = useContext(channelContext)
//     return (
//         <div>

//         {user} {channel}
//         </div>

//     )
 
// }
