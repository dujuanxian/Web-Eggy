import React, {Component} from 'react';
import Output from "../Output/Output";
import Editor from "../Editor/Editor";
import {getResultHtml} from "../../utils/API";
import './Game.scss';
import {parseStyle, processStyle} from "../../utils/cssParser";

const answerBoxRef = React.createRef();

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
    processStyle(this.state.code)
      .then(cssText => {
        answerBoxRef.current.style.cssText = cssText;
        const styleObj = parseStyle(answerBoxRef.current.style);
        console.log(styleObj)
      });
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
            <Output style={game.baseStyle} ref={answerBoxRef}/>
          </section>

          <section className='player-result'>
            <div dangerouslySetInnerHTML={{__html: html}}/>
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
