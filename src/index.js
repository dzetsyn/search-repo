import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  console.log = () => { };
  console.error = () => { };
  console.warn = () => { };
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
