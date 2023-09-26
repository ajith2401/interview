import React,{useReducer} from 'react'

const intialState = {
    firstCounter : 0,
    secondCounter : 10
}
const reducer = (state, action) =>{
    switch(action.type){
        case "Inc":
            return {...state,firstCounter : state.firstCounter +action.value};
        case "Dec":
            return {...state,firstCounter: state.firstCounter-action.value};
        case "Inc2":
            return {...state,secondCounter : state.secondCounter +action.value};
        case "Dec2":
            return {...state,secondCounter: state.secondCounter-action.value};
        case "Reset":
            return intialState;
        default:
            return state;
    }

}

function Counter2() {
    const [count, dispatch] = useReducer(reducer, intialState)
  return (
    <div>
    <p>count : {count.firstCounter}</p>
    <p>sec count : {count.secondCounter}</p>
      <button onClick={()=> dispatch({type:'Inc', value: 1})}>Inc</button>
      <button onClick={()=> dispatch({type:'Dec', value:1})}>Dec</button>


      <button onClick={()=> dispatch({type:'Inc', value: 5})}>Inc 5</button>
      <button onClick={()=> dispatch({type:'Dec', value:5})}>Dec 5</button>
      <button onClick={()=> dispatch({type:'Reset'})}>Reset</button>

      <div>
     
      <button onClick={()=> dispatch({type:'Inc2', value: 1})}>Inc2</button>
      <button onClick={()=> dispatch({type:'Dec2', value:1})}>Dec2</button>
      </div>
    </div>
  )
}

export default Counter2
