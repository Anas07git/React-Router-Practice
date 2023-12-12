import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

const navStyles=({isActive})=>{
  return{
    fontWeight:isActive?"bold":"normal",
    textDecoration:isActive?"none":"underline"
  }
}
const Navbar = () => {
  const auth= useAuth()
  return (
   <nav className='nav-main'>
    
    {/* <Link to="/">Home</Link>
    <Link to="/about">About</Link> */}
    <NavLink style={navStyles} to="/">Home</NavLink>
    <NavLink style={navStyles} to="/about">About</NavLink>
    <NavLink style={navStyles} to="/products">Products</NavLink>
    <NavLink style={navStyles} to="/users">Users</NavLink>
    <NavLink style={navStyles} to="/profile">Profile</NavLink>
    {
      !auth.user &&
      <NavLink style={navStyles} to="/login">Login</NavLink>
    }

   </nav>
  )
}

export default Navbar
