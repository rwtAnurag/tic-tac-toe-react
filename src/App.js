import 'bootstrap/dist/css/bootstrap.css'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
     <Header/>
     <GameBoard/>
    </div>
  );
}

export default App;
