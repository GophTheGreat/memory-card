/* eslint-disable react/prop-types */
import { touhous, groups } from "../data";
import "../styles/Score.css"

export default function Score({scoreData}){
  console.log("In score here is data:",scoreData)
  const score = scoreData.score
  const lengths = {
    main: touhous.filter(card => card.groupShort === 'main').length,
    eosd: touhous.filter(card => card.groupShort === 'eosd').length,
    pcb: touhous.filter(card => card.groupShort === 'pcb').length,
    in: touhous.filter(card => card.groupShort === 'in').length,
    pofv: touhous.filter(card => card.groupShort === 'pofv').length,
    mof: touhous.filter(card => card.groupShort === 'mof').length,
    sa: touhous.filter(card => card.groupShort === 'sa').length,
    ufo: touhous.filter(card => card.groupShort === 'ufo').length,
    td: touhous.filter(card => card.groupShort === 'td').length,
    ddc: touhous.filter(card => card.groupShort === 'ddc').length
  }

  const mainStyle = {
    backgroundImage: groups[0].backgroundImage,
    color: '#fafafa00', 
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    textShadow: 'none',
  };


  console.log(score);
  return(
    <div>
      <div className="generalScoreWrapper">
        <p className="generalScore"><b>Overall Score is:  {score} / {touhous.length}</b></p>
      </div>
      <div className="groupScoreWrapper">
        {groups.map(group => (
          group.shortHand === 'main' ? 
          <p key={group.shortHand} className="groupScore" style={mainStyle}>{group.scoreName}: {scoreData[`groupScore${group.shortHand}`]} / {lengths[group.shortHand]}</p>
          :
          <p key={group.shortHand} className="groupScore" style={{color:group.color}}>{group.scoreName}: {scoreData[`groupScore${group.shortHand}`]} / {lengths[group.shortHand]}</p>
        ))}
      </div>

    </div>
  )
}