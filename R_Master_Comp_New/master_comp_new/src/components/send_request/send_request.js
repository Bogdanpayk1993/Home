import React, { Component } from 'react'
import Base from '../base'
import './send_request.css'

class Send_Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: []
        }
    }

    componentDidMount() {
        this.db = Base.syncState(`request`, {
            context: this,
            state: 'request',
            asArray: true
        })
    }

    componentWillUnmount() {
        Base.removeBinding(this.db)
    }

    send = () => {
        this.setState({
            request: [...this.state.request, { name: this.refs.name.value, email: this.refs.email.value, number: this.refs.number.value, message: this.refs.message.value }]
        })
        this.props.history.push("/")
    }

    render() {
        return (
            <>
                <table className="footer">
                    <tr>
                        <td>
                            <div className="first">
                                <h1> Контакти: </h1>
                                <div className="phone">
                                    <h2> (066) 537-60-25 Viber </h2>
                                    <h2> (068) 243-83-74 </h2>
                                </div>
                                <br />
                                <h1> Наша адреса: </h1>
                                <div>
                                    <h3> м.Ужгород, вул.Стрільнична 80А </h3>
                                </div>
                            </div>
                            <br />
                            <div className="second">
                                <h1> Зворотній зв'язок </h1>
                                <form className="form">
                                    <label>
                                        Ім'я
                                <br />
                                        <input ref="name" placeholder="Ім'я" />
                                        <br />
                                    </label>
                                    <label>
                                        Email
                                <br />
                                        <input ref="email" placeholder="mastercomp_uzh@ukr.net" />
                                        <br />
                                    </label>
                                    <label>
                                        Номер телефону
                                <br />
                                        <input ref="number" placeholder="+38 (050) 333-33-33   +38 (068) 333-33-33" />
                                        <br />
                                    </label>
                                    <label>
                                        Повідомлення
                                <br />
                                        <textarea ref="message" rows="5" placeholder="Ваше повідомлення" />
                                        <br />
                                    </label>
                                    <button onClick={this.send} > Відправити </button>
                                </form>
                                <br />
                            </div>
                        </td>
                    </tr>
                </table>
                <br />
            </>
        );
    }
}

export default Send_Request