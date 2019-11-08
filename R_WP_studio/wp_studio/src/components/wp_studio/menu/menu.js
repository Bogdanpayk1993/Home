import React, { Component } from 'react';
import './menu.css';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    open_order = () => {
        const { Order } = this.props
        Order(1)
    }

    render() {
        return (
            <div className="menu">
                <h1> WPstudio </h1>
                <a> Головна </a>
                <a> Про нас </a>
                <a> Тарифи </a>
                <button onClick={this.open_order}> Замовити </button>
            </div>
        );
    }
}

export default Menu;