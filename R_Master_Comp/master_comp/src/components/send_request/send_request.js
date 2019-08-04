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
        this.refs.name.value = ""
        this.refs.email.value = ""
        this.refs.number.value = ""
        this.refs.message.value = ""
        this.render()
    }

    render() {
        return (
            <div className="footer">
                <table>
                    <tr>
                        <td>
                            <h1> Графік роботи: </h1>
                            <div>
                                <h2> Пн - Пт: 08:30 - 22:00 </h2>
                                <h2> Сб - Нд: 09:00 - 21:00 </h2>
                            </div>
                            <h1> Наша адреса: </h1>
                            <div>
                                <h3> м.Ужгород вул.Стрільнична 80/А </h3>
                            </div>
                        </td>
                        <td>
                            <h1> Зворотній зв'язок </h1>
                            <form>
                                <label>
                                    Ім'я
                                <br />
                                    <input ref="name" />
                                    <br />
                                </label>
                                <label>
                                    Email
                                <br />
                                    <input ref="email" />
                                    <br />
                                </label>
                                <label>
                                    Номер телефону
                                <br />
                                    <input ref="number" />
                                    <br />
                                </label>
                                <label>
                                    Повідомлення
                                <br />
                                    <textarea ref="message" rows="5" />
                                    <br />
                                </label>
                                <button onClick={this.send} > Відправити </button>
                            </form>
                            <br />
                        </td>
                    </tr>
                </table>
            </div>);
    }
}

export default Send_Request