import { touhous } from "./data";

export default function draw(numCards, pickedCards) {
  console.log("drawing cards")
  let drawnCards = [];
  let iterations = 0;
  while(drawnCards.length < numCards){
    const rNum = Math.floor(Math.random() * touhous.length);
    //Only push a new card if it's not already in hand
    if(!drawnCards.includes(touhous[rNum])){
      drawnCards.push(touhous[rNum])
    }
    //When we reach the draw length,
    //Check if there's at least one valid card
    //If not, reset the deck and draw again
    if(drawnCards.length === numCards){
      if(verifySetHasOneValid(drawnCards, pickedCards) === false){
        console.log("Bad set, redrawing")
        drawnCards = [];
      }
    }
    if(iterations > 200){break;}
  }
  console.log("Draw complete. Final draw is: ", drawnCards);
  return drawnCards;
}

export function hasCardBeenPickedBefore(card, pickedCards){
  if(pickedCards.includes(card)){
    return true;
  }
  return false;
}

export function verifySetHasOneValid(draw, pickedCards){
  console.log("Verifying draw against picked set: ", draw, pickedCards)
  if(pickedCards.length === 0){
    return true;
  }
  let doWeHaveAtLeastOneUnpickedCard = false;
  //Compare each card in hand against the picked set
  //If at least one of them can't be found in the picked set
    //set doWeHaveAtLeastOneUnpickedCard = true;
  for(let i = 0; i < draw.length; i++){
    if(!pickedCards.includes(draw[i])){
      doWeHaveAtLeastOneUnpickedCard = true;
      console.log("Good set")
    }
  }

  return doWeHaveAtLeastOneUnpickedCard;
}

export function isColorDarker(hexColor, threshold) {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Calculate perceived brightness (using the standard luminance formula)
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Compare brightness to the threshold
  return brightness < threshold;
}