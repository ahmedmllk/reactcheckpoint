import React from 'react'
import chess from '../img/R.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
          <img src={chess} alt="" />
          <h1>chess.com</h1>
          <ul>
            <li>Home</li>
            <li>Game</li>
            <li>History</li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
