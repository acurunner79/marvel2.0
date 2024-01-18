import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/topnav.css'

const TopNav = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-link-container'>
            <Link to='/'>
                <li id='navbar-link'>Home</li>
            </Link>
            <Link to='/contact'>
                <li id='navbar-link'>Contact</li>
            </Link>
        </ul>
    </nav>
  )
}

export default TopNav