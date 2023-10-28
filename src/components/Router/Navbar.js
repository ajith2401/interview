import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const NavLinks = ({isActive}) =>{
        return {
            fontWeight : isActive ? "bold" : "normal",
            textDecoration : isActive ? "none" : "underline"
        }

    }
  return (
    <nav className='primary-nav'>
      <NavLink style={NavLinks} to='/'>Home</NavLink>
      <NavLink style={NavLinks} to='/about'>About</NavLink>
      <NavLink style={NavLinks} to='/contact'>Contact</NavLink>
      <NavLink style={NavLinks} to='/posts'>Posts</NavLink>
      <NavLink style={NavLinks} to='/products'>Products</NavLink>
      <NavLink style={NavLinks} to='/profile'>profile</NavLink>
    </nav>
  )
}

export default Navbar
