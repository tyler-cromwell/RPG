import React, { useState, useEffect } from 'react'

import { races, Human, Dwarf, HighElf, DarkElf, Orc, Saurus } from './Races'
import { classes, Druid, Hunter, Mage, Necrolord, Paladin, Priest, Rogue, Shaman, Warlock, Warrior } from './Classes'

import './index.css'


const initial = {
  name: '', race: races[0], class_: classes[races[0]][0], level: 1,
  maxHealth: 10, maxEnergy: 10, maxMana: 10, maxXP: 100,
  health: 10, energy: 10, mana: 10, xp: 0,
  strength: 10,
  perception: 10,
  endurance: 10,
  charisma: 10,
  intelligence: 10,
  agility: 10,
  willpower: 10
}


const reducer = (state, action) => {
  switch (action.type) {
    case 'setName':     return {...state, name: action.value}
    case 'setRace':     return {...state, race: action.value}
    case 'setClass':    return {...state, class_: action.value}
    case 'setLevel':    return {...state, level: action.value}
    case 'setMaxHealth':
      if (action.value <= 0) {
        return {...state, maxHealth: 0, health: 0}
      } else if (state.health > action.value) {
        return {...state, maxHealth: action.value, health: action.value}
      } else {
        return {...state, maxHealth: action.value}
      }
    case 'setMaxEnergy':
      if (action.value <= 0) {
        return {...state, maxEnergy: 0, energy: 0}
      } else if (state.energy > action.value) {
        return {...state, maxEnergy: action.value, energy: action.value}
      } else {
        return {...state, maxEnergy: action.value}
      }
    case 'setMaxMana':
      if (action.value < 0) {
        return {...state, maxMana: 0, mana: 0}
      } else if (state.mana > action.value) {
        return {...state, maxMana: action.value, mana: action.value}
      } else {
        return {...state, maxMana: action.value}
      }
    case 'setMaxXP':
      if (action.value <= 0) {
        return {...state, maxXP: 0, xp: 0}
      } else if (state.xp > action.value) {
        return {...state, maxXP: action.value, xp: action.value}
      } else {
        return {...state, maxXP: action.value}
      }
    case 'setHealth':
      if (action.value > state.maxHealth) {
        return {...state, health: state.maxHealth}
      } else if (action.value <= 0) {
        return {...state, health: 0}
      } else {
        return {...state, health: action.value}
      }
    case 'setEnergy':
      if (action.value > state.maxEnergy) {
        return {...state, energy: state.maxEnergy}
      } else if (action.value <= 0) {
        return {...state, energy: 0}
      } else {
        return {...state, energy: action.value}
      }
    case 'setMana':
      if (action.value > state.maxMana) {
        return {...state, mana: state.maxMana}
      } else if (action.value <= 0) {
        return {...state, mana: 0}
      } else {
        return {...state, mana: action.value}
      }
    case 'setXP':
      if (action.value > state.maxXP) {
        return {...state, xp: state.maxXP}
      } else if (action.value <= 0) {
        return {...state, xp: 0}
      } else {
        return {...state, xp: action.value}
      }
    case 'modMaxHealth':
      if (state.maxHealth + action.value <= 0) {
        return {...state, maxHealth: 0, health: 0}
      } else if (state.health > state.maxHealth + action.value) {
        return {
          ...state,
          maxHealth: state.maxHealth + action.value,
          health: state.maxHealth + action.value
        }
      } else {
        return {...state, maxHealth: state.maxHealth + action.value}
      }
    case 'modMaxEnergy':
      if (state.maxEnergy + action.value <= 0) {
        return {...state, maxEnergy: 0, energy: 0}
      } else if (state.energy > state.maxEnergy + action.value) {
        return {
          ...state,
          maxEnergy: state.maxEnergy + action.value,
          energy: state.maxEnergy + action.value
        }
      } else {
        return {...state, energy: state.maxEnergy + action.value}
      }
    case 'modMaxMana':
      if (state.maxMana + action.value <= 0) {
        return {...state, maxMana: 0, mana: 0}
      } else if (state.mana > state.maxMana + action.value) {
        return {
          ...state,
          maxMana: state.maxMana + action.value,
          mana: state.maxMana + action.value
        }
      } else {
        return {...state, mana: state.maxMana + action.value}
      }
    case 'modHealth':
      if (state.health + action.value > state.maxHealth) {
        return {...state, health: state.maxHealth}
      } else if (state.health + action.value <= 0) {
        return {...state, health: 0}
      } else {
        return {...state, health: state.health + action.value}
      }
    case 'modEnergy':
      if (state.energy + action.value > state.maxEnergy) {
        return {...state, energy: state.maxEnergy}
      } else if (state.energy + action.value <= 0) {
        return {...state, energy: 0}
      } else {
        return {...state, energy: state.energy + action.value}
      }
    case 'modMana':
      if (state.mana + action.value > state.maxMana) {
        return {...state, mana: state.maxMana}
      } else if (state.mana + action.value <= 0) {
        return {...state, mana: 0}
      } else {
        return {...state, mana: state.mana + action.value}
      }
    case 'modStrength':
      if (state.strength + action.value <= 0) {
        return {
          ...state,
          maxEnergy: 0,
          energy: 0,
          strength: 0
        }
      } else {
        return {
          ...state,
          maxEnergy: state.maxEnergy + action.value,
          energy: state.energy + action.value,
          strength: state.strength + action.value
        }
      }
    case 'modPerception':
      if (state.perception + action.value <= 0) {
        return {
          ...state,
          endurance: 0
        }
      } else {
        return {
          ...state,
          perception: state.perception + action.value
        }
      }
    case 'modEndurance':
      if (state.endurance + action.value <= 0) {
        return {
          ...state,
          maxHealth: 0,
          health: 0,
          endurance: 0
        }
      } else {
        return {
          ...state,
          maxHealth: state.maxHealth + action.value,
          health: state.health + action.value,
          endurance: state.endurance + action.value
        }
      }
    case 'modIntelligence':
      if (state.intelligence + action.value <= 0) {
        return {
          ...state,
          maxMana: 0,
          mana: 0,
          endurance: 0
        }
      } else {
        return {
          ...state,
          maxMana: state.maxMana + action.value,
          mana: state.mana + action.value,
          intelligence: state.intelligence + action.value
        }
      }
    case 'modAgility':
      if (state.agility + action.value <= 0) {
        return {
          ...state,
          agility: 0
        }
      } else {
        return {
          ...state,
          agility: state.agility + action.value
        }
      }
    case 'modWillpower':
      if (state.willpower + action.value <= 0) {
        return {
          ...state,
          willpower: 0
        }
      } else {
        return {
          ...state,
          willpower: state.willpower + action.value
        }
      }
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
    let modStrength = 0
    let modPerception = 0
    let modEndurance = 0
    let modIntelligence = 0
    let modAgility = 0
    let modWillpower = 0
    let selectedRace = null
    let selectedClass = null

    if (name !== "") {
      switch (race) {
        case 'Human':       selectedRace = Human;       break
        case 'Dwarf':       selectedRace = Dwarf;       break
        case 'High Elf':    selectedRace = HighElf;     break
        case 'Dark Elf':    selectedRace = DarkElf;     break
        case 'Orc':         selectedRace = Orc;         break
        case 'Saurus':      selectedRace = Saurus;      break
        default:
      }

      switch(class_) {
        case 'Druid':       selectedClass = Druid;      break
        case 'Hunter':      selectedClass = Hunter;     break
        case 'Mage':        selectedClass = Mage;       break
        case 'Necrolord':   selectedClass = Necrolord;  break
        case 'Paladin':     selectedClass = Paladin;    break
        case 'Priest':      selectedClass = Priest;     break
        case 'Rogue':       selectedClass = Rogue;      break
        case 'Shaman':      selectedClass = Shaman;     break
        case 'Warlock':     selectedClass = Warlock;    break
        case 'Warrior':     selectedClass = Warrior;    break
        default:
      }

      modStrength += selectedRace.lvlStrength + selectedClass.lvlStrength
      modPerception += selectedRace.lvlPerception + selectedClass.lvlPerception
      modEndurance += selectedRace.lvlEndurance + selectedClass.lvlEndurance
      modIntelligence += selectedRace.lvlIntelligence + selectedClass.lvlIntelligence
      modAgility += selectedRace.lvlAgility + selectedClass.lvlAgility
      modWillpower += selectedRace.lvlWillpower + selectedClass.lvlWillpower

      dispatch({type: 'setName', value: name})
      dispatch({type: 'setRace', value: race})
      dispatch({type: 'setClass', value: class_})
      dispatch({type: 'modStrength', value: modStrength})
      dispatch({type: 'modPerception', value: modPerception})
      dispatch({type: 'modEndurance', value: modEndurance})
      dispatch({type: 'modIntelligence', value: modIntelligence})
      dispatch({type: 'modAgility', value: modAgility})
      dispatch({type: 'modWillpower', value: modWillpower})
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
          onChange={evt => setRace(evt.target.value)}
        >
          {races.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <select
          id="characterInputClass"
          onChange={evt => setClass(evt.target.value)}
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
