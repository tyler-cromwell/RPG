import React, { useState, useReducer } from 'react'

import CreateCharacter from './Character'
import { races, Human, Dwarf, HighElf, DarkElf, Orc, Saurus } from './Character/Races'
import { classes, Druid, Hunter, Mage, Paladin, Priest, Reaper, Rogue, Shaman, Warlock, Warrior } from './Character/Classes'
import ProgressBar from './ProgressBar'

import './App.css'


const initial = {
  name: '', race: races[0], class_: classes[races[0]][0], level: 1,
  maxHealth: 100, maxStamina: 100, maxMana: 100,
  health: 100, stamina: 100, mana: 100
}
const reducer = (state, action) => {
  let newState = state

  switch (action.type) {
    case 'setName':     return {...newState, name: action.value}
    case 'setRace':     return {...newState, race: action.value}
    case 'setClass':    return {...newState, class_: action.value}
    case 'setLevel':    return {...newState, level: action.value}
    case 'setMaxHealth':
      let mh = action.value

      if (mh < 0) {
        newState = {...newState, maxHealth: 0}
        newState = {...newState, health: 0}
      } else {
        newState = {...newState, maxHealth: mh}
      }

      if (state.health > mh) {
        newState = {...newState, maxHealth: mh}
        newState = {...newState, health: mh}
      }

      return newState
    case 'setMaxStamina':
      let ms = action.value

      if (ms < 0) {
        newState = {...newState, maxStamina: 0}
        newState = {...newState, stamina: 0}
      } else {
        newState = {...newState, maxStamina: ms}
      }

      if (state.stamina > ms) {
        newState = {...newState, maxStamina: ms}
        newState = {...newState, stamina: ms}
      }

      return newState
    case 'setMaxMana':
      let mm = action.value

      if (mm < 0) {
        newState = {...newState, maxMana: 0}
        newState = {...newState, mana: 0}
      } else {
        newState = {...newState, maxMana: mm}
      }

      if (state.stamina > mm) {
        newState = {...newState, maxMana: mm}
        newState = {...newState, mana: mm}
      }

      return newState
    case 'setHealth':
      let h = action.value

      if (h > state.maxHealth) {
        newState = {...newState, health: state.maxHealth}
      } else if (h < 0) {
        newState = {...newState, health: 0}
      } else {
        newState = {...newState, health: h}
      }

      return newState
    case 'setStamina':
      let s = action.value

      if (s > state.maxStamina) {
        newState = {...newState, stamina: state.maxStamina}
      } else if (s < 0) {
        newState = {...newState, stamina: 0}
      } else {
        newState = {...newState, stamina: s}
      }

      return newState
    case 'setMana':
      let m = action.value

      if (m > state.maxMana) {
        newState = {...newState, mana: state.maxMana}
      } else if (m < 0) {
        newState = {...newState, mana: 0}
      } else {
        newState = {...newState, mana: m}
      }

      return newState
    default:
      return state
  }
}


