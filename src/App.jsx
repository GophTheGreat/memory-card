import { useState } from "react";
import "./styles/App.css";
import Cards from "./components/Cards";
import Score from "./components/Score";
import Gameover from "./components/Gameover";
import draw from "./utils";
import { hasCardBeenPickedBefore } from "./utils";
import { touhous, groups } from "./data";

function App() {

  const numCards = 10;

  const testDraw = [...touhous] //for debugging
  testDraw.pop();

  let content;
  let scoreObject = {}
  scoreObject.score = 0;
  groups.map(group => {
    scoreObject[`groupScore${group.shortHand}`] = 0;
  })

  const [pickedCards, setPickedCards] = useState([])
  const [cards, setCards] = useState(draw(numCards, pickedCards))
  const [scoreData, setScoreData] = useState({...scoreObject});
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

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

       //Also end game if you achieve max score 
      if(newScore.score === touhous.length){
        setIsGameOver(true);
        setIsWin(true);
      }
      
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
    setIsWin(false);
  }

  console.log(isGameOver);
  if(isGameOver === false){
    content =
      <>
      <Score scoreData={scoreData}/>
      {cards.map(card => (
        <div className="gameCardWrapper" key={card.id}>
          <Cards card={card} onClick={handleClick}/>
        </div>
      ))}
      </>
  } else {
    content = 
      <Gameover scoreData={scoreData} resetGame={resetGame} isWin={isWin} pickedCards={pickedCards}/>
  }
  console.log(content);

  return (
    <>
    <header>
      <h1>Touhou Memory Game</h1>
      <h3>Don&apos;t ever pick a card more than once. Try to score as high as you can!</h3>
    </header>
    <hr />
    <main>
     {content}
    </main>
    <footer>
      <h5>Copyright Alec Pura 2023</h5>

      <h5>Touhou Project and all related characters by <a href="https://touhou-project.news/">ZUN</a>. Art by <a href="https://www.pixiv.net/en/users/743845">kaoru</a>.</h5>
    </footer>
    </>
  );
}

export default App;