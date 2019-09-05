import React from 'react';
import '../App.css';

function Display(props) {

  return (
    <div className="Display">
     <p>Balls: {props.ballCount}</p>
     <p>Strikes: {props.strikeCount}</p>
    </div>
  );
}

export default Display;
