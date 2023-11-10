import { useState } from "react";
import "./styles/App.css";
import Cards from "./components/Cards";
import draw from "./utils";

function App() {

  const numCards = 8;

  const initialDraw = draw(numCards);
  let usedCards = [];

  const [cards, setCards] = useState([
    {id: 1, props: initialDraw[0]},
    {id: 2, props: initialDraw[1]},
    {id: 3, props: initialDraw[2]},
    {id: 4, props: initialDraw[3]},
    {id: 5, props: initialDraw[4]},
    {id: 6, props: initialDraw[5]},
    {id: 7, props: initialDraw[6]},
    {id: 8, props: initialDraw[7]},
  ]);

  return (
    <>

      <h1>Memory Game</h1>
      <h3>Don't ever pick a card more than once. Try to score as high as you can!</h3>
    <main>
      {cards.map(card => (
        <Cards key={card.id} props={card.props}/>
      ))}
    </main>

    </>
  );
}

export default App;
