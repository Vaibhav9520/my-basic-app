import React from 'react';
import Cricket from './Cricket';
import Football from './Football';

function Player() {
  const cricketPlayers = [
    { name: 'Virat', country: 'India' },
    { name: 'Rohit', country: 'India' },
    { name: 'Hardik', country: 'India' },
    { name: 'Dhoni', country: 'India' },
  ];

  const footballPlayers = [
    { name: 'Virat', country: 'India' },
    { name: 'John', country: 'America' },
    { name: 'Elish', country: 'Africa' },
    { name: 'Green', country: 'England' },
  ];

  return (
    <div>
      <h1>Player List:</h1>
      <Cricket player1={cricketPlayers[0]} player2={cricketPlayers[1]} player3={cricketPlayers[2]} player4={cricketPlayers[3]} />
      
      <Football player1={footballPlayers[0]} player2={footballPlayers[1]} player3={footballPlayers[2]} player4={footballPlayers[3]} />
    </div>
  );
}

export default Player;
