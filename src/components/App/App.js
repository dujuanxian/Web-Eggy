import React, {Component} from 'react';
import logo from '../../assets/svgs/logo.svg';
import './App.scss';
import PlayerResult from "../PlayerResult/PlayerResult";
import PlayerAnswer from "../PlayerAnswer/PlayerAnswer";
import Editor from "../Editor/Editor";

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(code) {
    alert(code);
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo"/>
          <h1>SS Game</h1>
        </header>

        <main>
          <section className='player-container'>
            <section className='player-section'>
              <PlayerAnswer/>
            </section>

            <section className='player-section'>
              <PlayerResult/>
            </section>
          </section>
          <section className='editor-container'>
            <Editor onSubmit={this.handleSubmit}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
