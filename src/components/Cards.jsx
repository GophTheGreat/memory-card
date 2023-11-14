/* eslint-disable react/prop-types */
import "../styles/Cards.css"
import { groups } from "../data";

function Cards({ card }) {
  const {name, groupShort, image} = card;
  console.log(card);
  console.log("groupShort = " + groupShort);
  const group = groups.find((obj) => obj.shortHand === groupShort)
  console.log(group);
  const color = {backgroundColor: group.color};

  console.log("Color is " + group.color)

  
  return(
    <div className="card">
      <img className="cardImage" style={color} src={image} alt={name}></img>
      <p>{name}</p>
    </div>
  )
}

export default Cards;