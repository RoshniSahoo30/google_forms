import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from './components/StateProvider';
import Reducer, { initialState } from './components/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={Reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
