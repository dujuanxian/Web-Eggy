import React, {Component} from 'react';
import logo from '../../assets/svgs/logo.svg';
import './App.scss';
import Output from "../Output/Output";
import Editor from "../Editor/Editor";
import {errorAlert, successAlert} from "../../utils/alert";
import {getGame, getResultHtml} from "../../utils/API";

const answerBoxRef = React.createRef();
const resultBoxRef = React.createRef();

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.state = {
      game: {},
      current: 1,
      html: ''
    };
  }

  componentDidMount() {
    getGame(this.state.current)
      .then(game => {
        this.setState({
          game
        });
      });
    getResultHtml(this.state.current)
      .then(html => {
        this.setState({
          html
        });
      })
      .catch(console.error);
  }

  static handleSubmit() {
    const answerStyles = getComputedStyle(answerBoxRef.current);
    const resultStyles = getComputedStyle(resultBoxRef.current);
    answerStyles.backgroundColor === resultStyles.backgroundColor ?
      successAlert() :
      errorAlert()
  }

  handleCodeChange(code) {
    this.setState({
      game: {
        ...this.state.game,
        code
      }
    });
  }

  render() {
    const {game} = this.state;

    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo"/>
          <h1>SS Game</h1>
        </header>

        <main>
          <section className='player-container'>
            <section className='player-answer'>
              <Output code={game.code} ref={answerBoxRef}/>
            </section>

            <section className='player-result'>
              <div ref={resultBoxRef} dangerouslySetInnerHTML={{__html: this.state.html}}/>
            </section>
          </section>
          <section className='editor-container'>
            <Editor game={game}
                    onChange={this.handleCodeChange}
                    onSubmit={App.handleSubmit}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
