import React from 'react';
import './App.css';
import Header from './components/header'
import Slider from './components/slider'
import Services from './components/services'
import Send_Request from './components/send_request'

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <hr />
      <Slider />
      <hr />
      <Services />
      <hr className="three"/>
      <Send_Request />
      <br />
    </div>
  );
}

export default App;
