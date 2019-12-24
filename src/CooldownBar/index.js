import React, { useState, useEffect } from 'react';

import ProgressBar from '../ProgressBar'


function CooldownBar(props) {
  const [render, setRender] = useState(true);
  const [progress, setProgress] = useState(props.initial * 1000)


  useEffect(() => {
    const timer = setInterval(() => setProgress(progress => progress-100), 100);
    return () => clearInterval(timer)
  }, [])


  useEffect(() => {
    if (progress === 0) {
      setRender(false)
    }
    else if (progress < 0) {
      setProgress(0)
    }
  }, [progress])


  return render ? <ProgressBar id="words" value={(progress / (props.initial * 1000) * props.initial).toFixed(1)} max={props.initial}/> : null;
}


export default CooldownBar;
