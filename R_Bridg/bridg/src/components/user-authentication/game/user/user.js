import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mydeckcards:[]
        }
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

    make_cours_user(id) {
        const { make_cours, make_cours_computer } = this.props
        let enable = make_cours(this.mydeckCards[id])
        if (enable == true)
        {
            this.mydeckCards.splice(id, 1)
            this.setState({
                mydeckcards: [...this.mydeckCards] 
            })
            make_cours_computer()
        }
    }

    render() {
        return (
            <div>
                {
                    this.mydeckCards.map((el, i) =>
                        <img src={`image/${el}.png`} key={el} onClick={this.make_cours_user.bind(this, i)}/>
                    )
                }
            </div>
        );
    }
}

export default User
