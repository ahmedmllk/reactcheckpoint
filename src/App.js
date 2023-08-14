import './App.css';



import Chesspieces from './componements/component/Chesspieces';
import Navbar from './componements/component/Navbar';
import Intro from './componements/component/Intro';
import Pos from './componements/component/Pos';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Pos/>
      <h1 className='head'>About Chess pieces</h1>
      <Chesspieces/>
      <button>Come and Play</button>
    </div>

  );
}

export default App;
