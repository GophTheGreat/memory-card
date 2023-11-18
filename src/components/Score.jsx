/* eslint-disable react/prop-types */
import { touhous, groups } from "../data";
import "../styles/Score.css"

export default function Score({scoreData}){
  const score = scoreData.score
  const lengths = {};
  groups.map(group => {
    lengths[group.shortHand] = touhous.filter(card => card.groupShort === group.shortHand).length
  })

  //The protagonists get special gradient text
  const mainStyle = {
    backgroundImage: groups[0].backgroundImage,
    color: '#fafafa00', 
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    textShadow: 'none',
  };

  console.log(score);
  return(
    <div className="score">
      <div className="generalScoreWrapper">
        <p className="generalScore"><b> Character Score - {score} / {touhous.length}</b></p>
      </div>
      <div className="groupScoreWrapper">
        {groups.map(group => (
          // The protagonists get gradient text
          group.shortHand === 'main' ? 
          <p key={group.shortHand} className="groupScore" style={mainStyle}>{group.scoreName} - {scoreData[`groupScore${group.shortHand}`]} / {lengths[group.shortHand]}</p>
          :
          <p key={group.shortHand} className="groupScore" style={{color:group.color}}>{group.scoreName} -  {scoreData[`groupScore${group.shortHand}`]} / {lengths[group.shortHand]}</p>
        ))}
      </div>

    </div>
  )
}