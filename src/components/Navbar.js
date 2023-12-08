import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const navStyles=({isActive})=>{
  return{
    fontWeight:isActive?"bold":"normal",
    textDecoration:isActive?"none":"underline"
  }
}
const Navbar = () => {
  return (
   <nav>
    
    {/* <Link to="/">Home</Link>
    <Link to="/about">About</Link> */}
    <NavLink style={navStyles} to="/">Home</NavLink>
    <NavLink style={navStyles} to="/about">About</NavLink>

   </nav>
  )
}

export default Navbar
