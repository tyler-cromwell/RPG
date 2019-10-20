import React, { Fragment } from 'react'

import ProgressBar from '../ProgressBar'


function HUD(props) {
  return <Fragment>
    <div><span className="label">{props.character.name}, {props.character.race} {props.character.class_} (Level {props.character.level})</span></div>
    <div><ProgressBar id='Health' value={props.character.health} max={props.character.maxHealth}/></div>
    <div><ProgressBar id='Stamina' value={props.character.stamina} max={props.character.maxStamina}/></div>
    <div><ProgressBar id='Mana' value={props.character.mana} max={props.character.maxMana}/></div>
  </Fragment>
}


export default HUD
