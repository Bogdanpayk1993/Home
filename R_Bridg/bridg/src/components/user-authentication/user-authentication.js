import React, { Component } from 'react'
import Game from './game'

class UserAuthentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.result = false
    }

    onClick() {
        var exp = /^[А-ЯA-Z][а-яa-z]*\d*$/;
        this.result = exp.test(this.refs.name.value)
        this.setState({
            name: this.refs.name.value
        })
        if (this.result == false)
        {
            alert("Перша літера імені повинна бути велика, після імені можуть йти цифри")
            this.refs.name.value = ""
        }
    }

    render() {
        return (
            <>
                {
                    this.result == false ?
                        (
                            /*
                            <>
                                <span> Введіть ім'я - </span>
                                <input type="text" ref="name"/>
                                <button onClick={this.onClick.bind(this)}> Почати гру </button>
                                <br />
                            </>
                            */
                           <Game userName="Bogdan" />
                        )
                        :
                        (
                            <Game userName={this.state.name} />
                        )
                }
            </>
        );
    }
}

export default UserAuthentication;