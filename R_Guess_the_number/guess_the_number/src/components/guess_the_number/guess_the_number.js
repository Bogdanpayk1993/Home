import React, { Component } from 'react'
import './guess_the_number.css'

class Guess_the_number extends Component {
    constructor(props) {
        super(props);
        this.state = this.start()
    }

    start() {
        if (localStorage.getItem("state"))
        {
            this.state = JSON.parse(localStorage.getItem("state"))
        }
        else
        {
            this.state =  {
                history: [],
                gameState: {
                    prevSteps: [],
                    player1Score: 0,
                    player2Score: 0
                }
            }
        }
        return this.state
    }

    onClick = () => {
        const { history, gameState } = this.state
        const { prevSteps, player1Score, player2Score } = gameState

        let player1Number = parseInt(this.refs.player1.value)
        let player2Number = parseInt(this.refs.player2.value)

        this.refs.player1.value = ""
        this.refs.player2.value = ""

        let compNumber = Math.floor(Math.random() * 100)

        var player1Score1 = player1Score
        if (Math.abs(compNumber - player1Number) < Math.abs(compNumber - player2Number)) {
            player1Score1++
        }

        var player2Score1 = player2Score
        if (Math.abs(compNumber - player1Number) > Math.abs(compNumber - player2Number)) {
            player2Score1++
        }

        const copyGameState = { ...gameState, prevSteps: [...prevSteps] }
        this.setState({
            history: [...history, copyGameState],
            gameState: {
                prevSteps: [...prevSteps, [player1Number, player2Number, compNumber]],
                player1Score: player1Score1,
                player2Score: player2Score1
            },
        })
    }

    backToStep = (stepNum) => {
        const { history } = this.state
        let gameState = history[stepNum]
        let history1 = history.slice()
        history1.splice(stepNum, history.length - stepNum)
        this.setState({
            history: [...history1],
            gameState: gameState
        })
    }

    render() {
        const { history, gameState } = this.state
        const { prevSteps, player1Score, player2Score } = gameState
        localStorage.setItem("state", JSON.stringify(this.state))
        return (
            <>
                <div>
                    <label>
                        Число першого гравця -
                        <input ref="player1" type="number" />
                    </label>
                    <label>
                        Число другого гравця -
                        <input ref="player2" type="number" />
                    </label>
                    <button onClick={this.onClick}> Зробити хід </button>
                    <hr />
                    <label>
                        1-ий гравець - {player1Score} <span> VS </span> 2-ий гравець - {player2Score}
                    </label>
                    <label>
                        {
                            prevSteps.length != 0 ?
                                (
                                    <>
                                        <hr />
                                        <p> Історія </p>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td> Число першого гравця </td>
                                                    <td> Число другого гравця </td>
                                                    <td> Число комп'ютера </td>
                                                </tr>
                                                {
                                                    prevSteps.map((el, i) =>
                                                        <tr key={i}>
                                                            <td> {el[0]} </td>
                                                            <td> {el[1]} </td>
                                                            <td> {el[2]} </td>
                                                        </tr>)
                                                }
                                            </tbody>
                                        </table>
                                        <hr />
                                    </>
                                )
                                :
                                (
                                    null
                                )
                        }
                    </label>
                    <div>
                        {
                            history.map((Step, i) => (
                                <button key={i} onClick={() => this.backToStep(i)} > Крок {i} </button>
                            ))
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Guess_the_number;