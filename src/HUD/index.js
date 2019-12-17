import React from 'react'

import ProgressBar from '../ProgressBar'

import './index.css'


function HUD(props) {
  return <div id="hudContainer">
    <div id="hudStats">
      <div><span className="label">{props.character.name}, {props.character.race} {props.character.class_} ({props.character.level})</span></div>
      <div><ProgressBar id='Health' value={props.character.health} max={props.character.maxHealth}/></div>
      <div><ProgressBar id='Stamina' value={props.character.stamina} max={props.character.maxStamina}/></div>
      <div><ProgressBar id='Mana' value={props.character.mana} max={props.character.maxMana}/></div>
      <div><ProgressBar id='XP' value={props.character.xp} max={props.character.maxXP}/></div>
    </div>
    <div id="hudBackpack">
      <span className="label">Backpack goes here</span>
    </div>
    <div id="hudSpellbook">
      <span className="label">Spellbook goes here</span>
    </div>
  </div>
}


export default HUD
