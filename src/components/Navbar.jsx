import React from 'react'
import '../App.css'
function Navbar() {
  return (
    <div className='navbar-container'>
          <div className="logo">
              Todo
          </div>
          <div className="nav-items">
              <div className='nav-item'>About</div>
              <div className='nav-item'>Github</div>
          </div>
    </div>
  )
}

export default Navbar
