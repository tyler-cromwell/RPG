import React, { Fragment, useState, useEffect } from 'react'


function CreateCharacter(props) {
  const [name, setName] = useState('')
  const [race, setRace] = useState(props.race)
  const [class_, setClass] = useState(props.class_)


  useEffect(() => {
    let selectClass = document.getElementById("selectClass");
    let selectedText = selectClass.options[selectClass.selectedIndex].text;
    setClass(selectedText)
  }, [race])


  return (
    <Fragment>
      <span className="label">Name:</span>
      <input
        id="inputName"
        type="text"
        maxLength="14"
        onChange={evt => setName(evt.target.value)}
      />
      <select id="selectRace" onClick={evt => setRace(evt.target.value)}>
        {props.races.map(r => <option key={r} value={r}>{r}</option>)}
      </select>
      <select id="selectClass" onClick={evt => setClass(evt.target.value)}>
        {props.classes[race].map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <button onClick={() => props.finish(name, race, class_)}>
        Create!
      </button>
    </Fragment>
  )
}


export default CreateCharacter;
