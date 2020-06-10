import React, { Component } from 'react';
import "./Message_about_send_email.css"

class Message_about_send_email extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    change_regime = () => {
        const {change_regime} = this.props
        change_regime(0)
    }

    render() { 
        
        return ( 
            <div className="message_about_send_email">
                <h3> Ваше повідомлення надіслане </h3>
                <p> Наш оператор зв'яжеться з вами протягом доби </p>
                <button onClick={this.change_regime} className="message_about_send_email_button"> Ok </button>
            </div>
         );
    }
}
 
export default Message_about_send_email;