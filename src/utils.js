import { touhous } from "./data";

export default function draw(numCards, used) {
  const localUsed = used;
  const drawnCards = [];
  while(drawnCards.length < 8){
    const rNum = Math.floor(Math.random() * touhous.length);
    if(!localUsed.find((card) => card === touhous[rNum])){
      drawnCards.push(touhous[rNum])
      localUsed.push(touhous[rNum])
    }
  }
  console.log("Draw complete");
  console.log(drawnCards);
  return drawnCards;
}