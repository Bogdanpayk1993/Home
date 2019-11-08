import React, { Component } from 'react';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="first">
                <p> Наші телефони: <select>
                        <option> 050 803 28 53 </option>
                        <option> 063 346 49 62 </option>
                    </select>
                </p>
            </div>
            <div className="second">
                <p> Ми працюємо: <strong>пн</strong>-<strong>пт</strong> 10:00-18:00; <strong>сб</strong> 10:00-16:00; <strong>нд</strong> - вихідний </p>
            </div>
            <div className="third">
                <p> Наша пошта: <strong className="email"> wp_studio@gmail.com </strong> </p>
            </div>
        </div>
    )
}

export default Header