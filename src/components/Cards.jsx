/* eslint-disable react/prop-types */
import "../styles/Cards.css"

export default function Cards({ card }) {
  const {name, groupShort, image} = card;
  console.log(name);
  
  return(
    <div className="card">
      <img src={image} width="200px" height="200px"></img>
      <p>{name}</p>
    </div>
  )
}