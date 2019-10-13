import React, { Fragment } from 'react';

import './ProgressBar.css';


function ProgressBar(props) {
  return (
    <Fragment>
      <progress
        className={'ProgressBar'+ props.id}
        value={props.value}
        max={props.max}
      />
      <span className="ProgressStat">{props.value +'/'+ props.max}</span>
    </Fragment>
  );
}

export default ProgressBar;
