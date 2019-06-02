import React, { Component } from 'react'
import './game.css'
import User from './user/user'
import PrintCard from './printcard/printcard'
import Computer from '../../../computer/computer'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.scoresUser = 0
        this.sceresComuter = 0

        this.deckCards = this.getDeckCards()
        this.usedCard = this.getFirstUsedCard()

        this.Computer = new Computer(this.giveCard)
    }

    getDeckCards() {
        let deckCards = []
        for (let i = 0; i < 36; i++) {
            deckCards.push(i + 1)
        }
        return deckCards
    }

    getFirstUsedCard() {
        let firstUsedCard = []
        firstUsedCard.push(this.giveCard())
        return firstUsedCard
    }

    giveCard = () => {
        let r = Math.floor(Math.random() * this.deckCards.length)
        let card = this.deckCards[r]
        this.deckCards.splice(r, 1)
        return card
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
                <br/>
                <table>
                    <tbody>
                        <tr>
                            <td>

                            </td>
                            <td>
                                <PrintCard mydeskCard={this.Computer.mydeckCards} card="closed" />
                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="image/колода.png" />
                            </td>
                            <td className="usedCard">
                                <PrintCard mydeskCard={this.usedCard} card="open" />
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>
                                <User giveCard={this.giveCard} />
                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default Game;