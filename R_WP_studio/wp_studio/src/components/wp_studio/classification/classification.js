import React, { Component } from 'react';
import Tariff from './tariff/tariff';
import './classification.css'

class Classification extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { Order } = this.props

        return (
            <div className="classification">
                <hr />
                <h2> Тарифи </h2>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Tariff image="startup.png" name="Startup" design="Готовий шаблон" time="Від 5 днів" domen="Домонне ім'я на рік" hosting="Хостінг на рік" price="від 1350грн" Order={Order} />
                            </td>
                            <td>
                                <Tariff image="business.png" name="Business" design="Готовий шаблон з доопрацюваннями" time="Від 10 днів" domen="Домонне ім'я на рік" hosting="Хостінг на рік" price="від 2800грн" Order={Order} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
            </div >
        );
    }
}

export default Classification;
