import React from 'react';
import './Editor.scss'

function Editor(props) {
  return (
    <section className='Editor'>
      <h2>Set Background Color for box</h2>
      <code>
        {
          `.box {
            // your code here!
          }`
        }
      </code>
    </section>
  );
}

export default Editor;
