/* eslint-disable react/prop-types */
import { touhous
 } from "../data";
function Score({scoreData}){
  console.log("In score here is data:",scoreData)
  const score = scoreData.score

  console.log(score);
  return(
    <div>
      <p>SCORE IS {score} / {touhous.length}</p>
    </div>
  )
}

export default Score;