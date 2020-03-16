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
    this.setResultHtml = this.setResultHtml.bind(this);
    this.state = {
      code: this.props.game.code,
      html: ''
    };
  }

  componentDidMount() {
    this.setResultHtml();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.game.id !== this.props.game.id) {
      this.setState({
        code: this.props.game.code
      });
      this.setResultHtml();
    }
  }

  setResultHtml() {
    getResultHtml(this.props.game.id)
      .then(html => {
        this.setState({
          html
        });
      })
      .catch(console.error);
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
    const {game} = this.props;
    const {code, html} = this.state;
    return (
      <main className='Game'>
        <section className='player-container'>
          <section className='player-answer'>
            <Output style={game.baseStyle} code={code} ref={answerBoxRef}/>
          </section>

          <section className='player-result'>
            <div ref={resultBoxRef} dangerouslySetInnerHTML={{__html: html}}/>
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
