import React, { Component } from 'react';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        const {order} = this.props

        var sum = 0

        order.forEach((el) => {sum += el["counter"] * el["price"]});

        return (
            <>
                <h2> Рахунок </h2>
                <table>
                    <tbody>
                        <tr>
                            <td> Назва </td>
                            <td> Кількість порцій </td>
                            <td> Вратість </td>
                        </tr>
                        {
                            order.map((el, row) =>
                                <tr key={row}>
                                    {
                                        <>
                                            <td> {el["name"]} </td>
                                            <td> {el["counter"]} </td>
                                            <td> {el["price"]} </td>
                                        </>
                                    }
                                </tr>)
                        }
                        <tr>
                            <td colSpan="2"> <strong> Загальна вратість: </strong> </td>
                            <td> {sum} </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
            </>
        );
    }
}

export default Order;