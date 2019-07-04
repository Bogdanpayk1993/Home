import React, { Component } from 'react';
import base from '../Base'

class Send_Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: []
        }
    }

    componentDidMount() {
        this.db = base.syncState(`request`, {
            context: this,
            state: 'request',
            asArray: true
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.db)
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
            <>
                <h1> Зворотній зв'язок </h1>
                {
                    this.state.request.length ? (
                        <table align="center">
                            <tbody>
                                <tr>
                                    <th> Ім'я </th>
                                    <th> Еmail </th>
                                    <th> Номер </th>
                                    <th> Повідомлення </th>
                                </tr>
                                {
                                    this.state.request.map((el, i) => (
                                        <>
                                            <tr>
                                                <td> {el.name} </td>
                                                <td> {el.email} </td>
                                                <td> {el.number} </td>
                                                <td> {el.message} </td>
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : null
                } 
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
            </>
        );
    }
}

export default Send_Request;