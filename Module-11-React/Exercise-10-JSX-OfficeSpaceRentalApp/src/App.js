import React from 'react';
import './App.css';
import offices from './data';
import OfficeSpace from './OfficeSpace';

function App() {
  const element = "Office Space";

  return (
    <div>
      <h1>{element} , at Affordable Range </h1>
      {offices.map((item, index) => (
        <OfficeSpace key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
