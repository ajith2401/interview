import React , {useReducer} from 'react'

const intialState = 0

const reducer = (state,action) =>{

    switch (action){
        case 'Increment':
            return state+1
        case 'Decrement':
            return state -1
        case 'Reset':
                return intialState
        default:
            return state

    }
    
  
}
function Counter1() {

  const [count,dispatch]=useReducer(reducer, intialState)
  return (
    <div>
    <p>count {count}</p>
      <button onClick={()=>{dispatch('Increment')}}>Increment</button>
      <button onClick={()=>{dispatch('Decrement')}}>Decrement</button>
      <button onClick={()=>{dispatch('Reset')}} >Reset</button>
    </div>
  )
}

export default Counter1
