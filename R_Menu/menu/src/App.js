import React from 'react';
import './App.css';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <h1> Меню </h1>
      <Menu
        first_dish={
          [["Суп з фрікаделькамі", "50", "10"],
          ["Cуп з галушками", "40", "10"],
          ["Борщ", "65", "10"]]}
        second_dish={
          [["Пюре з відбивною", "50", "25"],
          ["Макарони з котлетою", "40", "20"],
          ["Млинці з яблукими", "45", "10"]]}
      />
    </div>
  );
}

export default App;
