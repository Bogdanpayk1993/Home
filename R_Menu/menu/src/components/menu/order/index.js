import React, { Component } from 'react';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        const {order} = this.props

        var sum = 0

        order.forEach((el) => {sum += el[1] * el[2]});

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
                                            <td> {el[0]} </td>
                                            <td> {el[1]} </td>
                                            <td> {el[2]} </td>
                                        </>
                                    }
                                </tr>)
                        }
                        <tr>
                            <td colSpan="2"> Загальна вратість: </td>
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