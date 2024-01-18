import React, { useState } from 'react'
import RightNav from './RightNav'
import '../../styles/hamburger.css'

const Hamburger = () => {
  // State to control the open and close of hamburger
  const [open, setOpen] = useState(false)

  //Handleclick for the hamburger
  const handleClick = () => {
      setOpen(!open)
  }

  const isOpen = () => {
      return (
          <>
              
              <div className='hamburger-container open' onClick={handleClick}>
                  <div className='hamburger-icon open'></div>
                  <div className='hamburger-icon open'></div>
                  <div className='hamburger-icon open'></div>
              </div>
              <div className='right-nav open'>
                  <RightNav handleClick={handleClick}/>
              </div>
          </>
      )

  }

  const isClosed = () => {
      return (
          <>
              <div className='hamburger-container' onClick={handleClick}>
                  <div className='hamburger-icon'></div>
                  <div className='hamburger-icon'></div>
                  <div className='hamburger-icon'></div>
              </div>
              <div className='right-nav'>
                  <RightNav handleClick={handleClick}/>
              </div>
          </>
      )
  }

  return(
      open ? isOpen() : isClosed()
  )
}

export default Hamburger