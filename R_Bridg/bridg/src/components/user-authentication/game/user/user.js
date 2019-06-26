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
            this.store.dispatch(ActionGenerators.takeCardUser(this.props.giveCard()))
        }
    }

    make_move_user(id) {
        const { check_move, make_move_computer, render_again } = this.props
        let enable = check_move(id)
        if (enable == true)
        {
            this.store.dispatch(ActionGenerators.throwCardUser(parseInt(id)))
            render_again()
            make_move_computer()
        }
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
