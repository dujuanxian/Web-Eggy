import * as React from 'react';
import CodeEditor from "./CodeEditor/CodeEditor";
import './Editor.scss'

interface Props {
  question?: string,
  description: string,
  code: string,
  onChange: (code: string) => void,
  onSubmit: () => void
}

const Editor = (props: Props) => {
  const {question, description, code} = props;

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
};

export default Editor;
