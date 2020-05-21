import React from 'react';
import logo from './logo.svg';
import Eightball from './Eightball';
import Boxes from "./Boxes";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ask the Magic 8 Ball</h1>
      <Eightball/>
      <h1>Colorful Boxes</h1>
      <Boxes/>
    </div>
  );
}

export default App;
