import React, {Component} from 'react';
import logo from '../../assets/svgs/logo.svg';
import './App.scss';
import Output from "../Output/Output";
import Editor from "../Editor/Editor";
import {errorAlert, successAlert} from "../../utils/alert";
import {getCSSGames, getCSSResult} from "../../utils/API";

const answerBoxRef = React.createRef();
const resultBoxRef = React.createRef();

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.state = {
      games: [],
      current: 0,
      html: ''
    };
  }

  componentDidMount() {
    getCSSGames()
      .then(response => {
        this.setState({
          games: response
        });

        getCSSResult(response[this.state.current].id)
          .then(html => {
            this.setState({
              html
            });
          })
          .catch(console.error);
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
    const currentGame = this.state.games.length > 0 ?
      this.state.games[this.state.current] : {};

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
              <div dangerouslySetInnerHTML={{__html: this.state.html}}/>
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
