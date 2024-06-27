import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='websiteName'>
            <NavLink to='/'>Hayk.soft</NavLink>
        </div>
        <div className='menuPart'>
            <NavLink className='navItem' to='/'>Home</NavLink>
            <NavLink className='navItem' to='/projects'>Projects</NavLink>
            <NavLink className='navItem' to='/contact'>Contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar;