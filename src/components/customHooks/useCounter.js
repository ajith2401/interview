import { useState } from 'react'

function useCounter(initialVal) {
    const [count, setCount] = useState(initialVal)
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(initialVal)
    }
  return [count,increment,decrement,reset]
}

export default useCounter
