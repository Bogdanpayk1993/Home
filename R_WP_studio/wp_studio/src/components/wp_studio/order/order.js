import React, { Component } from 'react';
import './order.css'
import base from '../base/base'

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            price: "1350грн",
            regime: this.props.regime,
            www_name: "",
            first_color: "",
            second_color: "",
            discription: "",
            client_name: "",
            client_email: "",
            client_phone: "",
            order:[]
        }

        this.onRadioChange = this.onRadioChange.bind(this)
        this.regime = this.props.regime
    }

    componentDidMount() {
        this.db=base.syncState(`order`, {
            context: this,
            state: 'order',
            asArray: true
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.db)
    }

    closed_order = () => {
        const { Order } = this.props
        Order(0)
    }

    onRadioChange(event) {
        this.setState({
            price: event.target.value,
            regime: this.state.regime,
            www_name: this.state.www_name,
            first_color: this.state.first_color,
            second_color: this.state.second_color,
            discription: this.state.discription,
            client_name: this.state.client_name,
            client_email: this.state.client_email,
            client_phone: this.state.client_phone,
            order: this.state.order
        })
    }

    change_regime = (regimes) => {
        this.setState({
            price: this.state.price,
            regime: regimes,
            www_name: this.state.www_name,
            first_color: this.state.first_color,
            second_color: this.state.second_color,
            discription: this.state.discription,
            client_name: this.state.client_name,
            client_email: this.state.client_email,
            client_phone: this.state.client_phone,
            order: this.state.order
        })
    }

    personal_information = () => {
        if (this.state.www_name != "" && this.state.first_color != "" && this.state.second_color != "" && this.state.discription != "") {
            this.change_regime(4)
        } else {
            if (this.state.www_name == "") {
                this.refs.www_name.style.borderColor = "red"
            } else {
                this.refs.www_name.style.borderColor = "white"
            } 
            if (this.state.first_color == "") {
                this.refs.first_color.style.borderColor = "red"
            } else  {
                this.refs.first_color.style.borderColor = "white"
            }
            if (this.state.second_color == "") {
                this.refs.second_color.style.borderColor = "red"
            } else {
                this.refs.second_color.style.borderColor = "white"
            }
            if (this.state.discription == "") {
                this.refs.discription.style.borderColor = "red"
            } else {
                this.refs.discription.style.borderColor = "grey"
            }
        }
    }

    back = () => {
        this.change_regime(this.regime)
    }

    order = () => {
        if (this.state.client_name != "" && this.state.client_email != "" && this.state.client_phone != "") {
            this.change_regime(5)
            this.setState({
                order:[...this.state.order, {price:this.state.price,www_name:this.state.www_name,first_color:this.state.first_color,second_color:this.state.second_color,discription:this.state.discription,client_name:this.state.client_name,client_email:this.state.client_email,client_phone:this.state.client_phone}]
            })
        }
        else {
            if (this.state.client_name == "") {
                this.refs.client_name.style.borderColor = "red"
            } else {
                this.refs.client_name.style.borderColor = "white"
            }
            if (this.state.client_email == "") {
                this.refs.client_email.style.borderColor = "red" 
            } else {
                this.refs.client_email.style.borderColor = "white"
            }
            if (this.state.client_phone == "") {
                this.refs.client_phone.style.borderColor = "red"
            } else {
                this.refs.client_phone.style.borderColor = "white"
            }
        }
    }

    www_name_Change = (event) => {
        this.setState({
            price: this.state.price,
            regime: this.state.regime,
            www_name: event.target.value,
            first_color: this.state.first_color,
            second_color: this.state.second_color,
            discription: this.state.discription,
            client_name: this.state.client_name,
            client_email: this.state.client_email,
            client_phone: this.state.client_phone,
            order: this.state.order
        })
        if (this.refs.www_name.value != "") {
            this.refs.www_name.style.borderColor = "white"
        } else {
            this.refs.www_name.style.borderColor = "red"
        }
    }

    first_color_Change = (event) => {
        this.setState({
            price: this.state.price,
            regime: this.state.regime,
            www_name: this.state.www_name,
            first_color: event.target.value,
            second_color: this.state.second_color,
            discription: this.state.discription,
            client_name: this.state.client_name,
            client_email: this.state.client_email,
            client_phone: this.state.client_phone,
            order: this.state.order
        })
        if (this.refs.first_color.value != "") {
            this.refs.first_color.style.borderColor = "white"
        } else {
            this.refs.first_color.style.borderColor = "red"
        }
    }

    second_color_Change = (event) => {
        this.setState({
            price: this.state.price,
            regime: this.state.regime,
            www_name: this.state.www_name,
            first_color: this.state.first_color,
            second_color: event.target.value,
            discription: this.state.discription,
            client_name: this.state.client_name,
            client_email: this.state.client_email,
            client_phone: this.state.client_phone,
            order: this.state.order
        })
        if (this.refs.second_color.value != "") {
            this.refs.second_color.style.borderColor = "white"
        } else {
            this.refs.second_color.style.borderColor = "red"
        }
    }

    discription_Change = (event) => {
        this.setState({
            price: this.state.price,
            regime: this.state.regime,
            www_name: this.state.www_name,
            first_color: this.state.first_color,
            second_color: this.state.second_color,
            discription: event.target.value,
            client_name: this.state.client_name,
            client_email: this.state.client_email,
            client_phone: this.state.client_phone,
            order: this.state.order
        })
        if (this.refs.discription.value != "") {
            this.refs.discription.style.borderColor = "white"
        } else {
            this.refs.discription.style.borderColor = "red"
        }
    }

    client_name_Change = (event) => {
        this.setState({
            price: this.state.price,
            regime: this.state.regime,
            www_name: this.state.www_name,
            first_color: this.state.first_color,
            second_color: this.state.second_color,
            discription: this.state.discription,
            client_name: event.target.value,
            client_email: this.state.client_email,
            client_phone: this.state.client_phone,
            order: this.state.order
        })
        if (this.refs.client_name.value != "") {
            this.refs.client_name.style.borderColor = "white"
        } else {
            this.refs.client_name.style.borderColor = "red"
        }
    }

    client_email_Change = (event) => {
        this.setState({
            price: this.state.price,
            regime: this.state.regime,
            www_name: this.state.www_name,
            first_color: this.state.first_color,
            second_color: this.state.second_color,
            discription: this.state.discription,
            client_name: this.state.client_name,
            client_email: event.target.value,
            client_phone: this.state.client_phone,
            order: this.state.order
        })
        if (this.refs.client_email.value != "") {
            this.refs.client_email.style.borderColor = "white"
        } else {
            this.refs.client_email.style.borderColor = "red"
        }
    }

    client_phone_Change = (event) => {
        this.setState({
            price: this.state.price,
            regime: this.state.regime,
            www_name: this.state.www_name,
            first_color: this.state.first_color,
            second_color: this.state.second_color,
            discription: this.state.discription,
            client_name: this.state.client_name,
            client_email: this.state.client_email,
            client_phone: event.target.value,
            order: this.state.order
        })
        if (this.refs.client_phone.value != "") {
            this.refs.client_phone.style.borderColor = "white"
        } else {
            this.refs.client_phone.style.borderColor = "red"
        }
    }

    render() {
        const { regime } = this.state
        return (
            <div className="order">
                <div className="form">
                    <button onClick={this.closed_order} id="close"> &#x00D7; </button>
                    <h1> Оформленя замовлення </h1>
                    <hr />
                    <div className="option">
                        <div>
                            {
                                regime == 1 ? (
                                    <>
                                        <table>
                                            <tr>
                                                <td>
                                                    <p> Тарифний план: </p>
                                                    <input type="radio" name="radio" value="1350грн" checked={this.state.price === "1350грн"} onChange={this.onRadioChange} /> Startup <br />
                                                    <input type="radio" name="radio" value="2800грн" checked={this.state.price === "2800грн"} onChange={this.onRadioChange} /> Business <br />
                                                </td>
                                                <td>
                                                    Вартість: {this.state.price}
                                                </td>
                                            </tr>
                                        </table>
                                    </>
                                ) :
                                    regime == 2 ? (
                                        <>
                                            <table>
                                                <tr>
                                                    <td>
                                                        <p> Тарифний план: Startup </p>
                                                    </td>
                                                    <td>
                                                        Вартість: 1350грн
                                                    </td>
                                                </tr>
                                            </table>
                                        </>
                                    ) :
                                        regime == 3 ? (
                                            <>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <p> Тарифний план: Business </p>
                                                        </td>
                                                        <td>
                                                            Вартість: 2800грн
                                                        </td>
                                                    </tr>
                                                </table>
                                            </>
                                        ) : (null)
                            }
                            {
                                regime > 0 && regime < 4 ? (
                                    <>
                                        <p> Назва сайту </p>
                                        <input ref="www_name" className="input" value={this.state.www_name} onChange={this.www_name_Change} ></input>
                                        <p> Два основні кольори в дизайні сайту</p>
                                        - <input ref="first_color" className="input" value={this.state.first_color} onChange={this.first_color_Change} ></input>
                                        <br />
                                        - <input ref="second_color" className="input" value={this.state.second_color} onChange={this.second_color_Change} ></input>
                                        <p> Опишіть для чого вам сайт, і як ви його бачите </p>
                                        <textarea ref="discription" rows="4" value={this.state.discription} onChange={this.discription_Change} ></textarea>
                                    </>
                                ) : (
                                        regime == 4 ? (
                                            <div>
                                                <p> Ваше ім'я </p>
                                                <input ref="client_name" className="input" value={this.state.client_name} onChange={this.client_name_Change} ></input>
                                                <p> Ваш Email </p>
                                                <input ref="client_email" className="input" value={this.state.client_email} onChange={this.client_email_Change} ></input>
                                                <p> Ваш телефон </p>
                                                <input ref="client_phone" className="input" value={this.state.client_phone} onChange={this.client_phone_Change} ></input>
                                            </div>
                                        ) : (
                                            regime == 5 ? (
                                                <div>
                                                    <h1> Дякуємо за ваше замовлення </h1>
                                                    <br />
                                                    <h3> Наш оператор зв`яжеться з вами протягом доби </h3>
                                                </div>
                                            ) : (null)
                                        )
                                )
                            }
                        </div>
                    </div>
                    <hr />
                    {
                        regime > 0 && regime < 4 ? (
                            <button onClick={this.personal_information}> Далі </button>
                        ) : (
                                regime == 4 ? (
                                    <>
                                        <button onClick={this.back} id="back"> Назад </button>
                                        <button onClick={this.order}> Замовити </button>
                                    </>
                                ) : (
                                    regime == 5 ? (
                                        <button onClick={this.closed_order}> Закрити </button>
                                    ) : (null)
                                )
                            )
                    }
                </div>
            </div>
        );
    }
}

export default Order;