import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/rightnav.css'

const RightNav = () => {
  return (
    <div>
      <nav id='right-nav'>
        <ul className='right-nav-links-container'>
            <Link to='/'>
                <li id='right-nav-link'>Home</li>
            </Link>
            <Link to='/contact'>
                <li id='right-nav-link'>Contact</li>
            </Link>

        </ul>
    </nav>
    </div>
  )
}

export default RightNav