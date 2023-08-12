import './App.css';
import chess from './componements/img/R.png'
import board from './componements/img/board.png'
import king from './componements/img/king.png'
import queen from './componements/img/queen.png'
import bishop from './componements/img/bishop.png'
import horse from './componements/img/horse.png'
import pawn from './componements/img/pawn.png'
import rook from './componements/img/rook.png'
function App() {
  return (
    <div className="App">
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
      <div className='intro'>
        <p>Chess is a board game for two players, called White and Black, each controlling an army of chess pieces in their color, with the objective to checkmate the opponent's king. It is sometimes called international chess or Western chess to distinguish it from related games, such as xiangqi (Chinese chess) and shogi (Japanese chess). The recorded history of chess goes back at least to the emergence of a similar game, chaturanga, in seventh century India. The rules of chess as they are known today emerged in Europe at the end of the 15th century, with standardization and universal acceptance by the end of the 19th century. Today, chess is one of the world's most popular games, played by millions of people worldwide.</p>
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg'></img>
      </div>
      <div className='pos'>
          <h1>Initial position</h1>
          <p>The pieces are set out as shown in the diagram and photo. Thus, on White's first rank, from left to right, the pieces are placed as follows: rook, knight, bishop, queen, king, bishop, knight, rook. Eight pawns are placed on the second rank. Black's position mirrors White's, with an equivalent piece on the same file. The board is placed with a light square at the right-hand corner nearest to each player. The correct positions of the king and queen may be remembered by the phrase "queen on her own color" (i.e. the white queen begins on a light square, and the black queen on a dark square).In competitive games, the piece colors are allocated to players by the organizers; in informal games, the colors are usually decided randomly, for example by a coin toss, or by one player concealing a white pawn in one hand and a black pawn in the other, and having the opponent choose.</p>
          <img src={board}/>
        </div>
      <h1 className='head'>About Chess pieces</h1>
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
      <button>Come and Play</button>
    </div>

  );
}

export default App;
