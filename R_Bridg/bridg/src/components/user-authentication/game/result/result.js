import React, { Component } from 'react';
import './result.css' 

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { userName, scoresUser, scoresComputer } = this.props
        return (
            <div className="result_div">
                <div>
                    {
                        scoresUser < 115 && scoresComputer < 115 ?
                                <h1> Етап завершений: </h1>
                            :
                                <h1> Гра завершена: </h1>
                    }
                    <h3> {userName} - {scoresUser} </h3>
                    <h3> Computer - {scoresComputer} </h3>
                    <button> Ok </button>
                </div>
            </div>
        );
    }
}
 
export default Result;