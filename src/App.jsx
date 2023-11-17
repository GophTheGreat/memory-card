import { useState } from "react";
import "./styles/App.css";
import Cards from "./components/Cards";
import Score from "./components/Score";
import Gameover from "./components/Gameover";
import draw from "./utils";
import { hasCardBeenPickedBefore } from "./utils";
import { groups } from "./data";

function App() {

  const numCards = 10;

  const initialDraw = draw(numCards, []); //draw(numCards);
  let content;
  let scoreObject = {}

  groups.map(group => {
    scoreObject.score = 0;
    scoreObject[`groupScore${group.shortHand}`] = 0;
  })

  const [pickedCards, setPickedCards] = useState([])
  const [cards, setCards] = useState(initialDraw)
  const [scoreData, setScoreData] = useState({...scoreObject});
  const [isGameOver, setIsGameOver] = useState(false);

  function handleClick(card){
    //First verify whether the card has been picked before
    //End game if true
    if(hasCardBeenPickedBefore(card, pickedCards)){
      setIsGameOver(true);
      return;
    }

    //If card has not been picked, update score
    //and draw new cards
    setScoreData((oldData) => {
      let newScore = {...oldData}

      const groupScoreKey = `groupScore${card.groupShort}`;
      newScore[groupScoreKey] += 1;
      newScore.score += 1;
      
      return newScore;
    });

    setPickedCards(prevCards => {
      const newCards = [...prevCards, card];
      console.log("Picked cards are: ", newCards);
      return newCards;
    });
    setCards(draw(numCards, pickedCards))
  }

  function resetGame() {
    setScoreData({...scoreObject})
    setPickedCards([]);
    setCards(draw(numCards, []));
    setIsGameOver(false);
  }

  console.log(isGameOver);
  if(isGameOver === false){
    content = 
      cards.map(card => (
        <Cards key={card.id} card={card} onClick={handleClick}/>
      ))
  } else {
    content = 
      <Gameover scoreData={scoreData} resetGame={resetGame}/>
  }
  console.log(content);

  return (
    <>
    <header>
      <h1>Touhou Memory Game</h1>
      <h3>Don&apos;t ever pick a card more than once. Try to score as high as you can!</h3>
      <hr></hr>
      <Score scoreData={scoreData}/>
    </header>
    <main>
     {content}
    </main>

    </>
  );
}

export default App;