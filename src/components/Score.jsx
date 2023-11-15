/* eslint-disable react/prop-types */
function Score({scoreData}){
  console.log("In score here is data:",scoreData)
  const score = scoreData.score

  console.log(score);
  return(
    <div>
      <p>SCORE IS {score}</p>
    </div>
  )
}

export default Score;