import * as React from 'react';
import './App.scss';
import {getGames} from "../../utils/API";
import Game from "../Game/Game";

interface GameProps {
  code: string,
  id: number,
  baseStyle: string,
  question: string,
  description: string
}

interface State {
  games: Array<GameProps>,
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

  public componentDidMount() {
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
