
import React from 'react'
import useCounter from './useCounter'

function CounterTwo() {
    const [count,increment,decrement,reset] = useCounter(0)
  return (
    <div>
    <h2>{count}</h2>
    <button onClick={increment}>inc</button>
    <button onClick={decrement}>decc</button>
    <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterTwo
