import React, { Component } from 'react';

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthly_mayments: NaN,
            sum_overpayment: NaN
        }
    }

    calculation = () => {
        let sum_credit = parseFloat(this.refs.sum_credit.value)
        let count_month = parseFloat(this.refs.count_month.value)

        this.setState({
            monthly_mayments: (sum_credit + sum_credit / 4) / count_month,
            sum_overpayment: sum_credit / 4
        })
    }

    render() {
        return (
            <>
                <label>
                    Сума кредиту - <input type="number" ref="sum_credit" />
                </label>
                <label>
                    Кількість місяців - <input type="number" ref="count_month" />
                </label>
                <button onClick={this.calculation}> Розрахувати </button>
                {
                    !isNaN(this.state.monthly_mayments) ?
                        (
                            <>
                                <br />
                                <samp>
                                    Сума щомісячного платежу - {this.state.monthly_mayments}
                                </samp>
                                <br />
                                <samp>
                                    Сума переплати - {this.state.sum_overpayment}
                                </samp>
                            </>
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

export default Calc;