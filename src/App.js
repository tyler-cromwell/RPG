import React, { useState, useReducer } from 'react'

import { initial, reducer, CreateCharacter } from './Character'
import HUD from './Interface/HUD'

import './App.css'


function App() {
  const [character, dispatch] = useReducer(reducer, initial)
  const [created, setCreated] = useState(false)


  let content = (created) ? (
      <HUD character={character} />
    ) : (
      <CreateCharacter
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
