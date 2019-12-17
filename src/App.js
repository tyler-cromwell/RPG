import React, { useState, useReducer } from 'react'

import { CreateCharacterView } from './Character'
import { races } from './Character/Races'
import { classes } from './Character/Classes'
import HUD from './HUD'

import './App.css'


const initial = {
  name: '', race: races[0], class_: classes[races[0]][0], level: 1,
  maxHealth: 100, maxStamina: 100, maxMana: 100, maxXP: 100,
  health: 100, stamina: 100, mana: 100, xp: 0
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

      if (state.mana > mm) {
        newState = {...newState, maxMana: mm}
        newState = {...newState, mana: mm}
      }

      return newState
    case 'setMaxXP':
      let mxp = action.value

      if (mxp < 0) {
        newState = {...newState, maxXP: 0}
        newState = {...newState, xp: 0}
      } else {
        newState = {...newState, maxXP: mxp}
      }

      if (state.xp > mm) {
        newState = {...newState, maxXP: mxp}
        newState = {...newState, xp: mxp}
      }

      return newState
    case 'modMaxHealth':
      let mmh = action.value

      if (state.maxHealth + mmh < 0) {
        newState = {...newState, maxHealth: 0}
        newState = {...newState, health: 0}
      } else {
        newState = {...newState, maxHealth: state.maxHealth + mmh}
      }

      if (state.health > state.maxHealth) {
        newState = {...newState, maxHealth: state.maxHealth + mmh}
        newState = {...newState, health: state.maxHealth + mmh}
      }

      return newState
    case 'modMaxStamina':
      let mms = action.value

      if (state.maxStamina + mms < 0) {
        newState = {...newState, maxStamina: 0}
        newState = {...newState, stamina: 0}
      } else {
        newState = {...newState, stamina: state.maxStamina + mms}
      }

      if (state.stamina > mms) {
        newState = {...newState, maxStamina: state.maxStamina + mms}
        newState = {...newState, stamina: state.maxStamina + mms}
      }

      return newState
    case 'modMaxMana':
      let mmm = action.value

      if (state.maxMana + mmm < 0) {
        newState = {...newState, maxMana: 0}
        newState = {...newState, mana: 0}
      } else {
        newState = {...newState, mana: state.maxMana + mmm}
      }

      if (state.mana > mmm) {
        newState = {...newState, maxMana: state.maxMana + mmm}
        newState = {...newState, mana: state.maxMana + mmm}
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
    case 'setXP':
      let xp = action.value

      if (xp > state.maxXP) {
        newState = {...newState, xp: state.maxXP}
      } else if (xp < 0) {
        newState = {...newState, xp: 0}
      } else {
        newState = {...newState, xp: xp}
      }

      return newState
    case 'modHealth':
      let modh = action.value

      if (state.health + modh > state.maxHealth) {
        newState = {...newState, health: state.maxHealth}
      } else if (state.health + modh < 0) {
        newState = {...newState, health: 0}
      } else {
        newState = {...newState, health: state.health + modh}
      }

      return newState
    case 'modStamina':
      let mods = action.value

      if (state.stamina + mods > state.maxStamina) {
        newState = {...newState, stamina: state.maxStamina}
      } else if (state.stamina + mods < 0) {
        newState = {...newState, stamina: 0}
      } else {
        newState = {...newState, stamina: state.stamina + mods}
      }

      return newState
    case 'modMana':
      let modm = action.value

      if (state.mana + modm > state.maxMana) {
        newState = {...newState, mana: state.maxMana}
      } else if (state.mana + modm < 0) {
        newState = {...newState, mana: 0}
      } else {
        newState = {...newState, mana: state.mana + modm}
      }

      return newState
    default:
      return state
  }
}


function App() {
  const [character, dispatch] = useReducer(reducer, initial)
  const [created, setCreated] = useState(false)


  let content = (created) ? (
      <HUD character={character} />
    ) : (
      <CreateCharacterView
        race={character.race}
        class_={character.class_}
        dispatch={dispatch}
        setCreated={setCreated}
      />
  );


  return <div className="App">
    {content}
  </div>
}

export default App
