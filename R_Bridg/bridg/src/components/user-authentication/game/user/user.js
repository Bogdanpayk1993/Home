import React, { Component } from 'react'
import ActionGenerators from '../../../../actions/ActionGenerators'

class User extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store
        this.getStartCard()
    }

    getStartCard() {
        for (let i = 0; i < 5; i++) {
            this.store.dispatch(ActionGenerators.takeCardUser(parseInt(this.props.giveCard())))
        }
    }

    make_move_user(id) {
        const { check_move, make_move_computer, render_again } = this.props
        let enable1 = check_move(id)

        if (enable1 == true)
        {
            this.store.dispatch(ActionGenerators.throwCardUser(parseInt(id)))

            let enable2 = this.check_add_card()
            if (enable2 == false)
            {
                make_move_computer()
            }
        }
        render_again()
    }

    check_add_card() {
        let usedCard = Object.keys(this.store.getState().usedCard) 
        let mydeskCards = Object.keys(this.store.getState().user)
        let enable = false

        mydeskCards.map((el) => {
            if (this.store.getState().usedCard[usedCard[usedCard.length - 1]].card % 9 == el % 9)
            {
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
                        <img src={`image/${el}.png`} key={el} onClick={this.make_move_user.bind(this, el)}/>
                    )
                }
            </div>
        );
    }
}

export default User
