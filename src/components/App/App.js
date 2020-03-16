import React, {Component} from 'react';
import logo from '../../assets/svgs/logo.svg';
import './App.scss';
import {getGames} from "../../utils/API";
import Game from "../Game/Game";

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      games: [],
      current: 0
    };
    this.handleGameSuccess = this.handleGameSuccess.bind(this);
  }

  componentDidMount() {
    getGames()
      .then(games => {
        this.setState({
          games
        });
      });
  }

  handleGameSuccess() {
    const current = this.state.current + 1;
    this.setState({
      current
    });
  }

  render() {
    const { games, current } = this.state;

    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo"/>
          <h1>SS Game</h1>
        </header>

        { games[current] ?
          <Game game={games[current]}
                onSuccess={this.handleGameSuccess} /> : null
        }
      </div>
    );
  }
}

export default App;
