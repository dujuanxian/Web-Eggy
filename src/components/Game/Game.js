import React, {Component} from 'react';
import Output from "../Output/Output";
import Editor from "../Editor/Editor";
import {getResultHtml} from "../../utils/API";
import {errorAlert, successAlert} from "../../utils/alert";
import './Game.scss';

const answerBoxRef = React.createRef();
const resultBoxRef = React.createRef();

class Game extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      code: this.props.value.code,
      html: ''
    };
  }

  componentDidMount() {
    const game = this.props.value;
    if (game.id) {
      getResultHtml(game.id)
        .then(html => {
          this.setState({
            html
          });
        })
        .catch(console.error);
    }
  }

  handleSubmit() {
    const answerStyles = getComputedStyle(answerBoxRef.current);
    const resultStyles = getComputedStyle(resultBoxRef.current.getElementsByClassName('box')[0]);
    //TODO: need to check answer result at backend
    answerStyles.backgroundColor === resultStyles.backgroundColor ?
      successAlert().then(this.props.onSuccess):
      errorAlert()
  }

  handleCodeChange(code) {
    this.setState({
      code
    });
  }

  render() {
    const game = this.props.value;
    const code = this.state.code;
    return (
      <main className='Game'>
        <section className='player-container'>
          <section className='player-answer'>
            <Output style={game.baseStyle} code={code} ref={answerBoxRef}/>
          </section>

          <section className='player-result'>
            <div ref={resultBoxRef} dangerouslySetInnerHTML={{__html: this.state.html}}/>
          </section>
        </section>
        <section className='editor-container'>
          <Editor question={game.question}
                  description={game.description}
                  code={code}
                  onChange={this.handleCodeChange}
                  onSubmit={this.handleSubmit}/>
        </section>
      </main>
    );
  }
}

export default Game;
