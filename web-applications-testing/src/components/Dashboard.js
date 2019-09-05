import React from 'react';
import '../App.css';

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <button onClick={props.addStrike}>Strike</button>
      <button onClick={props.addBall}>Ball</button>
      <button onClick={props.addFoul}>Foul</button>
      <button onClick={props.addHit}>Hit</button>
    </div>
  );
}

export default Dashboard;
