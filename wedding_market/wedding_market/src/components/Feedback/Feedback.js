import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import './Feedback.css'

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.userDate = {
            userName: "",
            userPhone: "",
            userEmail: "",
            userMessage: ""
        }
    }

    sendMessage = () => {
        const {change_regime} = this.props
        if (this.refs.userName.value != "" && this.refs.userPhone.value != "" && this.refs.userEmail.value != "" && this.refs.userMessage.value != "")
        {
            this.userDate = {
                userName: this.refs.userName.value,
                userPhone: this.refs.userPhone.value,
                userEmail: this.refs.userEmail.value,
                userMessage: this.refs.userMessage.value
            }

            var service_id ="gmail"
            var template_id = "template_nX8BTPGS"
            var user_id = "user_i05opLh3d3XKKsDSWbnDS"
            
            //emailjs.send(service_id, template_id, this.userDate, user_id) 

            this.refs.userName.value = ""
            this.refs.userPhone.value = ""
            this.refs.userEmail.value = ""
            this.refs.userMessage.value = ""

            this.refs.userName.setAttribute("style", "border-color: black")
            this.refs.userPhone.setAttribute("style", "border-color: black")
            this.refs.userEmail.setAttribute("style", "border-color: black")
            this.refs.userMessage.setAttribute("style", "border-color: black")

            change_regime(1)
        }
        else 
        {
            if (this.refs.userName.value == "")
            {
                this.refs.userName.setAttribute("style", "border-color: rgba(202, 1, 13, 1)")
            }
            if (this.refs.userPhone.value == "")
            {
                this.refs.userPhone.setAttribute("style", "border-color: rgba(202, 1, 13, 1)")
            }
            if (this.refs.userEmail.value == "")
            {
                this.refs.userEmail.setAttribute("style", "border-color: rgba(202, 1, 13, 1)")
            }
            if (this.refs.userMessage.value == "")
            {
                this.refs.userMessage.setAttribute("style", "border-color: rgba(202, 1, 13, 1)")
            }
        }
    }

    render() { 
        return ( 
            <div className="feedback">
                <h3> Зворотній зв'язок </h3>
                <p> <input className="input" type="search" placeholder="Ваше ім'я:" ref="userName" /> </p>
                <p> <input className="input" type="search" placeholder="Номер телефону:" ref="userPhone" /> </p>
                <p> <input className="input" type="search" placeholder="e-mail:" ref="userEmail" /> </p>
                <p> <textarea className="input" rows="11" placeholder="Ваше повідомлення:" ref="userMessage"/> </p>
                <button className="feedback_button" onClick={this.sendMessage}> Надіслати </button>
            </div>
         );
    }
}
 
export default Feedback;