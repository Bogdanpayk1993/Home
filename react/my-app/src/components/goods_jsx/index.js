import React, { Component } from 'react';

class Goods_jsx extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {name, prise, counterday, rating} = this.props
        return (
            <>
                <h1> Товар </h1>
                <samp> Назва: {name} </samp>
                <br></br>
                <samp> Ціна: {prise}грн</samp>
                <br></br>
                <samp> Кількість днів придатності: {counterday} </samp>
                <br></br>
                <samp> Рейтинг: {rating} </samp>
                <br></br>
            </>
        );
    }
}
 
export default Goods_jsx;