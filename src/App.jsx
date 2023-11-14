import { useState } from "react";
import "./styles/App.css";
import Cards from "./components/Cards";
import draw from "./utils";
import { touhous } from "./data"

function App() {

  const numCards = 10;
  let usedCards = [];

  const initialState = draw(numCards, usedCards); //draw(numCards);
  const initialDraw = initialState.drawnCards;
  usedCards = initialState.localUsed;

  console.log("Used cards = ");
  console.log(usedCards)

  const [cards, setCards] = useState(initialDraw)
  let score = 0;
  const groupScoreeosd = 0;
  const groupScorepcb = 0;
  const groupScorein = 0;
  const groupScorepofv = 0;
  const groupScoremof = 0;
  const groupScoresa = 0;
  const groupScoreufo = 0;
  const groupScoretd = 0;
  const groupScoreddc = 0;
  //const groupScorelolk = 0;
  // console.log(cards);
  // console.log(cards[0]);

  // const [cards, setCards] = useState([
  //   initialDraw[0],
  //   initialDraw[1],
  //   initialDraw[2],
  //   initialDraw[3],
  //   initialDraw[4],
  //   initialDraw[5],
  //   initialDraw[6],
  //   initialDraw[7],
  // ]);

  return (
    <>
    <header>
      <h1>Touhou Memory Game</h1>
      <h3>Don&apos;t ever pick a card more than once. Try to score as high as you can!</h3>
    </header>
    <main>
      {cards.map(card => (
        <Cards key={card.id} card={card}/>
      ))}
    </main>

    </>
  );
}

export default App;
