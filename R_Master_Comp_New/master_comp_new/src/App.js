import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header'
import Slider from './components/slider'
import Services from './components/services'
import Send_Request from './components/send_request'
import Slider_And_Services from './components/slider_and_services'

function App() {
  var width = document.documentElement.clientWidth
  console.log(width)
  return (
    <div className="App">
      <Header />
      {
        width > 600 ?
          (
            <BrowserRouter>
              <nav>
                <Link to="/">Головна</Link>
                <Link to="/services">Послуги</Link>
                <Link to="/contacts">Контакти</Link>
              </nav>
              <div>
                <Switch>
                  <Route path="/" exact component={Slider} />
                  <Route path="/services" exact component={Services} />
                  <Route path="/contacts" exact component={Send_Request} />
                  <Route component={Slider} />
                </Switch>
              </div>
            </BrowserRouter>
          )
          :
          (
            <BrowserRouter>
              <nav>
                <Link to="/">Головна</Link>
                <Link to="/contacts">Контакти</Link>
              </nav>
              <br />
              <div>
                <Switch>
                  <Route path="/" exact component={Slider_And_Services} />
                  <Route path="/contacts" exact component={Send_Request} />
                  <Route component={Slider_And_Services} />
                </Switch>
              </div>
            </BrowserRouter>
          )
      }
    </div>
  );
}

export default App;
