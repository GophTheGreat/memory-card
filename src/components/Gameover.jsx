/* eslint-disable react/prop-types */
export default function Gameover({scoreData}){
  const score = scoreData.score;
  return (
    <>
      <h1>You lose!</h1>
      <h2>Your final score was {score}</h2>
    </>
  )
}