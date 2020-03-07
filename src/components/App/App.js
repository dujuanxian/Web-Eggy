import React, {Component} from 'react';
import logo from '../../assets/svgs/logo.svg';
import './App.scss';
import Output from "../Output/Output";
import Editor from "../Editor/Editor";

const answerBoxRef = React.createRef();
const resultBoxRef = React.createRef();

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.state = {
      answer: `.box {\n\t// your code here\n}`,
      result: '.box {background-color: indianred}'
    };
  }

  handleSubmit() {
    const answerStyles = getComputedStyle(answerBoxRef.current);
    const resultStyles = getComputedStyle(resultBoxRef.current);
    answerStyles.backgroundColor === resultStyles.backgroundColor ?
      alert('Success') :
      alert('Failure')
  }

  handleCodeChange(code) {
    this.setState({
      answer: code
    });
  }

  render() {
    const { answer, result } = this.state;

    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo"/>
          <h1>SS Game</h1>
        </header>

        <main>
          <section className='player-container'>
            <section className='player-answer'>
              <Output code={answer} ref={answerBoxRef}/>
            </section>

            <section className='player-result'>
              <Output code={result} ref={resultBoxRef}/>
            </section>
          </section>
          <section className='editor-container'>
            <Editor code={answer}
                    onChange={this.handleCodeChange}
                    onSubmit={this.handleSubmit}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
