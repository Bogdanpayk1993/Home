import React, { Component } from 'react';
import './product.css'
import { DataConsumer } from '../provider'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { statys, image, stock, description, price } = this.props
        return (
            <DataConsumer>
                {
                    (data) => (
                        <div className="product">
                            <span style={{backgroundColor: data[0], color: data[1]}}> {statys} </span>
                            <img style={{width: data[2]}} src={image} />
                            <span style={{color: data[3]}}> {stock} </span>
                            <br/>
                            <span style={{color: data[4]}}> {description} </span>
                            <br/>
                            <span style={{backgroundColor: data[5], color: data[6]}}> {price} </span>
                            <button> Купити </button>
                        </div>
                    )
                }
            </DataConsumer>
        );
    }
}

export default Product;