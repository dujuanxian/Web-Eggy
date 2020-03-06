import React from 'react';
import logo from '../../assets/svgs/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>SS Game</h1>
      </header>
    </div>
  );
}

export default App;
