import React, { Component } from 'react';
import KindDish from './kindDish/index';
import Order from './order/index';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: []
        }
        this.order = []
    }

    addDishInOrder = (dish) => {
        let ind = this.order.indexOf(dish)

        if (ind == -1)
        {
            this.order.push(dish)

            const { order } = this.state
            this.setState({
                order: [...order, {...[dish[0], 1, dish[1]]}]
            })
        }
        else
        {
            const { order } = this.state
            order[ind][1] = parseInt(order[ind][1]) + 1 
            this.setState({
                order: [...order]
            })
        }
    }

    render() {
        const { first_dish, second_dish } = this.props
        return (
            <>
                <KindDish title="Перщі страви" dishs={first_dish} addDishInOrder={this.addDishInOrder} />
                <KindDish title="Другі страви" dishs={second_dish} addDishInOrder={this.addDishInOrder} />
                {
                    this.state.order.length > 0 ?
                        (
                            <Order order={this.state.order} />
                        )
                        :
                        (
                            null
                        )
                }
            </>
        );
    }
}

export default Menu;