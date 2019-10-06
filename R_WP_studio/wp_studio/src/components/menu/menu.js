import React, { Component } from 'react';
import './menu.css';

const Menu = () => {
    return ( 
        <div className="menu">
            <div className="first">
                <h1> WPstudio </h1>
            </div> 
            <div className="second">
                <a> Головна </a>
                <a> Класифікація </a>
                <a> Шаблони </a>
                <a> Переваги </a>
                <a> Портфоліо </a>
            </div>
        </div>
    )
}

export default Menu