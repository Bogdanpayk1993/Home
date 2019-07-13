import React, { Component } from 'react';
import './mast.css'
import ActionGenerators from '../../../../actions/ActionGenerators'

class Mast extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store
        this.make_move_computer = this.props.make_move_computer
        this.check_last_card_user = this.props.check_last_card_user
        this.state = {}
    }

    mast1 = () => {
        this.store.dispatch(ActionGenerators.changeMast(1))
        this.make_move_computer()
        this.check_last_card_user()
    }

    mast2 = () => {
        this.store.dispatch(ActionGenerators.changeMast(2))
        this.make_move_computer()
        this.check_last_card_user()
    }

    mast3 = () => {
        this.store.dispatch(ActionGenerators.changeMast(3))
        this.make_move_computer()
        this.check_last_card_user()
    }

    mast4 = () => {
        this.store.dispatch(ActionGenerators.changeMast(4))
        this.make_move_computer()
        this.check_last_card_user()
    }

    render() {
        return (
            <div className="mast_div">
                <img src="image/Чирва.png" onClick={this.mast4} />
                <img src="image/Пика.png" onClick={this.mast1} />
                <img src="image/Буба.png" onClick={this.mast3} />
                <img src="image/Крест.png" onClick={this.mast2} />
            </div>
        );
    }
}

export default Mast;