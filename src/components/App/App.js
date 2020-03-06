import React from 'react';
import logo from '../../assets/svgs/logo.svg';
import './App.scss';
import PlayerResult from "../PlayerResult/PlayerResult";
import PlayerAnswer from "../PlayerAnswer/PlayerAnswer";
import Editor from "../Editor/Editor";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>SS Game</h1>
      </header>

      <main>
        <section className='player-container'>
          <PlayerResult/>
          <PlayerAnswer/>
        </section>
        <section className='editor-container'>
          <Editor/>
        </section>
      </main>
    </div>
  );
}

export default App;
