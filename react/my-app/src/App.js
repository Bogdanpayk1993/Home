import React from 'react';
import logo from './logo.svg';
import './App.css';
import Goods_jsx from './components/goods_jsx'
import Day from './components/information_about_film'

function App() {
  return (
    <div className="App">
      <Goods_jsx name="Молоко" prise="30" counterday="10" rating="5" />
      <hr></hr>
      <Goods_jsx name="Масло" prise="35" counterday="20" rating="3" />
      <hr></hr>
      <Day name_day="Четвер" date="23.05" films={
        [["10.00", "Віллі і таємнича планета", "60"],
        ["11.30", "Анаднін", "60"],
        ["13.40", "Річард говорить \"прощавай\"", "60"],
        ["15.10", "Брайтбьорн", "60"],
        ["16.50", "Річард говорить \"прощавай\"", "60"],
        ["18.30", "Анаднін", "60"],
        ["20.50", "Брайтбьорн", "60"],
        ["22.20", "Джон Уік 3", "60"]]} />
      <hr></hr>
      <Day name_day="П'ятниця" date="24.05" films={
        [["10.00", "Віллі і таємнича планета", "60"],
        ["11.30", "Анаднін", "60"],
        ["13.40", "Річард говорить \"прощавай\"", "60"],
        ["15.10", "Брайтбьорн", "60"],
        ["16.50", "Річард говорить \"прощавай\"", "60"],
        ["18.30", "Анаднін", "60"],
        ["20.50", "Брайтбьорн", "60"],
        ["22.20", "Джон Уік 3", "60"]]} />
      <hr></hr>
    </div>
  );
}
export default App;
