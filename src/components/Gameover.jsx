/* eslint-disable react/prop-types */
import { groups, touhous } from '../data';
import '../styles/Gameover.css'
import Cards from './Cards';

export default function Gameover({scoreData, resetGame, isWin, pickedCards}){
  const score = scoreData.score;

  return (
    <div className="gameOver">
      {isWin === true ? 
      <h1>You win!</h1> 
      : 
      <>
        <h1>You lose!</h1>
        <h2>Your final score was {score}</h2>
      </>
      }
      <button onClick={resetGame}>Play again?</button>
      <div className="scrollingCardsWrapper">
        {groups.map(group => (
          <div className="scrollingCardGroup" key={group.shortHand}>
            {touhous
              .filter(card => card.groupShort === group.shortHand)
              .map(card => (
                <div className="endCardWrapper" key={card.id}>
                  {pickedCards.includes(card) ? 
                    <Cards card={card}></Cards>
                    : 
                    <div className="dimmed">
                      <Cards card={card}></Cards>
                    </div>
                  }
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
