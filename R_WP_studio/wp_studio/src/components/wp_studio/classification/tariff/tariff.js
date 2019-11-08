import React, { Component } from 'react';
import './tarrif.css';

class Tariff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    openOrder = () => {
        const { name, Order } = this.props
        if (name == "Startup") {
            Order(2)
        }
        else {
            Order(3)
        }
    }


    render() {
        const { image, name, design, time, domen, hosting, price } = this.props
        return (
            <div className="tarrif">
                <img src={"./image/" + image} />
                <div>
                    <h2> {name} </h2>
                    <h3 className="parameters"> {design} </h3>
                    <h3 className="parameters"> {time} </h3>
                    <h3 className="parameters"> {domen} </h3>
                    <h3 className="parameters"> {hosting} </h3>
                    <h2> {price} </h2>
                    <button onClick={this.openOrder} className="parameters"> Замовити </button>
                </div>
            </div >
        )
    }
}

export default Tariff;