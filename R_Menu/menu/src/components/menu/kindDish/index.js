import React, {Component} from 'react';

class KindDish extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    take_dish(row) {
        let dish = this.props.dishs[parseInt(row)]   //Не робіть так (функція повинна приймати ціле число)
        this.addDishInOrder = this.props.addDishInOrder  Не зовсім розумію, чому тут використовується props, при зустрічі обговоримо
        this.addDishInOrder(dish)
    }

    render() {
        const {title, dishs} = this.props
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
                            <tr key={row} onClick={this.take_dish.bind(this, row)}>
                                {
                                    el.map((el, cels) => Обережно з назвами
                                    <td key={cels}> 
                                        {el}
                                    </td>)
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