function App() {
  const [character, dispatch] = useReducer(reducer, initial)
  const [created, setCreated] = useState(false)


  const create = (name, race, class_) => {
    if (name !== "") {
      let modMaxHealth = 0
      let modMaxStamina = 0
      let modMaxMana = 0
      let modHealth = 0
      let modStamina = 0
      let modMana = 0

      switch (race) {
        case 'Human':
          modMaxHealth += Human.modHealth
          modMaxStamina += Human.modStamina
          modMaxMana += Human.modMana
          modHealth += Human.modHealth
          modStamina += Human.modStamina
          modMana += Human.modMana
          break
        case 'Dwarf':
          modMaxHealth += Dwarf.modHealth
          modMaxStamina += Dwarf.modStamina
          modMaxMana += Dwarf.modMana
          modHealth += Dwarf.modHealth
          modStamina += Dwarf.modStamina
          modMana += Dwarf.modMana
          break
        case 'High Elf':
          modMaxHealth += HighElf.modHealth
          modMaxStamina += HighElf.modStamina
          modMaxMana += HighElf.modMana
          modHealth += HighElf.modHealth
          modStamina += HighElf.modStamina
          modMana += HighElf.modMana
          break
        case 'Dark Elf':
          modMaxHealth += DarkElf.modHealth
          modMaxStamina += DarkElf.modStamina
          modMaxMana += DarkElf.modMana
          modHealth += DarkElf.modHealth
          modStamina += DarkElf.modStamina
          modMana += DarkElf.modMana
          break
        case 'Orc':
          modMaxHealth += Orc.modHealth
          modMaxStamina += Orc.modStamina
          modMaxMana += Orc.modMana
          modHealth += Orc.modHealth
          modStamina += Orc.modStamina
          modMana += Orc.modMana
          break
        case 'Saurus':
          modMaxHealth += Saurus.modHealth
          modMaxStamina += Saurus.modStamina
          modMaxMana += Saurus.modMana
          modHealth += Saurus.modHealth
          modStamina += Saurus.modStamina
          modMana += Saurus.modMana
          break
        default:
      }

      switch(class_) {
        case 'Druid': 
          modMaxMana += Druid.modMana
          modMana += Druid.modMana
          break
        case 'Hunter':
          modMaxHealth += Hunter.modHealth
          modMaxStamina += Hunter.modStamina
          modHealth += Hunter.modHealth
          modStamina += Hunter.modStamina
          break
        case 'Mage':
          modMaxMana += Mage.modMana
          modMana += Mage.modMana
          break
        case 'Paladin':
          modMaxHealth += Paladin.modHealth
          modMaxStamina += Paladin.modStamina
          modMaxMana += Paladin.modMana
          modHealth += Paladin.modHealth
          modStamina += Paladin.modStamina
          modMana += Paladin.modMana
          break
        case 'Priest':
          modMaxMana += Priest.modMana
          modMana += Priest.modMana
          break
        case 'Reaper':
          modMaxHealth += Reaper.modHealth
          modMaxStamina += Reaper.modStamina
          modMaxMana += Reaper.modMana
          modHealth += Reaper.modHealth
          modStamina += Reaper.modStamina
          modMana += Reaper.modMana
          break
        case 'Rogue':
          modMaxHealth += Rogue.modHealth
          modMaxStamina += Rogue.modStamina
          modHealth += Rogue.modHealth
          modStamina += Rogue.modStamina
          break
        case 'Shaman':
          modMaxMana += Shaman.modMana
          modMana += Shaman.modMana
          break
        case 'Warlock':
          modMaxMana += Warlock.modMana
          modMana += Warlock.modMana
          break
        case 'Warrior':
          modMaxHealth += Warrior.modHealth
          modMaxStamina += Warrior.modStamina
          modHealth += Warrior.modHealth
          modStamina += Warrior.modStamina
          break
        default:
      }

      dispatch({type: 'setName', value: name})
      dispatch({type: 'setRace', value: race})
      dispatch({type: 'setClass', value: class_})
      dispatch({type: 'setMaxHealth', value: character.maxHealth + modMaxHealth})
      dispatch({type: 'setMaxStamina', value: character.maxStamina + modMaxStamina})
      dispatch({type: 'setMaxMana', value: character.maxMana + modMaxMana})
      dispatch({type: 'setHealth', value: character.health + modHealth})
      dispatch({type: 'setStamina', value: character.stamina + modStamina})
      dispatch({type: 'setMana', value: character.mana + modMana})
      setCreated(true)
    }
  }


  let content = (created) ? (
      <div className="App">
        <div><span className="label">{character.name}, {character.race} {character.class_} (Level {character.level})</span></div>
        <div><ProgressBar id='Health' value={character.health} max={character.maxHealth}/></div>
        <div><ProgressBar id='Stamina' value={character.stamina} max={character.maxStamina}/></div>
        <div><ProgressBar id='Mana' value={character.mana} max={character.maxMana}/></div>
      </div>
    ) : (
      <div className="App">
        <CreateCharacter
          races={races}
          race={character.race}
          classes={classes}
          class_={character.class_}
          finish={create}
        />
      </div>
  );

  return content
}

export default App
