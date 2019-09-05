import React from 'react';
import '../App.css';

function Dashboard(props) {
  console.log(props)
  return (
    <div className="Dashboard">
      <button onClick={props.addStrike}>Strike</button>
      <button onClick={props.addBall}>Ball</button>
      <button>Foul</button>
      <button>Hit</button>
    </div>
  );
}

export default Dashboard;
