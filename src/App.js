import React, { useState, useEffect } from 'react'

import ProgressBar from './ProgressBar'

import './App.css'


function App() {
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
  const [name, setName] = useState('')
  const [race, setRace] = useState(races[0])
  const [class_, setClass] = useState(classes[race][0])
  const [level, setLevel] = useState(1)
  const [created, setCreated] = useState(false)
  const [maxHealth, setMaxHealth] = useState(100)
  const [maxStamina, setMaxStamina] = useState(100)
  const [maxMana, setMaxMana] = useState(100)
  const [health, setHealth] = useState(100)
  const [stamina, setStamina] = useState(100)
  const [mana, setMana] = useState(100)


  const clicked = () => {
    if (name !== "") {
      console.log(name)
      console.log(race)
      console.log(class_)
      setCreated(true)
    }
  }


  useEffect(() => {
    if (maxHealth < 0) {
      setHealth(0)
      setMaxHealth(0)
    } else {
      setMaxHealth(maxHealth)
    }

    if (health > maxHealth) {
      setHealth(maxHealth)
    } else if (health < 0) {
      setHealth(0)
    } else {
      setHealth(health)
    }
  }, [health, maxHealth])


  useEffect(() => {
    if (maxStamina < 0) {
      setStamina(0)
      setMaxStamina(0)
    } else {
      setMaxStamina(maxStamina)
    }

    if (stamina > maxStamina) {
      setStamina(maxStamina)
    } else if (stamina < 0) {
      setStamina(0)
    } else {
      setStamina(stamina)
    }
  }, [stamina, maxStamina])


  useEffect(() => {
    if (maxMana < 0) {
      setMana(0)
      setMaxMana(0)
    } else {
      setMaxMana(maxMana)
    }

    if (mana > maxMana) {
      setMana(maxMana)
    } else if (mana < 0) {
      setMana(0)
    } else {
      setMana(mana)
    }
  }, [mana, maxMana])


  if (created) {
    return (
      <div className="App">
        <div><span className="label">{name}, {race} {class_} (Level {level})</span></div>
        <div><ProgressBar id='Health' value={health} max={maxHealth}/></div>
        <div><ProgressBar id='Stamina' value={stamina} max={maxStamina}/></div>
        <div><ProgressBar id='Mana' value={mana} max={maxMana}/></div>
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
          onChange={evt => setName(evt.target.value)}
        />
        <select onChange={evt => setRace(evt.target.value)}>
          {races.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <select onClick={evt => setClass(evt.target.value)}>
          {classes[race].map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <button onClick={() => clicked()}>
          Create!
        </button>
      </div>
    )
  }
}

export default App
