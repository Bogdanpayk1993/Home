import React, {Component} from 'react';
import './prediction-creater.css'

class PredictionCreater extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPrediction: 'Not selected'
        }
    }

    onClick=()=>{
        const {prediction, addPredictionToHistory} = this.props

        var r = Math.floor(Math.random() * prediction.length)

        this.setState({
            currentPrediction: prediction[r]
        })

        addPredictionToHistory(prediction[r])
    }

    render() { 
        return (  
            <>
                <button onClick={this.onClick}> Get prediction </button>
                <br/>
                Prediction : <span> {this.state.currentPrediction} </span>
            </>
        );
    }
}
 
export default PredictionCreater;