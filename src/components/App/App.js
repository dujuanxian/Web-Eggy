import React, {Component} from 'react';
import logo from '../../assets/svgs/logo.svg';
import './App.scss';
import Output from "../Output/Output";
import Editor from "../Editor/Editor";
import {errorAlert, successAlert} from "../../utils/alert";
import {getCSSGames} from "../../utils/API";

const answerBoxRef = React.createRef();
const resultBoxRef = React.createRef();

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.state = {
      games: [],
      current: 0
    };
  }

  componentDidMount() {
    getCSSGames()
      .then(response => {
        this.setState({
          games: response
        });
      });
  }

  static handleSubmit() {
    const answerStyles = getComputedStyle(answerBoxRef.current);
    const resultStyles = getComputedStyle(resultBoxRef.current);
    answerStyles.backgroundColor === resultStyles.backgroundColor ?
      successAlert() :
      errorAlert()
  }

  handleCodeChange(code) {
    const games = this.state.games;
    games[this.state.current].code = code;
    this.setState({
      games
    });
  }

  render() {
    const { games, current } = this.state;
    const currentGame = games.length > 0 ? games[current] : {};

    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo"/>
          <h1>SS Game</h1>
        </header>

        <main>
          <section className='player-container'>
            <section className='player-answer'>
              <Output code={currentGame.code} ref={answerBoxRef}/>
            </section>

            <section className='player-result'>
              <Output code={currentGame.result} ref={resultBoxRef}/>
            </section>
          </section>
          <section className='editor-container'>
            <Editor game={currentGame}
                    onChange={this.handleCodeChange}
                    onSubmit={App.handleSubmit}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
