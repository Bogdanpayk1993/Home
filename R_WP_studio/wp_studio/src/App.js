import React from 'react';

import Header from './components/header';
import Menu from './components/menu';
import Baner from './components/baner';
import Send_request from './components/send_request';

import './App.css';

function App() {
  return (
    
    <div className="App">
      <Header />
      <Menu />
      <Baner />
      <Send_request />
    </div>
  );
}

export default App;
