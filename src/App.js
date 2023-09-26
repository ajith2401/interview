import React from 'react';
import './App.css';
import InputName from './components/customHooks/InputName';

function User() {
  return (
   <div className='App'>
    <InputName/>
    </div>
  
  );
}

export default User; 

{ /*import ComponentA from './components/useReducerwithUseContext/componentA'
import ComponentB from './components/useReducerwithUseContext/ComponentB'
import ComponentC from './components/useReducerwithUseContext/ComponentC'


export const CountContext = React.createContext()
const initialState = 0;
const reducer = (state,action) =>{
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}  
function User() {
  const [count, dispatch] = useReducer(reducer,initialState)
  return (
   <CountContext.Provider value={{countState: count, countDispatch : dispatch}}>
   <div className='App'>
      <p>count  {count}</p>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
   </CountContext.Provider> 
  );
}

export default User; */}
