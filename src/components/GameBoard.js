import {useState} from 'react';
import  Square from './Square';
const GameBoard=()=>{
    const [currentPlayer, setCurrentPlayer]=useState("X");
    const [gameActive, setGameActive]=useState(true);
    const [winMsg, setwinMsg]=useState(false);
    const [drawMsg, setdrawMsg]=useState(false);
    const [gameState, setGameState]=useState([
     {value: null},
     {value: null},
     {value: null},
     {value: null},
     {value: null},
     {value: null},
     {value: null},
     {value: null},
     {value: null},
    ]);
  const [winningConditions,setWinningConditions]=useState([
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
  ]);
    const executeMove=index=>{
      let newGameState = gameState;
      if (newGameState[index].value === null && gameActive===true)
      {
      newGameState[index].value = currentPlayer;
      setGameState(newGameState);
      let nextPlayer=currentPlayer==="X"?"0":"X";
        setCurrentPlayer(nextPlayer);
      let roundDraw=0;
      for(let i=0;i<9;i++)
      {
        if(gameState[i].value!==null)
           roundDraw+=1;
      }
      if(roundDraw===9)
      {
        
        setGameActive(false);
        setdrawMsg(true);
        
      }
      if(checkWinOrDraw ())
      {
        
        setGameActive(false);
        setwinMsg(true);
        setdrawMsg(false);
      }
      console.table(gameState);
     }
    }
    const handleClick=()=>{
      setGameState([
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
       ]);
       setGameActive(true);
       setwinMsg(false);
       setdrawMsg(false);
       setCurrentPlayer("X");
    }
    const checkWinOrDraw =()=>{
      let roundWon=false;
      for(let i=0;i<winningConditions.length;i++)
      {
          const condition =winningConditions[i];
          let a=gameState[condition[0]].value;
          let b=gameState[condition[1]].value;
          let c=gameState[condition[2]].value;
          if(a===null || b===null || c===null)
          {
              continue;
          }
          if(a===b && b===c)
              {
                  roundWon=true;
                  break;
              }
      } 
      return roundWon;
    }
    return (
       
        <>
          <div className="col-md-12 col-12 text-center">
          <button onClick={handleClick}>RESET GAME</button>
               <h2>Current player:{currentPlayer}</h2>
               
          </div>
          <div className="bg-white col-md-6 
          offset-md-3 gameBoard shadow-sm row p-4">
            {gameState.map((product,key)=>(
               <Square key={key} index={key}
               executor={executeMove} gameState={gameState}/>  
            ))}
          </div>
          <div className="col-md-12 col-12 text-center">
                { winMsg===true?<h2>Player:{currentPlayer==="0"?"X":"0"} has Won!</h2>:<p></p>}
                { drawMsg===true?<h2>Draw!</h2>:<p></p>}
          </div>
       
        </>
    );
}
export default GameBoard;