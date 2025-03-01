import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { useState } from 'react';

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {

  const [gameBoard,setGameBoard] = useState(initialBoard);

  const [gameTurns,setGameTurns] = useState([]);
  const [activePlayer,setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex,colIndex){

    setActivePlayer((prevActivePlayer) => {
      let newACPlayer = prevActivePlayer;
      newACPlayer = newACPlayer === 'X' ? 'O' : 'X';
      return newACPlayer;
    });

    setGameTurns((prevTurns) => {

      let currentPlayer = 'X';

      const UpdatedTurns = [
        // just for the logs
        {squere: {row : rowIndex, col: colIndex}, Player: {symbol : currentPlayer, }},
        ...prevTurns
      ]

      return UpdatedTurns;

    });

    setGameBoard((prvGameBoard) => {
      const newGameBoard = [...prvGameBoard.map(innerArray => [...innerArray])];
      newGameBoard[rowIndex][colIndex] = activePlayer;
      return newGameBoard;
  })

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player' >
         <Player name="Player 1" symbol="X" activePlayer = {activePlayer} />
         <Player name="Player 2" symbol="O" activePlayer = {activePlayer}/>
        </ol>
      <GameBoard onSelectSquare={handleSelectSquare}activePlayer = {activePlayer} board = {gameBoard}/>
      </div>
    <Log/>
    </main>
  )
}

export default App
