import React, { useState, useReducer } from 'react'

import { Human, Dwarf, HighElf, DarkElf, Orc, Saurus } from './Races'
import ProgressBar from './ProgressBar'

import './App.css'


const classes = {
  //          ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Reaper', 'Rogue', 'Shaman', 'Warlock', 'Warrior'],
  'Human':    [                   'Mage', 'Paladin', 'Priest', 'Reaper', 'Rogue',           'Warlock', 'Warrior'], //-3
  'Dwarf':    [         'Hunter',         'Paladin', 'Priest', 'Reaper', 'Rogue', 'Shaman',            'Warrior'], //-3
  'High Elf': ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest',           'Rogue',           'Warlock', 'Warrior'], //-2

  'Dark Elf': [                   'Mage', 'Paladin', 'Priest', 'Reaper', 'Rogue', 'Shaman', 'Warlock', 'Warrior'], //-2
  'Orc':      [         'Hunter',                    'Priest', 'Reaper', 'Rogue', 'Shaman', 'Warlock', 'Warrior'], //-3
  'Saurus':   ['Druid', 'Hunter', 'Mage',            'Priest',           'Rogue', 'Shaman',            'Warrior']  //-3
}
const races = Object.keys(classes)


const initial = {
  name: '', race: races[0], class_: classes[races[0]][0], level: 1,
  maxHealth: 100, maxStamina: 100, maxMana: 100,
  health: 100, stamina: 100, mana: 100
}
const reducer = (state, action) => {
  let newState = state

  switch (action.type) {
    case 'setName':     return {...state, name: action.value}
    case 'setRace':     return {...state, race: action.value}
    case 'setClass':    return {...state, class_: action.value}
    case 'setLevel':    return {...state, level: action.value}
    case 'setMaxHealth':
      let mh = action.value

      if (mh < 0) {
        newState = {...state, maxHealth: 0}
        newState = {...state, health: 0}
      } else {
        newState = {...state, maxHealth: mh}
      }

      if (state.health > mh) {
        newState = {...state, maxHealth: mh}
        newState = {...state, health: mh}
      }

      return newState
    case 'setMaxStamina':
      let ms = action.value

      if (ms < 0) {
        newState = {...state, maxStamina: 0}
        newState = {...state, stamina: 0}
      } else {
        newState = {...state, maxStamina: ms}
      }

      if (state.stamina > ms) {
        newState = {...state, maxStamina: ms}
        newState = {...state, stamina: ms}
      }

      return newState
    case 'setMaxMana':
      let mm = action.value

      if (mm < 0) {
        newState = {...state, maxMana: 0}
        newState = {...state, mana: 0}
      } else {
        newState = {...state, maxMana: mm}
      }

      if (state.stamina > mm) {
        newState = {...state, maxMana: mm}
        newState = {...state, mana: mm}
      }

      return newState
    case 'setHealth':
      let h = action.value

      if (h > state.maxHealth) {
        newState = {...state, health: state.maxHealth}
      } else if (h < 0) {
        newState = {...state, health: 0}
      } else {
        newState = {...state, health: h}
      }

      return newState
    case 'setStamina':
      let s = action.value

      if (s > state.maxStamina) {
        newState = {...state, stamina: state.maxStamina}
      } else if (s < 0) {
        newState = {...state, stamina: 0}
      } else {
        newState = {...state, stamina: s}
      }

      return newState
    case 'setMana':
      let m = action.value

      if (m > state.maxMana) {
        newState = {...state, mana: state.maxMana}
      } else if (m < 0) {
        newState = {...state, mana: 0}
      } else {
        newState = {...state, mana: m}
      }

      return newState
    default:
      return state
  }
}


