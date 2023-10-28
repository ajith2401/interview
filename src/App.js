import React from 'react';
import './App.css';
import Home from './components/Router/Home';
import About from './components/Router/About';
import Contact from './components/Router/Contact';
import Posts from './components/Router/Posts';
import Navbar from './components/Router/Navbar';
import { Routes , Route } from 'react-router-dom';
import OrderSummary from './components/Router/OrderSummary';
import NoPage from './components/Router/NoPage';
import Products from './components/Router/Products';
import NewProducts from './components/Router/NewProducts';
import FeaturedProducts from './components/Router/FeaturedProducts';
import Users from './components/Router/Users';
import UserDetails from './components/Router/UserDetails';
import Profile from './components/Router/Profile';
function User() {
  return (
    <div>
    <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='about' element={<About/>}></Route>
   <Route path='contact' element={<Contact/>}></Route>
   <Route path='posts' element={<Posts/>}></Route>
   <Route path='order-summary' element={<OrderSummary/>}></Route>
   <Route path='products' element={<Products/>}>
    <Route index element={<FeaturedProducts/>} />
      <Route path='featured' element={<FeaturedProducts/>}/>
      <Route path='new' element={<NewProducts/>}/>
   </Route>
   <Route path='users' element={<Users/>}>
      <Route path=':userID' element={<UserDetails/>}></Route>
   </Route>
   <Route path='*' element={<NoPage/>}></Route>
   <Route path='profile' element={<Profile/>}></Route>
   </Routes>

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
