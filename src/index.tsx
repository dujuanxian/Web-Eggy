import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from "./components/App/App";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
