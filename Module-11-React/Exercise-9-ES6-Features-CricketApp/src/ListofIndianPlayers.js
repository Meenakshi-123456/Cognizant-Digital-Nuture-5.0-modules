import React from 'react';

function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <div>
      {IndianPlayers.map((item) => (
        <li key={item}>Mr. {item}</li>
      ))}
    </div>
  );
}

export default ListofIndianPlayers;
