import React, { Component } from 'react'
import ActionGenerators from '../../../../actions/ActionGenerators'

class User extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store
        this.getStartCard()
        this.corse = false
    }

    getStartCard() {
        const { check_move_user } = this.props
        for (let i = 0; i < 5; i++) {
            this.store.dispatch(ActionGenerators.takeCardUser(parseInt(this.props.giveCard())))
        }
        check_move_user()
    }

    make_move_user(id) {
        let usedCard = Object.keys(this.store.getState().usedCard)
        const { giveCard, check_move, check_move_user, render_again } = this.props

        let enable1
        if (this.corse == false) {
            enable1 = check_move(id)
        }
        else {
            if (this.store.getState().usedCard[usedCard[usedCard.length - 1]].card % 9 == id % 9) {
                enable1 = true
            }
        }

        if (enable1 == true) {
            let seven = this.store.getState().seven
            if (id % 9 == 2) {
                seven++
            }
            else
            {
                seven = 0
            }
            this.store.dispatch(ActionGenerators.throwCardUser(parseInt(id), seven))
            if (id % 9 == 3) {
                this.store.dispatch(ActionGenerators.takeCardComputer(giveCard()))
            }

            this.corse = true

            let enable2 = this.check_add_card()
            if (enable2 == false) {
                this.check_last_card_user()
                this.corse = false
                check_move_user()
            }
        }
        render_again()
    }

    check_add_card() {
        let usedCard = Object.keys(this.store.getState().usedCard)
        let mydeckCards = Object.keys(this.store.getState().user)
        let enable = false

        mydeckCards.map((el) => {
            if (this.store.getState().usedCard[usedCard[usedCard.length - 1]].card % 9 == el % 9) {
                enable = true
            }
        })
        return enable
    }

    check_last_card_user() {
        const { giveCard, check_move, check_move_user, make_move_computer } = this.props
        let usedCard = Object.keys(this.store.getState().usedCard)
        let mydeckCards = Object.keys(this.store.getState().user)

        switch (this.store.getState().usedCard[usedCard[usedCard.length - 1]].card % 9) {
            case 0:
                check_move_user()
                break;

            case 1:
                let enable = false
                do {
                    let enable1
                    mydeckCards.map((el) => {
                        enable1 = check_move(el)
                        if (enable1 == true) {
                            enable = true
                        }
                    })
                    if (enable == false) {
                        this.store.dispatch(ActionGenerators.takeCardUser(giveCard()))
                        mydeckCards = Object.keys(this.store.getState().user)
                    }
                }
                while (enable == false)
                break;

            case 2:
                make_move_computer()
                break;

            case 3:
                check_move_user()
                break;

            default:
                make_move_computer()
                break;
        }
    }

    render() {
        return (
            <div>
                {
                    Object.keys(this.store.getState().user).map((el) =>
                        <img src={`image/${el}.png`} key={el} onClick={this.make_move_user.bind(this, el)} />
                    )
                }
            </div>
        );
    }
}

export default User
