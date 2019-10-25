import React, { useState, useEffect } from 'react'

import { races } from './Races'
import { classes } from './Classes'

import './index.css'


function CreateCharacter(props) {
  const [name, setName] = useState('')
  const [race, setRace] = useState(props.race)
  const [class_, setClass] = useState(props.class_)


  useEffect(() => {
    let characterInputClass = document.getElementById("characterInputClass");
    let selectedText = characterInputClass.options[characterInputClass.selectedIndex].text;
    setClass(selectedText)
  }, [race])


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
          onClick={() => props.finish(name, race, class_)}
        >
          Create!
        </button>
      </div>
    </div>
  )
}


export default CreateCharacter;
