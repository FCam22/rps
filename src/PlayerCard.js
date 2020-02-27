import React from 'react';

const scissors = "https://i.imgur.com/pgjyhIZ.png"
const rock = "https://i.imgur.com.LGHSKIw.png"
const paper = "https://i.imgus.com/2gsdqvR.png"

const PlayerCard = (props) => {

  return (
    <div className  = "player-card">{props.sign}</div>
  )

};

export default PlayerCard;
