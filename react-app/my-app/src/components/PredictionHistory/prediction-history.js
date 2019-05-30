import React, { Component } from 'react'

class PredictionHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { history } = this.props
        return (
            <>
                History
                <hr />
                <ul>
                    {
                        history.map((el, i) => 
                            <li key={i}> {el} </li>
                        )
                    }
                </ul>
            </>
        );
    }
}

export default PredictionHistory;