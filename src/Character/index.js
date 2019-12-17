import React, { useState, useEffect } from 'react'

import { races, Human, Dwarf, HighElf, DarkElf, Orc, Saurus } from './Races'
import { classes, Druid, Hunter, Mage, Paladin, Priest, Reaper, Rogue, Shaman, Warlock, Warrior } from './Classes'

import './index.css'


function CreateCharacterView(props) {
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
  CreateCharacterView
};
