import React, { Component } from 'react';
import ActionGenerators from '../../../../actions/ActionGenerators'
import './finish_game.css'

class Finish_game extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store
    }

    restars() {
        const { render_again, start_game, result_false } = this.props
        this.store.dispatch(ActionGenerators.restart())
        start_game()
        result_false()
        render_again()
    }

    render() {
        const { userName, scoresUser, scoresComputer } = this.props
        return (
            <div className="result_div">
                <div>
                    {
                        scoresUser < scoresComputer ?
                            <h1> Гра завершена - Ви виграли </h1>
                        :
                            <h1> Гра завершена - Ви програли </h1>
                    }
                    <h2> З рахунком </h2>
                    <h3> {userName} - {scoresUser} </h3>
                    <h3> Computer - {scoresComputer} </h3>
                    <button onClick={this.restars.bind(this)}> Ok </button>
                </div>
            </div>
        );
    }
}

export default Finish_game;