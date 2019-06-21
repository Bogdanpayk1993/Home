import React,{Component} from 'react';
import './App.css';
import renderRegularsList from './RegularsApp'

class App extends Component {
  render(){
  return (
    <div className="App">
      {renderRegularsList()}
    </div>
  );
  }
}

export default App;
