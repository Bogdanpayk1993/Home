import React, { Component } from 'react'
import ActionGenerators from '../../../../actions/ActionGenerators'

class User extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store
        this.corse = false
    }

    make_move_user(id) {
        let usedCard = Object.keys(this.store.getState().usedCard)
        const { giveCard, check_move, check_move_user, render_again, check_last_card_user, finish_stage } = this.props

        let enable1
        if (this.corse == false) {
            enable1 = check_move(id)
        }
        else {
            if (this.store.getState().usedCard[usedCard[usedCard.length - 1]].card % 9 == id % 9) {
                this.store.dispatch(ActionGenerators.changeMast(0))
                enable1 = true
            }
        }

        if (enable1 == true) {
            let seven = this.store.getState().seven
            if (id % 9 == 2) {
                seven++
            }
            else {
                seven = 0
            }

            this.store.dispatch(ActionGenerators.throwCardUser(parseInt(id), seven))
            this.store.dispatch(ActionGenerators.changeMast(0))

            if (id % 9 == 3) {
                this.store.dispatch(ActionGenerators.takeCardComputer(giveCard()))
            }

            this.corse = true

            if (id % 9 != 6)
            {
                let enable2 = this.check_add_card()
                if (enable2 == false) {
                    check_last_card_user()
                    this.corse = false
                    let mydeckCards = Object.keys(this.store.getState().user)
                    if (mydeckCards.length > 0)
                    {
                        check_move_user()
                    }
                }
            }
            else
            {
                this.corse = false
                let enable2 = this.check_add_card()
                if (enable2 == true) {
                    this.store.dispatch(ActionGenerators.changeMast(5))
                }
                else
                {
                    let mydeckCards = Object.keys(this.store.getState().user)
                    if (mydeckCards.length == 0)
                    {
                        this.store.dispatch(ActionGenerators.changeMast(5))
                        finish_stage()
                    }
                }
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

    render() {       
        return (      
            <div>
                {
                    Object.keys(this.store.getState().user).map((el) =>
                        <img src={`image/${el}.png`} key={el} onClick={this.make_move_user.bind(this, el)} />)
                }
            </div>
        );
    }
}

export default User
