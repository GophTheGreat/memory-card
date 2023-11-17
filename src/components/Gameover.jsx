/* eslint-disable react/prop-types */
import '../styles/Gameover.css'
export default function Gameover({scoreData, resetGame}){
  const score = scoreData.score;
  return (
    <div className="gameOver">
      <h1>You lose!</h1>
      <h2>Your final score was {score}</h2>
      <button onClick={resetGame}>Play again?</button>
    </div>
  )
}