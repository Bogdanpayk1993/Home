import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import './game.css'
import User from './user/user'
import PrintCard from './printcard/printcard'
import Computer from '../../../computer/computer'
import Mast from './mast/mast'
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

        this.Computer = new Computer(this.store, this.giveCard, this.check_move, this.render_again, this.check_move_user)
        this.Computer.add_card()
    }

    getDeckCards() {
        for (let i = 0; i < 36; i++) {
            this.store.dispatch(ActionGenerators.getColod(i + 1, 0))
        }
    }

    getFirstUsedCard() {
        let seven = this.store.getState().seven
        let firstCard = parseInt(this.giveCard())
        if (firstCard % 9 == 2) {
            seven++
        }
        if (firstCard % 9 == 3) {
            this.store.dispatch(ActionGenerators.takeCardUser(this.giveCard()))
        }
        this.store.dispatch(ActionGenerators.getFirstUsedCard(firstCard, seven))
    }

    giveCard = () => {
        let deskCard = Object.keys(this.store.getState().colod)
        let index = Math.floor(Math.random() * deskCard.length)
        return deskCard[index]
    }

    check_move_user = () => {
        let enable = false
        let seven = this.store.getState().seven

        if (seven != 0) {
            let mydeckCards = Object.keys(this.store.getState().user)

            let enable1 = false
            mydeckCards.map((el) => {
                if (el % 9 == 2) {
                    enable1 = true
                }
            })

            if (enable1 == false) {
                this.store.dispatch(ActionGenerators.takeCardUser(parseInt(this.giveCard())))
                mydeckCards = Object.keys(this.store.getState().user)

                mydeckCards.map((el) => {
                    if (el % 9 == 2) {
                        enable1 = true
                    }
                })
            }

            if (enable1 == false) {
                for (let i = 0; i < seven * 2 - 1; i++) {
                    this.store.dispatch(ActionGenerators.takeCardUser(parseInt(this.giveCard())))
                }
                this.store.dispatch(ActionGenerators.throwSeven())
            }
            this.render_again()
        }

        let mydeckCards = Object.keys(this.store.getState().user)
        mydeckCards.map((el) => {
            let enable1 = this.check_move(el)
            if (enable1 == true) {
                enable = true
            }
        })

        if (enable == false) {
            this.store.dispatch(ActionGenerators.takeCardUser(parseInt(this.giveCard())))

            mydeckCards = Object.keys(this.store.getState().user)
            mydeckCards.map((el) => {
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
        let seven = this.store.getState().seven
        let mast = this.store.getState().mast
        let usedCard = this.store.getState().usedCard[keys[keys.length - 1]].card

        if (((((card > 0 && card < 10 && usedCard > 0 && usedCard < 10 && mast == 0) || (card > 0 && card < 10 && mast == 1)) ||
            ((card > 9 && card < 19 && usedCard > 9 && usedCard < 19 && mast == 0) || (card > 9 && card < 19 && mast == 2)) ||
            ((card > 18 && card < 28 && usedCard > 18 && usedCard < 28 && mast == 0) || (card > 18 && card < 28 && mast == 3)) ||
            ((card > 27 && card < 37 && usedCard > 27 && usedCard < 37 && mast == 0) || (card > 27 && card < 37 && mast == 4)) ||
            card == 6 || card == 15 || card == 24 || card == 33 ||
            card % 9 == usedCard % 9) && seven == 0) || (card % 9 == 2 && seven != 0)) {
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
        let keys = Object.keys(this.store.getState().usedCard)
        let mast = this.store.getState().mast
        let usedCard = this.store.getState().usedCard[keys[keys.length - 1]].card

        return (
            <>
                <div className="score">
                    <span> {userName} - {this.scoresUser} </span>
                    VS
                    <span> Computer - {this.sceresComuter} </span>
                </div>
                <br />
                <div className="game">
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
                                <td className="colod">
                                    <img src="image/колода.png" />
                                    {mast == 1 ? <img className="mast" src="image/Пика.png" /> : null}
                                    {mast == 2 ? <img className="mast" src="image/Крест.png" /> : null}
                                    {mast == 3 ? <img className="mast" src="image/Буба.png" /> : null}
                                    {mast == 4 ? <img className="mast" src="image/Чирва.png" /> : null}
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
                </div>
                {
                    usedCard % 9 == 6 && mast == 0 ?
                        <Mast store={this.store} make_move_computer={this.Computer.make_move_computer} check_move_user={this.check_move_user} render_again={this.render_again} />
                        :
                        null
                }
            </>
        )
    };
}

Game.propTypes = {
    store: PropsTypes.object.isRequired
}

export default Game