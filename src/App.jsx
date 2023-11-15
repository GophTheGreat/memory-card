import { useState } from "react";
import "./styles/App.css";
import Cards from "./components/Cards";
import Score from "./components/Score";
import draw from "./utils";

function App() {

  const numCards = 10;

  const initialDraw = draw(numCards, []); //draw(numCards);

  const [pickedCards, setPickedCards] = useState([])
  const [cards, setCards] = useState(initialDraw)
  const [scoreData, setScoreData] = useState({score: 0});
  console.log(scoreData);

  const groupScoreeosd = 0;
  const groupScorepcb = 0;
  const groupScorein = 0;
  const groupScorepofv = 0;
  const groupScoremof = 0;
  const groupScoresa = 0;
  const groupScoreufo = 0;
  const groupScoretd = 0;
  const groupScoreddc = 0;

  function handleClick(card){
    console.log("clicked a card", card)
    //First verify whether the card has been picked before TODO

    //If false
      //Increment score
      //Push new card to pickedCards, THEN
       //Draw again and update state
      setScoreData((oldData) => ({score:oldData.score + 1}));
      
      setPickedCards(prevCards => {
        const newCards = [...prevCards, card];
        console.log("Picked cards are: ", newCards);
        return newCards;
      });
      
      setCards(draw(numCards, pickedCards))

    //End game if true
  }

  return (
    <>
    <header>
      <h1>Touhou Memory Game</h1>
      <h3>Don&apos;t ever pick a card more than once. Try to score as high as you can!</h3>
      <Score scoreData={scoreData}/>
    </header>
    <main>
      {cards.map(card => (
        <Cards key={card.id} card={card} onClick={handleClick}/>
      ))}
    </main>

    </>
  );
}

export default App;