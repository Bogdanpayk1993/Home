import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.mydeckCards = this.getStartCards()
    }

    getStartCards() {
        const { giveCard } = this.props
        let mydeckcards = []
        for (let i = 0; i < 5; i++) {
            mydeckcards.push(giveCard())
        }
        return mydeckcards
    }

    render() {
        return (
            <div>
                {
                    this.mydeckCards.map((el) =>
                        <img src={`image/${el}.png`} key={el} />
                    )
                }
            </div>
        );
    }
}

export default User
