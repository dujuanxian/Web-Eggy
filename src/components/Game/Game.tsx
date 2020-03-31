import React, {Component} from 'react';
import Editor from "../Editor/Editor";
import {getResultHtml} from "../../utils/API";
import './Game.scss';
import {parseStyle, processStyle} from "../../utils/cssParser";
import Output from "../Output/Output";

interface Props {
  // game: { code: string, id: number, baseStyle: string, question: string, description: string },
  game: any,
  onSuccess: () => void
}

interface State {
  code: string,
  html: string
}

const answerBoxRef = React.createRef<any>();

class Game extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setResultHtml = this.setResultHtml.bind(this);
    this.state = {
      code: this.props.game.code,
      html: ''
    };
  }

  public componentDidMount() {
    this.setResultHtml();
  }

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.game.id !== this.props.game.id) {
      this.setState({
        code: this.props.game.code
      });
      this.setResultHtml();
    }
  }

  private setResultHtml() {
    getResultHtml(this.props.game.id)
      .then(html => {
        this.setState({
          html
        });
      })
      .catch(console.error);
  }

  private handleSubmit() {
    processStyle(this.state.code)
      .then((cssText: string) => {
        let current = answerBoxRef.current;

        if (!current) {
          return;
        }

        current.style.cssText = cssText;
        const styleObj = parseStyle(current.style);
        console.log(styleObj)
      });
  }

  handleCodeChange(code: string) {
    this.setState({
      code
    });
  }

  render() {
    const {game} = this.props;
    const {code, html} = this.state;

    // @ts-ignore
    const output = <Output style={game.baseStyle} ref={answerBoxRef}/>;

    return (
      <main className='Game'>
        <section className='player-container'>
          <section className='player-answer'>
            {output}
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
