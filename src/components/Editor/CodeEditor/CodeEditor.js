import React, {Component} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow";
import './CodeEditor.scss';

class CodeEditor extends Component {
  static onLoad(editor) {
    editor.renderer.setPadding(20);
    editor.renderer.setScrollMargin(20);
  }

  render() {
    return (
      <div className='CodeEditor'>
        <AceEditor
          mode="css"
          theme="tomorrow"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          width="100%"
          height="100%"
          onLoad={CodeEditor.onLoad}
          value={`.box {
  // your code here
}`}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}/>
      </div>
    );
  }
}

export default CodeEditor;
