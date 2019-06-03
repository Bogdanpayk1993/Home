import React, { Component } from 'react'

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: ""
        }
    }

    Click = () => {
        var first_number = this.refs.first_number.value
        var second_number = this.refs.second_number.value
        var reg = /^[0-1]+$/;
        var first_order = reg.test(first_number)
        var second_order = reg.test(second_number)
        if (first_order == true && second_order == true) {
            var first_arr = first_number.split("")
            var second_arr = second_number.split("")

            while (first_arr.length < second_arr.length) {
                first_arr.unshift("0")
            }

            while (first_arr.length > second_arr.length) {
                second_arr.unshift("0")
            }

            var result = []
            var hyphenation = ["0"]

            for (let i = first_arr.length - 1; i >= 0; i--) {
                if (first_arr[i] == 0 && second_arr[i] == 0 && hyphenation[0] == 0) {
                    result.unshift("0")
                    hyphenation.unshift("0")
                }
                else {
                    if (!(first_arr[i] == 1 && second_arr[i] == 1) && hyphenation[0] == 0) {
                        result.unshift("1")
                        hyphenation.unshift("0")
                    }
                    else {
                        if (first_arr[i] == 1 && second_arr[i] == 1 && hyphenation[0] == 0) {
                            result.unshift("0")
                            hyphenation.unshift("1")
                        }
                        else {
                            if (first_arr[i] == 0 && second_arr[i] == 0 && hyphenation[0] == 1) {
                                result.unshift("1")
                                hyphenation.unshift("0")
                            }
                            else {
                                if (!(first_arr[i] == 1 && second_arr[i] == 1) && hyphenation[0] == 1) {
                                    result.unshift("0")
                                    hyphenation.unshift("1")
                                }
                                else {
                                    if (first_arr[i] == 1 && second_arr[i] == 1 && hyphenation[0] == 1) {
                                        result.unshift("1")
                                        hyphenation.unshift("1")
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (hyphenation[0] == 1) {
                result.unshift("1")
            }

            this.setState({
                sum: result
            })
        }
        else {
            alert("Введіть обидва числа у двійковій системі числення без пробілів")
            this.refs.first_number.value = ""
            this.refs.second_number.value = ""
        }
    }

    render() {
        return (
            <>
                <label>
                    Перше число - <input ref="first_number" />
                </label>
                <label>
                    Друге число - <input ref="second_number" />
                </label>
                <button onClick={this.Click}> Знайти суму </button>
                {
                    this.state.sum != "" ?
                        (
                            <label>
                                Результат = {this.state.sum}
                            </label>
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

export default Calculator;