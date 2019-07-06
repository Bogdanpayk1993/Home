import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import './game.css'
import User from './user/user'
import PrintCard from './printcard/printcard'
import Computer from '../../../computer/computer'
import ActionGenerators from '../../../actions/ActionGenerators'

class Game extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store

        this.state = {
            cours: 0
        }

        this.scoresUser = 0
        this.sceresComuter = 0

        this.getDeckCards()
        this.getFirstUsedCard()

        this.Computer = new Computer(this.store, this.giveCard, this.check_move, this.render_again)
        this.Computer.add_card()
    }

    getDeckCards() {
        for (let i = 0; i < 36; i++) {
            this.store.dispatch(ActionGenerators.getColod(i + 1))
        }
    }

    getFirstUsedCard() {
        this.store.dispatch(ActionGenerators.getFirstUsedCard(parseInt(this.giveCard())))
    }

    giveCard = () => {
        let deskCard = Object.keys(this.store.getState().colod)
        let index = Math.floor(Math.random() * deskCard.length)
        return deskCard[index]
    }

    check_move_user = () => {
        let enable = false

        let userCard = Object.keys(this.store.getState().user)
        userCard.map((el) => {
            let enable1 = this.check_move(el)
            if (enable1 == true) {
                enable = true
            }
        })

        if (enable == false) {
            this.store.dispatch(ActionGenerators.takeCardUser(parseInt(this.giveCard())))

            userCard = Object.keys(this.store.getState().user)
            userCard.map((el) => {
                let enable1 = this.check_move(el)
                if (enable1 == true) {
                    enable = true
                }
            })
        }

        if (enable == false) {
            this.Computer.make_move_computer()
            this.check_move_user()
        }
    }

    check_move = (card) => {
        let keys = Object.keys(this.store.getState().usedCard)
        let usedCard = this.store.getState().usedCard[keys[keys.length - 1]].card
        if ((card > 0 && card < 10 && usedCard > 0 && usedCard < 10) ||
            (card > 9 && card < 19 && usedCard > 9 && usedCard < 19) ||
            (card > 18 && card < 28 && usedCard > 18 && usedCard < 28) ||
            (card > 27 && card < 37 && usedCard > 27 && usedCard < 37) ||
            card == 6 || card == 15 || card == 24 || card == 33 ||
            card % 9 == usedCard % 9) {
            return (true)
        }
        else {
            return (false)
        }
    }

    render_again = () => {
        let new_cours = parseInt(this.state.cours) + 1
        this.setState({
            cours: new_cours
        })
    }

    render() {
        const { userName } = this.props
        return (
            <>
                <div className="score">
                    <span> {userName} - {this.scoresUser} </span>
                    VS
                    <span> Computer - {this.sceresComuter} </span>
                </div>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td>

                            </td>
                            <td>
                                <PrintCard card="computer" store={this.store} />
                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="image/колода.png" />
                            </td>
                            <td className="usedCard">
                                <PrintCard card="usedCard" store={this.store} />
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>
                                <User store={this.store} giveCard={this.giveCard} check_move={this.check_move} check_move_user={this.check_move_user} make_move_computer={this.Computer.make_move_computer} render_again={this.render_again} />
                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    };
}

Game.propTypes = {
    store: PropsTypes.object.isRequired
}

export default Game