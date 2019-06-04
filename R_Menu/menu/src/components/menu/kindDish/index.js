import React, { Component } from 'react';

class KindDish extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    take_dish = (row) => {
        let dish = this.props.dishs[parseInt(row)]
        this.addDishInOrder = this.props.addDishInOrder
        this.addDishInOrder(dish)
    }

    render() {
        const { title, dishs } = this.props
        return (
            <>
                <h3> {title} </h3>
                <table>
                    <tbody>
                        <tr>
                            <td> Назва </td>
                            <td> Вартість </td>
                            <td> Час очікування </td>
                        </tr>
                        {
                           dishs.map((el, row) =>
                                <tr key={row} onClick={() => this.take_dish(row)}>
                                    {
                                        <>
                                        <td> {el["name"]} </td>
                                        <td> {el["price"]} </td>
                                        <td> {el["time"]} </td>
                                        </>
                                    }
                                </tr>)
                        }
                    </tbody>
                </table>
            </>
        );
    }
}
export default KindDish;
