import React from 'react'
import king from '../img/king.png'
import queen from '../img/queen.png'
import bishop from '../img/bishop.png'
import horse from '../img/horse.png'
import pawn from '../img/pawn.png'
import rook from '../img/rook.png'

const Chesspieces = () => {
  return (
    <div className='chess_pieces'>
    <div className='piece'>
      <h1>Moves of the king</h1>
      <img src={king}/>
    </div>
    <div className='piece'>
      <h1>Moves of a queen</h1>
      <img src={queen}/>
    </div>
    <div className='piece'>
      <h1>Moves of a bishop</h1>
      <img src={bishop}/>
    </div>
    <div className='piece'>
      <h1>Moves of a knight</h1>
      <img src={horse}/>
    </div>
    <div className='piece'>
      <h1>Moves of a pawn</h1>
      <img src={pawn}/>
    </div>
    <div className='piece'>
      <h1>Moves of a rook</h1>
      <img src={rook}/>
    </div>
     </div>
  )
}

export default Chesspieces
