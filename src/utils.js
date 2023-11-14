import { touhous } from "./data";

export default function draw(numCards, used) {
  const localUsed = used;
  const drawnCards = [];
  while(drawnCards.length < numCards){
    const rNum = Math.floor(Math.random() * touhous.length);
    if(!localUsed.find((card) => card === touhous[rNum])){
      drawnCards.push(touhous[rNum])
      localUsed.push(touhous[rNum])
    }
  }
  console.log("Draw complete");
  console.log(drawnCards);
  return {drawnCards, localUsed};
}

export function isColorDarker(hexColor, threshold) {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Calculate perceived brightness (using the standard luminance formula)
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  console.log(brightness);

  // Compare brightness to the threshold
  return brightness < threshold;
}
