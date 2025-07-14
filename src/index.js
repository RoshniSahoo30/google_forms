import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './components/StateProvider';
import Reducer, { initialState } from './components/Reducer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={Reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
