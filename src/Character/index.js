import React, { useState, useEffect } from 'react'

import { races, Human, Dwarf, HighElf, DarkElf, Orc, Saurus } from './Races'
import { classes, Druid, Hunter, Mage, Paladin, Priest, Reaper, Rogue, Shaman, Warlock, Warrior } from './Classes'

import './index.css'


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


function CreateCharacter(props) {
  const [name, setName] = useState('')
  const [race, setRace] = useState(props.race)
  const [class_, setClass] = useState(props.class_)


  useEffect(() => {
    let characterInputClass = document.getElementById("characterInputClass");
    let selectedText = characterInputClass.options[characterInputClass.selectedIndex].text;
    setClass(selectedText)
  }, [race])


  const create = (name, race, class_, dispatch, setCreated) => {
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
      dispatch({type: 'modMaxHealth', value: modMaxHealth})
      dispatch({type: 'modMaxStamina', value: modMaxStamina})
      dispatch({type: 'modMaxMana', value: modMaxMana})
      dispatch({type: 'modHealth', value: modHealth})
      dispatch({type: 'modStamina', value: modStamina})
      dispatch({type: 'modMana', value: modMana})
      setCreated(true)
    }
  }


  return (
    <div id="characterInputContainer">
      <div id="characterInputContent">
        <input
          id="characterInputName"
          type="text"
          maxLength="14"
          onChange={evt => setName(evt.target.value)}
          placeholder="Enter a name"
        />
        <select
          id="characterInputRace"
          onClick={evt => setRace(evt.target.value)}
        >
          {races.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <select
          id="characterInputClass"
          onClick={evt => setClass(evt.target.value)}
        >
          {classes[race].map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <button
          id="characterInputCreateButton"
          onClick={() => create(name, race, class_, props.dispatch, props.setCreated)}
        >
          Create!
        </button>
      </div>
    </div>
  )
}


export {
  initial,
  reducer,
  CreateCharacter
};
