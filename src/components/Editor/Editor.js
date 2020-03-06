import React, {Component} from 'react';
import './Editor.scss'
import CodeEditor from "./CodeEditor/CodeEditor";

class Editor extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      code: `.box {\n\t// your code here\n}`
    };
  }

  handleChange(newValue) {
    this.setState({
      code: newValue
    });
  }

  handleSubmit() {
    this.props.onSubmit(this.state.code);
  }

  render() {
    return (
      <section className='Editor'>
        <h2>Set Background Color for box</h2>
        <CodeEditor code={this.state.code} onChange={this.handleChange}/>
        <footer>
          <button className='submit-button' onClick={this.handleSubmit}>Submit</button>
        </footer>
      </section>
    );
  }
}

export default Editor;
