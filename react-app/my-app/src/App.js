import React from 'react';
import './App.css';
import PredictionViewer from "./components/PredictionViewer"



function App() {
    return (
        <div className="App">
            <PredictionViewer prediction={["Car","House","Money","Party"]} />
        </div>
    ); 
}
export default App;
