import React from 'react'
import board from '../img/board.png'
const Pos = () => {
  return (
    <div className='pos'>
        <h1>Initial position</h1>
        <p>The pieces are set out as shown in the diagram and photo. Thus, on White's first rank, from left to right, the pieces are placed as follows: rook, knight, bishop, queen, king, bishop, knight, rook. Eight pawns are placed on the second rank. Black's position mirrors White's, with an equivalent piece on the same file. The board is placed with a light square at the right-hand corner nearest to each player. The correct positions of the king and queen may be remembered by the phrase "queen on her own color" (i.e. the white queen begins on a light square, and the black queen on a dark square).In competitive games, the piece colors are allocated to players by the organizers; in informal games, the colors are usually decided randomly, for example by a coin toss, or by one player concealing a white pawn in one hand and a black pawn in the other, and having the opponent choose.</p>
        <img src={board}/>
    </div>
  )
}

export default Pos
