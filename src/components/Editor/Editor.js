import React from 'react';
import './Editor.scss'
import CodeEditor from "./CodeEditor/CodeEditor";

function Editor(props) {
  return (
    <section className='Editor'>
      <h2>Set Background Color for box</h2>
      <CodeEditor/>
    </section>
  );
}

export default Editor;
