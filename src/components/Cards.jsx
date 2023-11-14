/* eslint-disable react/prop-types */
import "../styles/Cards.css"
import { groups } from "../data";
import { isColorDarker } from "../utils";

function Cards({ card }) {
  const {name, groupShort, image} = card;
  console.log(card);
  console.log("groupShort = " + groupShort);
  const group = groups.find((obj) => obj.shortHand === groupShort)
  console.log(group);
  let bgStyle;
  let gameTitleStyle;
  if(groupShort === 'main'){
    bgStyle={backgroundImage: group.backgroundImage};
  }
  else{
    bgStyle={backgroundColor: group.color}
    gameTitleStyle={color: group.color};
    //Adds a white outline to text that is too dark
    //Honestly just make the base color brighter if so
    if(isColorDarker(group.color, 0.25)){
      console.log(isColorDarker(group.color, 0.45))
      gameTitleStyle.textShadow=`-1px -1px 0 #fff, 1px -1px 0  #fff,-1px 1px 0  #fff,1px 1px 0   #fff`;
      console.log(gameTitleStyle);
    }
  }
  console.log("Color is " + group.color)

  
  return(
    <div className="card">
      <div className="cardImageContainer" style={bgStyle}>
        <img className="cardImage" src={image} alt={name}></img>
      </div>
      <div className="cardDescContainer">
        <p style={{color:'white',textShadow:'none'}}>{name}</p>
        {/* The main character's names are in a special gradient */}
        {groupShort === 'main' ? (
          <p className="mainCharacterText" style={{backgroundImage:group.backgroundImage}}><b>{group.name}</b></p>
        ):(
          <p style={gameTitleStyle}><b>{group.name}</b></p>
        )}

      </div>

    </div>
  )
}

export default Cards;