import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import callback from './callback';
import home from './home';


function App() {

  return (
    <div className="App" >
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={home} exact />
          <Route exact path='/callback' component={callback} exact />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;