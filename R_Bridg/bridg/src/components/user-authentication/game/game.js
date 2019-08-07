import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import './game.css'
import User from './user/user'
import PrintCard from './printcard/printcard'
import Computer from '../../../computer/computer'
import Mast from './mast/mast'
import Result from './result/result'
import ActionGenerators from '../../../actions/ActionGenerators'

class Game extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store

        this.state = {
            cours: 0
        }

        this.scoresUser = 0
        this.scoresComputer = 0
        this.result = false

        this.start_game()
    }

    start_game = () => {
        this.getDeckCards()
        this.getFirstUsedCard()
        this.getStartCardUser()

        this.Computer = new Computer(this.store, this.giveCard, this.check_move, this.render_again, this.check_move_user, this.finish_stage)
        this.Computer.add_card()
        this.Computer.check_last_card_computer()
    }

    getDeckCards() {
        for (let i = 0; i < 36; i++) {
            this.store.dispatch(ActionGenerators.getColod(i + 1))
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
        if (deskCard != 0) {
            let index = Math.floor(Math.random() * deskCard.length)
            return deskCard[index]
        }
        else {
            let usedCard

            do {
                usedCard = Object.keys(this.store.getState().usedCard)
                this.store.dispatch(ActionGenerators.getColodAgain(this.store.getState().usedCard[usedCard[0]].id, this.store.getState().usedCard[usedCard[0]].card))
            } while (usedCard.length - 1 > 1);

            deskCard = Object.keys(this.store.getState().colod)

            let index = Math.floor(Math.random() * deskCard.length)
            return deskCard[index]
        }
    }

    getStartCardUser() {
        for (let i = 0; i < 5; i++) {
            this.store.dispatch(ActionGenerators.takeCardUser(parseInt(this.giveCard())))
        }
    }

    check_move_user = () => {
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

        let computerCard = Object.keys(this.store.getState().computer)
        if (computerCard.length > 0) {
            this.check_user()
        }
        else {
            let keys = Object.keys(this.store.getState().usedCard)
            if (this.store.getState().usedCard[keys[keys.length - 1]].card % 9 == 2) {
                this.check_user()
            }
        }
    }

    check_user = () => {
        let enable = false
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

    check_last_card_user = () => {
        let usedCard = Object.keys(this.store.getState().usedCard)
        let mydeckCards = Object.keys(this.store.getState().user)

        switch (this.store.getState().usedCard[usedCard[usedCard.length - 1]].card % 9) {
            case 0:
                this.check_move_user()
                break;

            case 1:
                let enable = false
                do {
                    let enable1
                    mydeckCards.map((el) => {
                        enable1 = this.check_move(el)
                        if (enable1 == true) {
                            enable = true
                        }
                    })
                    if (enable == false) {
                        this.store.dispatch(ActionGenerators.takeCardUser(this.giveCard()))
                        mydeckCards = Object.keys(this.store.getState().user)
                    }
                }
                while (enable == false)
                break;

            case 2:
                this.Computer.make_move_computer()
                break;

            case 3:
                this.check_move_user()
                break;

            default:
                if (mydeckCards != 0) {
                    this.Computer.make_move_computer()
                }
                else {
                    this.finish_stage()
                }
                break;
        }
    }

    finish_corse = () => {
        let usedCard = Object.keys(this.store.getState().usedCard)
        let seven = this.store.getState().seven
        let corse = this.store.getState().corse

        if (corse == 1) {
            if (this.store.getState().usedCard[usedCard[usedCard.length - 1]].card % 9 == 6) {
                this.store.dispatch(ActionGenerators.changeMast(0))
                this.render_again()
            }
            else {
                this.Computer.make_move_computer()
            }
        }
        else {
            if (seven != 0) {
                for (let i = 0; i < seven * 2; i++) {
                    this.store.dispatch(ActionGenerators.takeCardUser(parseInt(this.giveCard())))
                }
                this.store.dispatch(ActionGenerators.throwSeven())
                this.render_again()
            }
        }
    }

    finish_stage = (valet) => {
        let userCard = Object.keys(this.store.getState().user)
        let computerCard = Object.keys(this.store.getState().computer)
        let usedCard = Object.keys(this.store.getState().usedCard)

        if (userCard.length == 0) {
            computerCard.forEach((el) => {
                switch (el % 9) {
                    case 5:
                        this.scoresComputer += 10
                        break;

                    case 6:
                        this.scoresComputer += 20
                        if (el == 24) {
                            this.scoresComputer += 20
                        }
                        break;

                    case 7:
                        this.scoresComputer += 10
                        break;

                    case 8:
                        this.scoresComputer += 10
                        break;

                    case 0:
                        this.scoresComputer += 15
                        break;
                }
            })

            if (valet != 0)
            {
                for (let i = 0; i < valet; i++)
                {
                    if (this.store.getState().usedCard[usedCard[usedCard.length - i - 1]].card == 24) {
                        this.scoresUser -= 40
                    }
                    else {
                        this.scoresUser -= 20
                    }
                }
            }
        }
        if (computerCard.length == 0) {
            userCard.forEach((el) => {
                switch (el % 9) {
                    case 5:
                        this.scoresUser += 10
                        break;

                    case 6:
                        this.scoresUser += 20
                        if (el == 24) {
                            this.scoresUser += 20
                        }
                        break;

                    case 7:
                        this.scoresUser += 10
                        break;

                    case 8:
                        this.scoresUser += 10
                        break;

                    case 0:
                        this.scoresUser += 15
                        break;
                }
            })

            if (valet != 0)
            {
                for (let i = 0; i < valet; i++)
                {
                    if (this.store.getState().usedCard[usedCard[usedCard.length - i - 1]].card == 24) {
                        this.scoresComputer -= 40
                    }
                    else {
                        this.scoresComputer -= 20
                    }
                }
            }
        }
        this.result = true
        this.render()
    }

    result_false = () => {
        this.result = false
        if (this.scoresUser >= 115 || this.scoresComputer >= 115)
        {
            this.scoresUser = 0
            this.scoresComputer = 0
        }
        if (this.scoresUser == 110)
        {
            this.scoresUser = 0
        }
        if (this.scoresComputer == 110)
        {
            this.scoresComputer = 0
        }
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
                    <span> Computer - {this.scoresComputer} </span>
                </div>
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
                                <td>
                                    <button onClick={this.finish_corse}> Завершити хід </button>
                                </td>
                            </tr>
                            <tr>
                                <td>

                                </td>
                                <td>
                                    <User store={this.store} giveCard={this.giveCard} check_move={this.check_move} check_move_user={this.check_move_user} make_move_computer={this.Computer.make_move_computer} check_last_card_user={this.check_last_card_user} finish_stage={this.finish_stage} render_again={this.render_again} />
                                </td>
                                <td>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {
                    usedCard % 9 == 6 && mast == 0 ?
                        <Mast store={this.store} make_move_computer={this.Computer.make_move_computer} check_user={this.check_user} render_again={this.render_again} />
                        :
                        null
                }
                {
                    this.result == true ?
                        <Result store={this.store} render_again={this.render_again} result_false={this.result_false} start_game={this.start_game} userName={userName} scoresUser={this.scoresUser} scoresComputer={this.scoresComputer} />
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