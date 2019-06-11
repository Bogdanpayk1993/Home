import React from 'react';
import './App.css';
import Shop from './component/shop'

function App() {
  return (
    <div>
      <h1> Shop </h1>
      <hr />

      <Shop product={[{
          "statys" : "ТОП ПРОДАЖ",
          "image" : "./image/dell_inspiron_3573.jpg",
          "stock" : "Акция! Лучшие ноутбуки начального уровня!",
          "description" : "Ноутбук Dell Inspiron 3573 (N4000\\4\\500\\Lin) Black Суперцена!!!",
          "price" : "5 999грн"
        },
        {
          "statys" : "СУПЕРЦЕНА",
          "image" : "./image/dell_inspiron_3573.jpg",
          "stock" : "Акция! Лучшие ноутбуки начального уровня!",
          "description" : "Ноутбук Dell Inspiron 3573 (N4000\\4\\500\\Lin) Black Суперцена!!!",
          "price" : "5 999грн"
        },
        {
          "statys" : "ТОП ПРОДАЖ",
          "image" : "./image/dell_inspiron_3573.jpg",
          "stock" : "Акция! Лучшие ноутбуки начального уровня!",
          "description" : "Ноутбук Dell Inspiron 3573 (N4000\\4\\500\\Lin) Black Суперцена!!!",
          "price" : "5 999грн"
        },
        {
          "statys" : "ТОП ПРОДАЖ",
          "image" : "./image/dell_inspiron_3573.jpg",
          "stock" : "Акция! Лучшие ноутбуки начального уровня!",
          "description" : "Ноутбук Dell Inspiron 3573 (N4000\\4\\500\\Lin) Black Суперцена!!!",
          "price" : "5 999грн"
        },
        {
          "statys" : "СУПЕРЦЕНА",
          "image" : "./image/dell_inspiron_3573.jpg",
          "stock" : "Акция! Лучшие ноутбуки начального уровня!",
          "description" : "Ноутбук Dell Inspiron 3573 (N4000\\4\\500\\Lin) Black Суперцена!!!",
          "price" : "5 999грн"
        },
        {
          "statys" : "ТОП ПРОДАЖ",
          "image" : "./image/dell_inspiron_3573.jpg",
          "stock" : "Акция! Лучшие ноутбуки начального уровня!",
          "description" : "Ноутбук Dell Inspiron 3573 (N4000\\4\\500\\Lin) Black Суперцена!!!",
          "price" : "5 999грн"
        }]} />

    </div>
  );
}

export default App;
