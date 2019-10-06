import React, { Component } from 'react';
import './send_request.css';
import base from '../base/base'

class Send_Requesr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requests:[]
        }
    }

    componentDidMount() {
        this.db=base.syncState(`requests`, {
            context: this,
            state: 'requests',
            asArray: true
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.db)
    }

    send=()=> {
        this.setState({
            requests:[... this.state.requests,{clientName:this.refs.clientName.value,phoneNumber:this.refs.phoneNumber.value,email:this.refs.email.value,message:this.refs.message.value}]
        })
        this.refs.clientName.value = ""
        this.refs.phoneNumber.value = ""
        this.refs.email.value = ""
        this.refs.message.value = ""
    }

    render() {
        return (
            <div className="send_request">
                <h2> Залишилися питання, пишіть нам </h2>
                <div>
                    <div className="client_data"> <label> Ім'я: <input ref="clientName" /> </label> </div>
                    <div className="client_data"> <label> Номер телефону: <input ref="phoneNumber" /> </label> </div>
                    <div className="client_data"> <label> e-mail: <input ref="email" id="email" /> </label> </div>
                </div>
                <br />
                <br />
                <div className="message"> <label> Ваше запитання: <textarea ref="message" /> </label> </div>
                <button onClick={this.send}> Задати питання </button>
            </div>
        );
    }
}

export default Send_Requesr;