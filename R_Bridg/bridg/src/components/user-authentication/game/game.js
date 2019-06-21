import React, { Component } from 'react'
import './game.css'
import User from './user/user'
import PrintCard from './printcard/printcard'
import Computer from '../../../computer/computer'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usedCard:[]
        }

        this.scoresUser = 0
        this.sceresComuter = 0

        this.deckCards = this.getDeckCards()
        this.usedCard = this.getFirstUsedCard()

        this.Computer = new Computer(this.giveCard, this.make_cours, this.check_cours)
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

    check_cours = (card) => {
        if ((card > 0 && card < 10 && this.usedCard[0] > 0 && this.usedCard[0] < 10) ||
            (card > 9 && card < 19 && this.usedCard[0] > 9 && this.usedCard[0] < 19) ||
            (card > 18 && card < 28 && this.usedCard[0] > 18 && this.usedCard[0] < 28) ||
            (card > 27 && card < 37 && this.usedCard[0] > 27 && this.usedCard[0] < 37) ||
            card == 6 || card == 15|| card == 24 || card == 33 ||
            card % 9 == this.usedCard[0] % 9)
        {
            return(true)            
        }    
        else
        {
            return(false)
        }
    }

    make_cours = (card) => {
        if ((card > 0 && card < 10 && this.usedCard[0] > 0 && this.usedCard[0] < 10) ||
            (card > 9 && card < 19 && this.usedCard[0] > 9 && this.usedCard[0] < 19) ||
            (card > 18 && card < 28 && this.usedCard[0] > 18 && this.usedCard[0] < 28) ||
            (card > 27 && card < 37 && this.usedCard[0] > 27 && this.usedCard[0] < 37) ||
            card == 6 || card == 15|| card == 24 || card == 33 ||
            card % 9 == this.usedCard[0] % 9)
        {
            this.usedCard.unshift(card)
            this.setState({
                usedCard: [...this.usedCard] 
            })
            return(true)
        } 
        else
        {
            return(false)
        }
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
                                <PrintCard mydeskCard={this.Computer.mydeckCards} card="open" />
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
                                <User giveCard={this.giveCard} make_cours={this.make_cours} make_cours_computer={this.Computer.make_cours_computer} />
                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Game;