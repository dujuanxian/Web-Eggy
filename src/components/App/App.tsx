import * as React from 'react';
import Game from "../Game/Game";
import './App.scss';
import {getGames} from "../../utils/API";

interface State {
  games: Array<Object>,
  current: number
}

interface Props {
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

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

  private handleGameSuccess() {
    const current = this.state.current + 1;

    this.setState({
      current
    });
  }

  render() {
    const {games, current} = this.state;
    const logo = require("../../assets/svgs/logo.svg"); //TODO: use import

    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo"/>
          <h1>SS Game</h1>
        </header>

        {games[current] ?
          <Game game={games[current]}
                onSuccess={this.handleGameSuccess}/> : null
        }
      </div>
    );
  }
}

export default App;
