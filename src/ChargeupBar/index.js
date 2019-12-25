import React, { useState, useEffect } from 'react';

import ProgressBar from '../ProgressBar'


function ChargeupBar(props) {
  const [render, setRender] = useState(true);
  const [progress, setProgress] = useState(0)


  useEffect(() => {
    const timer = setInterval(() => setProgress(progress => progress+100), 100);
    return () => clearInterval(timer)
  }, [])


  useEffect(() => {
    if (progress === (props.end * 1000)) {
      setRender(false)
    }
    else if (progress > (props.end * 1000)) {
      setProgress(props.end)
    }
  }, [progress])


  return render ? <ProgressBar className="ChargeupBar" value={(progress / (props.end * 1000) * props.end).toFixed(1)} max={props.end}/> : null;
}


export default ChargeupBar;
