import React from 'react';
import './App.css';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <h1> Меню </h1>
      <Menu
        first_dish={[
          {
            "name" : "Суп з фрікаделькамі",
            "price" : "50",
            "time" : "10"
          },

          {
            "name" : "Cуп з галушками",
            "price" : "40",
            "time" : "10"
          },

          {
            "name" : "Борщ",
            "price" : "65",
            "time" : "10"
          }
        ]}
        second_dish={[
          {
            "name": "Пюре з відбивною",
            "price": "50",
            "time": "25"
          },

          {
            "name": "Макарони з котлетою",
            "price": "40",
            "time": "20"
          },

          { 
            "name" : "Млинці з яблукими", 
            "price" : "45", 
            "time" : "10" 
          }
       ]}
      />
    </div>
  );
}

export default App;