function App() {
  const [character, dispatch] = useReducer(reducer, initial)
  const [created, setCreated] = useState(false)


  const clicked = () => {
    if (character.name !== "") {
      switch (character.race) {
        case 'Human':
          dispatch({type: 'setMaxHealth', value: character.maxHealth + Human.modHealth})
          dispatch({type: 'setMaxStamina', value: character.maxStamina + Human.modStamina})
          dispatch({type: 'setMaxMana', value: character.maxMana + Human.modMana})
          dispatch({type: 'setHealth', value: character.health + Human.modHealth})
          dispatch({type: 'setStamina', value: character.stamina + Human.modStamina})
          dispatch({type: 'setMana', value: character.mana + Human.modMana})
          break
        case 'Dwarf':
          dispatch({type: 'setMaxHealth', value: character.maxHealth + Dwarf.modHealth})
          dispatch({type: 'setMaxStamina', value: character.maxStamina + Dwarf.modStamina})
          dispatch({type: 'setMaxMana', value: character.maxMana + Dwarf.modMana})
          dispatch({type: 'setHealth', value: character.health + Dwarf.modHealth})
          dispatch({type: 'setStamina', value: character.stamina + Dwarf.modStamina})
          dispatch({type: 'setMana', value: character.mana + Dwarf.modMana})
          break
        case 'High Elf':
          dispatch({type: 'setMaxHealth', value: character.maxHealth + HighElf.modHealth})
          dispatch({type: 'setMaxStamina', value: character.maxStamina + HighElf.modStamina})
          dispatch({type: 'setMaxMana', value: character.maxMana + HighElf.modMana})
          dispatch({type: 'setHealth', value: character.health + HighElf.modHealth})
          dispatch({type: 'setStamina', value: character.stamina + HighElf.modStamina})
          dispatch({type: 'setMana', value: character.mana + HighElf.modMana})
          break
        case 'Dark Elf':
          dispatch({type: 'setMaxHealth', value: character.maxHealth + DarkElf.modHealth})
          dispatch({type: 'setMaxStamina', value: character.maxStamina + DarkElf.modStamina})
          dispatch({type: 'setMaxMana', value: character.maxMana + DarkElf.modMana})
          dispatch({type: 'setHealth', value: character.health + DarkElf.modHealth})
          dispatch({type: 'setStamina', value: character.stamina + DarkElf.modStamina})
          dispatch({type: 'setMana', value: character.mana + DarkElf.modMana})
          break
        case 'Orc':
          dispatch({type: 'setMaxHealth', value: character.maxHealth + Orc.modHealth})
          dispatch({type: 'setMaxStamina', value: character.maxStamina + Orc.modStamina})
          dispatch({type: 'setMaxMana', value: character.maxMana + Orc.modMana})
          dispatch({type: 'setHealth', value: character.health + Orc.modHealth})
          dispatch({type: 'setStamina', value: character.stamina + Orc.modStamina})
          dispatch({type: 'setMana', value: character.mana + Orc.modMana})
          break
        case 'Saurus':
          dispatch({type: 'setMaxHealth', value: character.maxHealth + Saurus.modHealth})
          dispatch({type: 'setMaxStamina', value: character.maxStamina + Saurus.modStamina})
          dispatch({type: 'setMaxMana', value: character.maxMana + Saurus.modMana})
          dispatch({type: 'setHealth', value: character.health + Saurus.modHealth})
          dispatch({type: 'setStamina', value: character.stamina + Saurus.modStamina})
          dispatch({type: 'setMana', value: character.mana + Saurus.modMana})
          break
        default:
      }

      switch(character.class_) {
        case 'Hunter':
        case 'Rogue':
          dispatch({type: 'setMaxHealth', value: character.maxHealth + 10})
          dispatch({type: 'setMaxStamina', value: character.maxStamina + 20})
          dispatch({type: 'setHealth', value: character.health + 10})
          dispatch({type: 'setStamina', value: character.stamina + 20})
          break
        case 'Paladin':
          dispatch({type: 'setMaxHealth', value: character.maxHealth + 10})
          dispatch({type: 'setMaxStamina', value: character.maxStamina + 10})
          dispatch({type: 'setMaxMana', value: character.maxMana + 10})
          dispatch({type: 'setHealth', value: character.health + 10})
          dispatch({type: 'setStamina', value: character.stamina + 10})
          dispatch({type: 'setMana', value: character.mana + 10})
          break
        case 'Warrior':
          dispatch({type: 'setMaxHealth', value: character.maxHealth + 20})
          dispatch({type: 'setMaxStamina', value: character.maxStamina + 10})
          dispatch({type: 'setHealth', value: character.health + 20})
          dispatch({type: 'setStamina', value: character.stamina + 10})
          break
        case 'Druid':
        case 'Mage':
        case 'Priest':
        case 'Shaman':
        case 'Warlock':
          dispatch({type: 'setMaxMana', value: character.maxMana + 30})
          dispatch({type: 'setMana', value: character.mana + 30})
          break
        default:
      }

      setCreated(true)
    }
  }


  if (created) {
    return (
      <div className="App">
        <div><span className="label">{character.name}, {character.race} {character.class_} (Level {character.level})</span></div>
        <div><ProgressBar id='Health' value={character.health} max={character.maxHealth}/></div>
        <div><ProgressBar id='Stamina' value={character.stamina} max={character.maxStamina}/></div>
        <div><ProgressBar id='Mana' value={character.mana} max={character.maxMana}/></div>
      </div>
    )
  }
  else {
    return (
      <div className="App">
        <span className="label">Name:</span>
        <input
          id="inputName"
          type="text"
          maxLength="14"
          onChange={evt => dispatch({type: 'setName', value: evt.target.value})}
        />
        <select onClick={evt => dispatch({type: 'setRace', value: evt.target.value})}>
          {races.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <select onClick={evt => dispatch({type: 'setClass', value: evt.target.value})}>
          {classes[character.race].map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <button onClick={() => clicked()}>
          Create!
        </button>
      </div>
    )
  }
}

export default App
