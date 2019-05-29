import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    onClick() {
        this.setState({
            name: this.refs.name.value
        })
        this.refs.name.value = ""
    }

    render() {
        var exp = /[А-Я,а-я,A-Z,a-z]/;
        var result = exp.test(this.state.name)
        return (
            <>
                {
                    result == false ?
                        (
                            <>
                                <span> Введіть ім'я - </span>
                                <input type="text" ref="name" />
                                <button onClick={this.onClick.bind(this)}> Почати гру </button>
                                <br />
                            </>
                        )
                        :
                        (
                            <h2> Привіт {this.state.name} </h2>
                        )
                }
            </>
        );
    }
}

export default User;