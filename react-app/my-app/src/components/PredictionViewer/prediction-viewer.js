import React, { Component } from 'react'
import PredictionCreater from "../PredictionCreater/prediction-creater"
import PredictionHistory from "../PredictionHistory/prediction-history"

class PredictionVliewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: []
        }
    }

    addPredictionToHistory = (prediction) => {
        
        this.setState((prevState) => {
            const {history} = prevState
            return {
                history: [...history, prediction]
            }
        })
    }

    render() {
        const {prediction} = this.props
        const {history} = this.state

        return (
            <>
                <PredictionCreater prediction={prediction} addPredictionToHistory={this.addPredictionToHistory} />
                <hr/>
                <PredictionHistory history={history} />
            </>
        );
    }
}

export default PredictionVliewer;