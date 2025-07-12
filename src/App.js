import './App.css';
import React from 'react';
import Header from './components/Header';
import Template from './components/Template';
import Mainbody from './components/Mainbody';

function App() {
  return (
    <div className="App">
      <Header />
      <Template />
      <Mainbody />
    </div>
  );
}

export default App;
