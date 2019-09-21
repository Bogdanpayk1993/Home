import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header'
import Slider_And_Discription from './components/slider_and_description'
import Services from './components/services'
import Send_Request from './components/send_request'
import Slider_And_Description from './components/slider_and_description';

function App() {
  var width = document.documentElement.clientWidth
  console.log(width)
  return (
    <div className="App">
      <Header />
      {
        <BrowserRouter>
          <nav>
            <Link to="/" className="link">Головна</Link>
            <Link to="/services" className="link">Послуги</Link>
            <Link to="/contacts" className="link">Контакти</Link>
          </nav>
          <div>
            <Switch>
              <Route path="/" exact component={Slider_And_Description} />
              <Route path="/services" exact component={Services} />
              <Route path="/contacts" exact component={Send_Request} />
              <Route component={Slider_And_Description} />
            </Switch>
          </div>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
