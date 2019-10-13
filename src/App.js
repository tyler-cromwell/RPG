import React, { useState, useEffect } from 'react';

import ProgressBar from './ProgressBar/ProgressBar';

import './App.css';


function App() {
  const [maxHealth, setMaxHealth] = useState(100);
  const [maxStamina, setMaxStamina] = useState(100);
  const [maxMana, setMaxMana] = useState(100);
  const [health, setHealth] = useState(100);
  const [stamina, setStamina] = useState(100);
  const [mana, setMana] = useState(100);


  useEffect(() => {
    if (maxHealth < 0) {
      setHealth(0)
      setMaxHealth(0)
    }
    else {
      setMaxHealth(maxHealth)
    }

    if (health > maxHealth) {
      setHealth(maxHealth)
    }
    else if (health < 0) {
      setHealth(0)
    }
    else {
      setHealth(health)
    }
  }, [health, maxHealth])


  useEffect(() => {
    if (maxStamina < 0) {
      setStamina(0)
      setMaxStamina(0)
    }
    else {
      setMaxStamina(maxStamina)
    }

    if (stamina > maxStamina) {
      setStamina(maxStamina)
    }
    else if (stamina < 0) {
      setStamina(0)
    }
    else {
      setStamina(stamina)
    }
  }, [stamina, maxStamina])


  useEffect(() => {
    if (maxMana < 0) {
      setMana(0)
      setMaxMana(0)
    }
    else {
      setMaxMana(maxMana)
    }

    if (mana > maxMana) {
      setMana(maxMana)
    }
    else if (mana < 0) {
      setMana(0)
    }
    else {
      setMana(mana)
    }
  }, [mana, maxMana])


  return (
    <div className="App">
      <div>
        <ProgressBar id='Health' value={health} max={maxHealth}/>
        <button onClick={() => setHealth(health+1)}>Health Increment</button>
        <button onClick={() => setHealth(health-1)}>Health Decrement</button>
        <button onClick={() => setMaxHealth(maxHealth+1)}>Max Increment</button>
        <button onClick={() => setMaxHealth(maxHealth-1)}>Max Decrement</button>
      </div>
      <div>
        <ProgressBar id='Stamina' value={stamina} max={maxStamina}/>
        <button onClick={() => setStamina(stamina+1)}>Stamina Increment</button>
        <button onClick={() => setStamina(stamina-1)}>Stamina Decrement</button>
        <button onClick={() => setMaxStamina(maxStamina+1)}>Max Increment</button>
        <button onClick={() => setMaxStamina(maxStamina-1)}>Max Decrement</button>
      </div>
      <div>
        <ProgressBar id='Mana' value={mana} max={maxMana}/>
        <button onClick={() => setMana(mana+1)}>Mana Increment</button>
        <button onClick={() => setMana(mana-1)}>Mana Decrement</button>
        <button onClick={() => setMaxMana(maxMana+1)}>Max Increment</button>
        <button onClick={() => setMaxMana(maxMana-1)}>Max Decrement</button>
      </div>
      <button onClick={() => {
          setMaxHealth(100)
          setMaxStamina(100)
          setMaxMana(100)
          setHealth(100)
          setStamina(100)
          setMana(100)
      }}>Reset</button>
    </div>
  );
}

export default App;
