import React from 'react';
import './Editor.scss'
import CodeEditor from "./CodeEditor/CodeEditor";

function Editor(props) {
  const { question, description, code } = props.game;
  return (
    <section className='Editor'>
      <h2>{question}</h2>
      <p dangerouslySetInnerHTML={{__html: description}}/>
      <CodeEditor code={`${code}`} onChange={props.onChange}/>
      <footer>
        <button className='submit-button' onClick={props.onSubmit}>Submit</button>
      </footer>
    </section>
  );
}

export default Editor;
